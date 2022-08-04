import React from "react";
import { Grid, Box, Typography} from '@mui/material';


function Sobre () {

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Grid alignItems='center' xs={6} style={{backgroundColor: "#fbf3ed"}}>
       <Box paddingX={20} >
       <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{fontWeight: 'bold'}}>Sobre Nós </Typography>
       </Box>
      <Box paddingX={8}>
      <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center'><p>Projeto baseado na ODS 5 que diz respeito a igualdade de gênero e  tem por objetivo acabar com a discriminação contra todas as mulheres e meninas. Escolhemos este tema pois, de acordo com uma pesquisa realizada pelo Programa das Nações Unidas para o Desenvolvimento (PNUD/ONU), o Brasil antes mesmo da pandemia perdeu seis posições no índice de Desigualdade de Gênero. Lembrando que o IDG leva em conta inserção de mulheres no mercado de trabalho, acesso à educação, direitos reprodutivos, dentre outros.</p>
      <p>Levando em conta os dados e índices citados anteriormente, pensamos em criar uma rede social direcionada para mulheres em que elas poderão compartilhar experiências, oportunidades de trabalho, serem direcionadas a canais de denúncias dentre outras opções, formando assim uma forte rede de apoio.</p> 
      <p>O objetivo principal é formar uma rede segura de apoio e informação para que a mulher tenha conhecimento de seus direitos, se sinta amparada e segura para denunciar abusos e procurar ajuda quando necessário.</p>
</Typography>
      </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://i.imgur.com/RJhk29Y.png)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
              }}>
      </Grid>
      </Grid>
)
}
export default Sobre;