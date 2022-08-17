import React from 'react';
import { Box } from '@mui/material';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { Action, addToken } from '../../../store/tokens/actions';
import { toast } from "react-toastify";

function Navbar() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    function goLogout() {
        dispatch(addToken(''))
        toast.info("Usuario deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "dark",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent =

            <AppBar position="static">
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#5d2019" }}>
                    <Box display="flex" justifyContent="start" style={{ cursor: "pointer" }} >

                        <Link to="home" className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Maria's Web
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/tema' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/perfil' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Perfil
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

