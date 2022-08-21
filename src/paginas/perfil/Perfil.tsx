import React, { useEffect, useState } from 'react'
import { Grid, Button } from "@material-ui/core";
import { Avatar, Box } from "@mui/material";
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { UserState } from "../../store/tokens/tokensReducer";
import User from "../../models/User"
import { buscaId } from '../../services/Service'

import './Perfil.css'
import ListaPostagem from '../../components/postagens/listapostagem/ListaPostagem';

function Perfil() {

    function novaPostagem() {
        return navigate('/home')
    }

    let navigate = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )


    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        email: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Grid container >
            <Grid item xs={3} direction="row" className="card-principal">
                <Box className='card-container-info'>


                    <Avatar className='card-imagem'
                        src={user.foto || "https://i.imgur.com/7dkreWW.jpg"}
                        sx={{ width: 150, height: 150 }}
                        alt={user.nome} />

                    <Box >
                        <h1>{user.nome}</h1>
                    </Box>

                </Box>
                <Box className="button-container">
                    <Link to='/formularioPostagem' className='text-decorator-none'>
                        <Button variant="contained" className="criarPost" size="small" color="primary">
                            +
                        </Button>
                    </Link>
                    {/* <Button variant="contained" className="marginLeft" size="small" color="primary" style={{ backgroundColor: "#dbaa53" }}>
                        Inserir nova postagem
                    </Button> */}
                    <Link to='/formularioTema' className='text-decorator-none'>
                        <Button variant="contained" className="marginLeft" size="small" color="primary" style={{ backgroundColor: "#e14649" }}>
                            Inserir novo tema
                        </Button>
                    </Link>
                </Box>
            </Grid >
            <Grid item xs={6} direction="row" justifyContent="flex-end" alignItems="center" className="lista-postagem-fundo">
                <Box>
                    <ListaPostagem />
                </Box>
            </Grid>

            <Grid item xs={3} className="sidebar">
                <Box id="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar..." />
                </Box>

                <Box className="titulo-noticias">
                    Notícias

                    <a className="links" href=" https://www12.senado.leg.br/noticias/noticias/materias/2022/08/18/projeto-incentiva-pesquisas-sobre-violencia-contra-as-mulheres" target="_blank">
                        <Box className="conteudo-noticias">

                            <Box className="conteudo-noticias-titulo">
                                Projeto incentiva pesquisas sobre violência contra as mulheres

                            </Box>

                            <Box>
                                <img className="conteudo-noticias-foto" src="https://i.imgur.com/StzTVuM.jpg" alt="" />
                            </Box>
                            <Box className="conteudo-noticias-fonte">
                                Agência Senado
                            </Box>
                        </Box>
                    </a>
                    <a className="links" href="https://pt.euronews.com/next/2022/07/29/jovens-mulheres-diminuem-a-diferenca-de-genero-no-mundo-do-trabalho" target="_blank">
                        <Box className="conteudo-noticias">

                            <Box className="conteudo-noticias-titulo">

                                Jovens mulheres diminuem a diferença de gênero no mundo do trabalho
                            </Box>

                            <Box>
                                <img className="conteudo-noticias-foto" src="https://i.imgur.com/EOsclty.jpg" alt="" />
                            </Box>
                            <Box className="conteudo-noticias-fonte">
                                Euronews.
                            </Box>
                        </Box>
                    </a>
                    <a className="links" href="https://pt.euronews.com/2022/07/31/euro-2022-taca-regressa-a-inglaterra-pela-mao-da-selecao-feminina" target="_blank">
                        <Box className="conteudo-noticias">

                            <Box className="conteudo-noticias-titulo">

                                Euro 2022: Taça regressa a Inglaterra pela mão da seleção feminina
                            </Box>

                            <Box>
                                <img className="conteudo-noticias-foto" src="https://i.imgur.com/6Q3MWDM.png" alt="" />
                            </Box>
                            <Box className="conteudo-noticias-fonte">
                                Euronews.
                            </Box>
                        </Box>
                    </a>
                </Box>
            </Grid>




        </Grid>
    )
}

export default Perfil