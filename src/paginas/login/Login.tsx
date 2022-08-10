import React, { useEffect, ChangeEvent, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import { addToken } from '../../store/tokens/actions';
import './Login.css';

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

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== "") {
            dispatch(addToken(token));
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert("Usuário logado com sucesso")
        }
        catch (error) {
            alert("Dados do usuário inconsistentes. Erro ao logar!");
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: "" }}>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto1" >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="email" label="email" variant="outlined" name="email" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Button type="submit" variant="contained" color="primary" style={{ borderColor: "white", borderRadius: "20px", backgroundColor: "#8f1f37", color: "white" }}>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center" style={{ fontWeight: 'bold' }} >Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} style={{
                backgroundImage: `url(https://img.freepik.com/vetores-premium/desenhos-de-mulheres-de-negocios-com-arquivos-na-frente-do-escritorio-design-de-mesa-de-reuniao-gestao-de-negocios-e-tema-corporativo_24911-60679.jpg?w=2000)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
    );
}

export default Login;