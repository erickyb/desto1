const express = require('express');

const usuariosRouter = require('./usuarios.router');
const perfilesRouter = require('./perfiles.router');
const rolesRouter = require('./roles.router');
const tareasRouter = require('./tareas.router');
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/usuarios', usuariosRouter);
    router.use('/perfiles', perfilesRouter);
    router.use('/roles', rolesRouter);
    router.use('/tareas', tareasRouter);
}
module.exports = routerApi;
