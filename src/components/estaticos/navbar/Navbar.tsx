import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Marias Web
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                    <Link to="home" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>

                        <Link to="sobreNos" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                        
                        </Link>
                        <Link to="login" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        
                        </Link>
                       
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;