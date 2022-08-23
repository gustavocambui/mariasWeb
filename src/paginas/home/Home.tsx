import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Home.css';
import { UserState } from '../../store/tokens/tokensReducer';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate()
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa' style={{ backgroundColor: '#fbf3ed' }}>
                <Grid alignItems='center' item xs={12} >
                    <Box paddingX={20} className="">
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='stilo-fonte' >Inspire outras mulheres!</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center' className='titulo'>Compartilhe aqui seus relatos de sucesso e superação.</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>


                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="link-postagens">
                            <Button variant='outlined' className='botao' style={{ backgroundColor: '#8f1f37', color: 'white' }}>
                                Ver Postagens
                            </Button>
                        </Link>

                    </Box>
                </Grid>
                {/* <Grid item xs={6} >
                    <img src="https://media.discordapp.net/attachments/993484965914345526/1004734424870555719/WhatsApp_Image_2022-08-04_at_09.53.00-removebg-preview.png" alt="" width='700px' height='500px' />  */}
                {/* </Grid>  */}

                <Grid container xs={12}>

                    <Grid item xs={1} className="box-missao-lateral"></Grid>

                    <Grid item xs={10}>
                        <Box className="box-missao">

                            <Box className="box-missao-titulo">
                                Nossa missão
                            </Box>

                        

                            <Box className="box-missao-texto">


                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                <Box className="box-missao-texto-foto">
                                    <img src="https://i.imgur.com/9NfqFju.png" alt="" width={'500px'} height={'300px'} style={{borderRadius: '200px'}} />
                                </Box>
                            </Box>

                        </Box>
                    </Grid>

                    <Grid item xs={1} className="box-missao-lateral"></Grid>

                </Grid>
                <Grid container xs={12} className='postagens'>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={10} className="inspiracoes">
                        <h1 className="inspiracoesTitulo">Conheça histórias de mulheres inspiradoras</h1>
                    </Grid>

                    <Grid item xs={1}></Grid>

                    <Grid item xs={6} className="margaret" >

                        <Box className="margaret-foto">
                            <img src="https://i.imgur.com/xRGGTHj.jpg" alt="Margaret" width={'650px'} height={'400px'} />
                        </Box>


                    </Grid>


                    <Grid item xs={6} className="margaret" style={{ justifyContent: 'center' }}>

                        <Box className="margaret-texto">

                            <Box className="margaret-titulo">
                                <h3>Margaret Hamilton</h3>
                            </Box>

                            <Box className="margaret-tt">
                                <p>
                                    Margaret Heafield Hamilton (Paoli, Indiana, 17 de agosto de 1936) é uma cientista da computação, engenheira de software e empresária estadunidense. Foi diretora da Divisão de Software no Laboratório de Instrumentação do MIT, que desenvolveu o programa de voo usado no projeto Apollo 11, a primeira missão tripulada à Lua. O software de Hamilton impediu que o pouso na Lua fosse abortado.
                                </p>
                                <p>
                                    Margaret publicou mais de 130 artigos, atas e relatórios relacionados aos 60 projetos e seis programas importantes nos quais ela esteve envolvida. Em 22 de novembro de 2016 foi premiada com a Medalha Presidencial da Liberdade pelo presidente dos Estados Unidos Barack Obama, honraria recebida por seu trabalho sobre o desenvolvimento do software de voo a bordo das missões Apollo da NASA.
                                </p>
                            </Box>

                        </Box>

                    </Grid>


                </Grid>
            </Grid>

            <Grid container xs={12} className='postagens-2'>

                <Grid item xs={6} className="margaret" style={{ justifyContent: 'center' }}>

                    <Box className="margaret-texto">

                        <Box className="margaret-titulo2">
                            <h3>Marie Curie</h3>
                        </Box>

                        <Box className="margaret-tt2">
                            <p>
                                Marie Skłodowska-Curie, nascida Maria Salomea Skłodowska (Varsóvia, 7 de novembro de 1867 — Passy, 4 de julho de 1934), foi uma física e química polonesa naturalizada francesa, que conduziu pesquisas pioneiras sobre radioatividade. Ela foi a primeira mulher a ganhar o Prêmio Nobel, sendo também a primeira pessoa e a única mulher a ganhá-lo duas vezes, além de ser a única pessoa a ser premiada em dois campos científicos diferentes. Ela teve papel fundamental no legado da família Curie, de cinco prêmios Nobel. Ela também foi a primeira mulher a se tornar professora na Universidade de Paris e, em 1995, se tornou a primeira mulher a ser sepultada por seus próprios méritos no Panteão de Paris.
                            </p>
                            <p>

                                Nascida em Varsóvia, no que era então o Reino da Polônia, parte do Império Russo, ela estudou na clandestina Universidade Volante de Varsóvia e iniciou seu treinamento científico prático na mesma cidade. Em 1891, aos 24 anos, seguiu sua irmã mais velha, Bronisława, para estudar em Paris, onde obteve seus diplomas superiores e conduziu seus trabalhos científicos subsequentes. Ela compartilhou o Prêmio Nobel de Física de 1903 com seu marido, Pierre Curie, e com o físico Henri Becquerel. Ela também ganhou o Prêmio Nobel de Química de 1911.
                            </p>
                        </Box>

                    </Box>

                </Grid>

                <Grid item xs={6} className="margaret" >

                    <Box className="margaret-foto2">
                        <img src="https://i.imgur.com/CFqmVwr.png" alt="Margaret" width={'450px'} height={'500px'} />
                    </Box>


                </Grid>

            </Grid>

        </>
    );
}

export default Home;