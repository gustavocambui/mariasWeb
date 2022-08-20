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
            <Grid container xs={12} className="container" direction="row">

                <Grid item xs={2}>
                    <img className='imgLogo' src="https://i.imgur.com/8QXUwf2.png" alt="Logo" />
                </Grid>
                <Grid item xs={2}>
                    <p className='textLogo'>Maria's Web</p>
                </Grid>

                <Grid item xs={6}>

                </Grid>

                <Grid item xs={2}>
                    <Box className='textRedesSociais'>
                        <p>Fale conosco:</p>
                    </Box>

                    <Box className="redesSociais">
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