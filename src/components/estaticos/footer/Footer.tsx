import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import "./Footer.css"

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = 
        <Grid container direction="row" justifyContent="center" alignItems="center" className="row">

        <Grid alignItems="center" item xs={12} >

           
      <Box className="row"style={{backgroundColor: "#ef9aa8", height: "120px" }}>
                
        <Box className="logo-copyright">
          <Box className='logo-footer'>
                <img src="https://i.imgur.com/8QXUwf2.png"alt="Logo" width={'80px'} height={'80px'} />

                <p>Maria's Web</p>
                
             <Box>


                <Box paddingLeft={'1000px'} display="flex" alignItems="center" justifyContent="flex-end">
                    <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>
                       Redes sociais: 
                        </Typography>
                </Box>
                <Box paddingLeft={'1400px'} display="flex" alignItems="center" justifyContent="flex-end">
                    <a href="https://www.facebook.com/Marias-Web-111470941659330/?ref=page_internal" target="_blank">
                        <FacebookIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href="https://www.instagram.com/marias_web/" target="_blank">
                        <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href="https://github.com/gustavocambui/mariasWeb" target="_blank">
                        <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                </Box>
                </Box>
                
             </Box>

                <Box paddingTop={1}>
                   
                </Box>
               
              


               
            </Box>
            </Box>
            <Box style={{ backgroundColor: "#ef9aa8", height: "60px" }}>
              
               
                
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;