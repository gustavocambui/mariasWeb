import React, { useEffect, ChangeEvent, useState } from 'react';
import { Grid, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { addId, addToken } from '../../store/tokens/actions';
import './Login.css';
import { toast } from 'react-toastify';
import { AccountCircle, VpnKey } from '@material-ui/icons';

function Login() {

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            email: "",
            senha: "",
            foto: "",
            token: ""
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({

        id: 0,
        nome: "",
        usuario: "",
        email: "",
        senha: "",
        foto: "",
        token: ""

    })

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token));
            navigate('/feed')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (respUserLogin.token !== "") {


            console.log("Token: " + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)


            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))
            navigate('/feed')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.success("Usuário logado com sucesso.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                progress: undefined,
            });
        }
        catch (error) {
            toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "dark",
                progress: undefined,
            });
        }
    }

    return (
        <Grid className='box-form' container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={12} className="imagem-login centralizar" justifyContent='center' >
                <Grid alignItems='center' xs={4} justifyContent='center' >
                    <Box paddingX={20} className='box box-shadow-effect'>
                        <form onSubmit={onSubmit} className='box'>
                            <Typography variant='h4' gutterBottom color='textPrimary' align='center' className="textos">
                                Login
                            </Typography>
                            <TextField
                                value={userLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='usuario'
                                label='Usuário'
                                variant='outlined'
                                name='usuario'
                                margin='normal'
                                fullWidth
                                required
                                inputProps={{minLength: 3,maxLength: 50}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                value={userLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                                id='senha'
                                label='Senha'
                                variant='outlined'
                                name='senha'
                                margin='normal'
                                type='password'
                                fullWidth
                                required
                                inputProps={{minLength: 8,maxLength: 50}}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKey />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Box marginTop={2} style={{display: 'flex', justifyContent: 'center'}}>
                                <Button type='submit' variant='contained' color='primary' className='botaoLogin'>
                                    Login
                                </Button>
                                <Link to='/cadastrousuario' className="link-cadastro">
                                    <Button type='submit' variant='contained' className='botaoCadastro'>
                                        Cadastre-se
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;