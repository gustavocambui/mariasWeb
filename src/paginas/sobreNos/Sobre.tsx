import React from "react";
import { Grid, Box, Typography} from '@mui/material';


function Sobre () {

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Grid alignItems='center' xs={6} >
       <Box paddingX={20} >
       <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center'>Sobre Nós </Typography>
       </Box>
      <Box paddingX={15}>
      <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center'><p>Projeto baseado na ODS 5 que diz respeito a igualdade de gênero e tem por objetivo acabar com a discriminação contra todas as mulheres e meninas. 
A Marias's Web é uma rede social direcionada para mulheres em que elas poderão compartilhar experiências positivas de situações que muitas mulheres já passaram ou estão passando, formando assim uma forte rede de apoio em que mulheres poderão se inspirar através de histórias de conquistas e superação.</p> 
    
</Typography>
      </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://media.discordapp.net/attachments/993494998597255249/1008801937795334234/unknown.png?width=924&height=1068)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
              }}>
      </Grid>
      </Grid>
)
}
export default Sobre;
