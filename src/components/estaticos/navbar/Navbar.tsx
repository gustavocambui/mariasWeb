import React from 'react';
import { Box } from '@mui/material';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Action, addToken } from '../../../store/tokens/actions';


function Navbar() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''))
        alert("Deslogando... Tchau, mô!")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =

            <AppBar position="static">
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#5d2019" }}>
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

                        <Link to='/postagens' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/temas' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='text-decorator-none'>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        </Link>

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
                                <Typography variant="h6" color="inherit" onClick={goLogout}>
                                    Logout
                                </Typography>
                            </Box>

                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>

    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;

function dispatch(arg0: Action) {
    throw new Error('Function not implemented.');
}

