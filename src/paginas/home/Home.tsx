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
                <Grid alignItems='center' item xs={6} >
                    <Box paddingX={20} >
                        <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center' className='stilo-fonte' >Inspire outras mulheres!</Typography>
                        <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center' className='titulo'>Compartilhe aqui seus relatos de sucesso e superação</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>


                            <ModalPostagem />
                        </Box>
                        <Link to="/posts">
                            <Button variant='outlined' className='botao' style= {{ backgroundColor: '#8f1f37', color: 'white' }}>Ver Postagens </Button>
                        </Link>

                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media.discordapp.net/attachments/993484965914345526/1004734424870555719/WhatsApp_Image_2022-08-04_at_09.53.00-removebg-preview.png" alt="" width='700px' height='500px' />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;