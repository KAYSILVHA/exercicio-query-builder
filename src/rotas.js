const express = require("express");
const usuarios = require('./controladores/usuarios')
const rota = express();

rota.get('/usuarios', usuarios.listar);
rota.get('/usuarios/:id', usuarios.obter);
rota.post('/usuarios', usuarios.cadastrar);
rota.put('/usuarios/:id', usuarios.editar);
rota.delete('/usuarios/:id', usuarios.excluir);

mudule.exports = rota;