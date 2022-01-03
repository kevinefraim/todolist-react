import React from "react";
import "./ToDoList.css";
import { Grid, List, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import Lista from "../Lista/Lista";

const ToDoList = () => {
  const [tarea, setTarea] = useState("");
  const [lista, setLista] = useState([]);

  const changeTarea = (e) => setTarea(e.target.value); //Funcion para agregar tarea

  //Funcion de agregar tarea
  const addTarea = (e) => {
    e.preventDefault();
    if (tarea === "") return;
    //crear objeto con el ID y el nombre de la tarea
    setLista([{ id: new Date().getTime(), name: tarea }, ...lista]);
    setTarea("");
  };

  //Funcion de remover tarea seleccionada
  const removerTarea = (id) => {
    setLista(lista.filter((listItem) => listItem.id != id));
  };

  return (
    <div>
      <Typography variant="h1" align="center" mt={3}>
        To Do List
      </Typography>
      <form className="contenedor-input" onSubmit={addTarea}>
        <TextField
          id="standard-basic"
          label="Ingrese aquí una tarea"
          variant="standard"
          value={tarea}
          onChange={changeTarea}
        />
      </form>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid item xs={12} md={6}>
          {lista.length === 0 ? (
            <Typography variant="h4" align="center" color={grey[400]} mt={3}>
              Agregue tareas aquí
            </Typography>
          ) : (
            <List>
              {lista.map((todo) => (
                <Lista key={todo.id} {...todo} removerTarea={removerTarea} />
              ))}
            </List>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default ToDoList;
