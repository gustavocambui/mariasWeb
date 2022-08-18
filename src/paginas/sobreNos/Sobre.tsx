import React from "react";
import { Grid, Box, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Sobre.css'

function Sobre() {

      return (
            <Grid direction='column' justifyContent='center' className="corSobre">

                  <Grid container direction='row' justifyContent='center' alignItems='center'>

                        <Grid item xs={6} alignItems='center' >
                              <Box paddingX={20} >
                                    <Typography variant='h2' gutterBottom color='textPrimary' component='h2' align='center'>Sobre Nós </Typography>
                              </Box>
                              <Box paddingX={15}>
                                    <Typography variant='h6' gutterBottom color='textPrimary' component='h6' align='center'><p>Projeto baseado na ODS 5 que diz respeito a igualdade de gênero e tem por objetivo acabar com a discriminação contra todas as mulheres e meninas.
                                          A Marias's Web é uma rede social direcionada para mulheres em que elas poderão compartilhar experiências positivas de situações que muitas mulheres já passaram ou estão passando, formando assim uma forte rede de apoio em que mulheres poderão se inspirar através de histórias de conquistas e superação.</p>

                                    </Typography>
                              </Box>
                        </Grid>

                        <Grid item xs={6} style={{
                              backgroundImage: `url(https://media.discordapp.net/attachments/993494998597255249/1008801937795334234/unknown.png?width=924&height=1068)`,
                              backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'

                        }}>
                        </Grid>

                  </Grid>


                  <Grid container className='equipe'>

                        <Grid item xs={12} alignItems='center' justifyContent='center' padding='50px' flexDirection='column'>

                              <Box>
                                    <Box paddingX={20} >
                                          <Typography variant='h3' gutterBottom color='textPrimary' component='h2' align='center'>
                                                Desenvolvedores
                                          </Typography>
                                    </Box>
                              </Box>
                        </Grid>

                        <Grid item xs={12} className="alinhamento">
                              <Box className="equipe-contato1 alinhamento" >

                                    <Box className="contato-individual">

                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/3cndQjC.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Andreia Karoline Santos
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedora Full-Stack
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/andreiaksantos/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/deiakas/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/andreiakas" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>

                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/LY4j47Q.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Annie Santana
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedora Full-Stack
                                          </Box>
                                          <Box>
                                                <a href="https://www.linkedin.com/in/annie-santana-6995a2233/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/annie.santts/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/AnnieSantts" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>

                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/J7zAhm5.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Glauber Prado
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedor Full-Stack
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/glauber-prado-2ba2651b8/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/_glaauubeer_/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/Glauberdiasprado" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>
                                    <Box className="contato-individual">
                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/HceJmLj.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Gustavo Cambuí
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedor Full-Stack
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/gustavocambui/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/gustavocambui" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>




                              </Box>



                        </Grid>

                        <Grid item xs={12} paddingTop={'30px'}>
                              <Box className="equipe-contato alinhamento" >

                                    <Box className="contato-individual2">

                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/ZT27Fb3.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Mirian Regina Duarte
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedora Back-End
                                          </Box>
                                          <Box>
                                                <a href="https://www.linkedin.com/in/mirianduarte/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/marias_web/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/MirianDuarte" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>

                                    </Box>

                                    <Box className="contato-individual2">
                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/VkjpLAG.jpg" alt="" width={'300px'} height={'300px'} />
                                          </Box>

                                          <Box className="nome-individual">

                                                Nathalia Cruz Santos
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedora Back-End
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/nathalia-cruz-6b1561238/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/tthanalia/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/nathaliacrz" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>

                                    <Box className="contato-individual2">
                                          <Box >
                                                <img className="foto-individual" src="https://i.imgur.com/miNNrvI.jpg" alt="" />
                                          </Box>

                                          <Box className="nome-individual">

                                                Wellington de Sousa Quadros
                                          </Box>

                                          <Box className="profissao-individual">
                                                Desenvolvedor Full-Stack
                                          </Box>

                                          <Box>
                                                <a href="https://www.linkedin.com/in/wellington-quadros-724b09189/" target="_blank">
                                                      <LinkedinIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://www.instagram.com/juninho_quadros91/" target="_blank">
                                                      <InstagramIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                                <a href="https://github.com/WellingtonQuadros91" target="_blank">
                                                      <GitHubIcon style={{ fontSize: 30, color: "black" }} />
                                                </a>
                                          </Box>
                                    </Box>




                              </Box>



                        </Grid>







                  </Grid>





            </Grid>
      )
}
export default Sobre;
