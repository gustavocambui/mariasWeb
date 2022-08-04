import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static">
            <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#5d2019"}}>
                    <Box display="flex" justifyContent="start" style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            Marias Web
                        </Typography>

                        <Link to="home" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>

                        <Link to="sobreNos" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
                        
                        </Link>
                    </Box>

                    <Box display="flex" justifyContent="start">
                    
                        <Link to="login" className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                            <Typography variant="h6" color="inherit">
                                Logout
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