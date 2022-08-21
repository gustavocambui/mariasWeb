import React, { useEffect, ChangeEvent, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { addId, addToken } from '../../store/tokens/actions';
import './Login.css';
import { toast } from 'react-toastify';

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
                    <Box paddingX={20} className='box'>
                        <form onSubmit={onSubmit} className='box'>
                            <Typography style={{ color: 'white' }} variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className="textos">
                                Login
                            </Typography>
                            <TextField style={{ backgroundColor: 'white' }} value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField style={{ backgroundColor: 'white' }} value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary' className='botao'>
                                    Login
                                </Button>
                                <b className="form-ou"> OU</b>
                                <Link to='/cadastrousuario' className="link-cadastro">
                                    <Button type='submit' variant='contained' className='botao'>
                                        Cadastre-se
                                    </Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>


                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;