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

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

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

            <AppBar position="static" >
                <Toolbar variant="dense" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#ef9aa8", alignItems: 'center' }}>
                    <Box display="flex" justifyContent="start" className="logo" style={{ cursor: "pointer", alignItems: 'center' }} >

                        <Link to="home" className='text-decorator-none '>
                            <Box mx={1} style={{ cursor: "pointer", display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
                                <img src="https://i.imgur.com/2qz7bq2.png" alt="Logo" width={'50px'} height={'50px'} />
                                <Typography variant="h6" color="inherit">
                                    Maria's Web
                                </Typography>
                            </Box>
                        </Link>

                        {/* <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link> */}

                        {/* <Link to='/tema' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link> */}





                    </Box>

                    <Box display="flex" justifyContent="start" className="icones">

                    <Link to="home" className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                   <HomeIcon/>
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/perfil' className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    <AccountCircleIcon />
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="sobreNos" className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography variant="h6" color="inherit">
                                    <InfoIcon />
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="login" className='text-decorator-none'>
                            <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                                <Typography variant="h6" color="inherit" onClick={goLogout}>
                                   <PowerSettingsNewIcon/>
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

