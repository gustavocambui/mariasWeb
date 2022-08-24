import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { Box } from '@mui/material';
import './DeletarTema.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/tokensReducer';
import { toast } from "react-toastify";

function DeletarTema() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
        progress: undefined,
      });
      history("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/tema/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history('/feed')
    deleteId(`/tema/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success("Tema deletado com sucesso", {
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

  function nao() {
    history('/feed')
  }


  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.nome}
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="SimDeletar" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;