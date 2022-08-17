import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./CadastroUsuario.css";

function CadastroUsuario() {

  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      email: "",
      senha: '',
      foto: ""
    })

  const [userResult, setUserResult] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      email: "",
      senha: '',
      foto: ""
    })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login")
    }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha && user.senha.length >= 8) {

      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "dark",
          progress: undefined,
        });
      } catch (error) {
        console.log(`Error: ${error}`);

        toast.error("Usúario já existente", {
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

    } else {
      const menssageError = confirmarSenha != user.senha ? "Senhas diferentes" : "Insira o minímo 8 caracteres na senha";
      toast.error(menssageError, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });

      setUser({ ...user, senha: "" });
      setConfirmarSenha("");
    }
  }

  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className='cor-fundo'>
      <Grid item xs={12} className='imagem2 alinhar-box'>


        <Grid item xs={6} alignItems='center'>
          <Box padding={10} className='box3'>
            <form onSubmit={onSubmit}>
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto2" >Cadastrar</Typography>
              <TextField style={{ backgroundColor: 'white' }} value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth required />
              <TextField style={{ backgroundColor: 'white' }} value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="Usuario" variant="outlined" name="usuario" margin="normal" fullWidth required />
              <TextField style={{ backgroundColor: 'white' }} value={user.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="email" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth required />
              <TextField style={{ backgroundColor: 'white' }} value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="Senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth required />
              <TextField style={{ backgroundColor: 'white' }} value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id="confirmarSenha" label="Confirmar Senha" variant="outlined" name="confirmarSenha" margin="normal" type="password" fullWidth required />
              <TextField style={{ backgroundColor: 'white' }} value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="foto" label="Foto" variant="outlined" name="foto" margin="normal" fullWidth type="text" />
              <Box marginTop={2} textAlign="center">
                <Link to="/login" className="text-decorator-none">
                  <Button variant="contained" color="secondary" className="botoes" >
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" variant="contained" color="primary" className="botoes">
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );

}

export default CadastroUsuario;