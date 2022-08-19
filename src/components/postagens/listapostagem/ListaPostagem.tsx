import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./ListaPostagem.css";
import { useSelector } from "react-redux";
import Postagem from "../../../models/Postagem";
import { UserState } from "../../../store/tokens/tokensReducer";
import { busca } from "../../../services/Service";
import { toast } from "react-toastify";
import Perfil from "../../../paginas/perfil/Perfil";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

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
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length])
  console.log(posts)

  return (
    <>
      {
        posts.map(post => (
          <Box m={2}>
            <Card variant="outlined" className="card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.tema?.nome}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size="small" color="primary" style={{ backgroundColor: "#dbaa53" }}>
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size="small" color="secondary" style={{ backgroundColor: "#cf9d9c" }}>
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }

    </>
  )
}

export default ListaPostagem;