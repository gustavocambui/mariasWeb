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
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

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
            <Grid item xs={4} direction="row" className="card-principal">
                <Box className='card-container-info'>
                    <Box >
                        <h1>{user.nome}</h1>
                    </Box>

                    <Avatar className='card-imagem'
                        src={user.foto || "https://i.imgur.com/7dkreWW.jpg"}
                        sx={{width:150,height:150}}
                        alt={user.nome} />

                </Box>
                <Box className="button-container">
                <ModalPostagem />
                    {/* <Button variant="contained" className="marginLeft" size="small" color="primary" style={{ backgroundColor: "#dbaa53" }}>
                        Inserir nova postagem
                    </Button> */}
                    <Link to='/formularioTema' className='text-decorator-none'>
                    <Button variant="contained" className="marginLeft" size="small" color="primary" style={{ backgroundColor: "#dbaa53" }}>
                        Inserir novo tema
                    </Button>
                    </Link>
                </Box>
            </Grid >
            <Grid item xs={8} direction="row" justifyContent="flex-end" alignItems="center">
                <Box>
                    <ListaPostagem />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Perfil