import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem"
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa' style={{backgroundColor: '#fbf3ed'}}>
                <Grid alignItems='center' item xs={6} >
                    <Box paddingX={20} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo'>Seja bem-vinda!</Typography>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display='flex' justifyContent='center'>
                        <Box marginRight={1}>
                        </Box>
                        <Button variant='outlined' className='botao' style={{borderRadius: '20px', backgroundColor:'#8f1f37', color: 'white'}}>Ver Postagens</Button>
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