
const {Usuario, usuarioSchema}= require('./usuario.model');
const {Perfil, perfilSchema}= require('./perfil.model');
const {Role, roleSchema}= require('./role.model');
const {RoleUsuario, roleUsuarioSchema}= require('./roleUsuario.model');
const {Tarea, tareaSchema}= require('./tarea.model');
function setupModels(sequelize){

Usuario.init(usuarioSchema,Usuario.config(sequelize));
Perfil.init(perfilSchema,Perfil.config(sequelize));
Role.init(roleSchema,Role.config(sequelize));
RoleUsuario.init(roleUsuarioSchema,RoleUsuario.config(sequelize));
Tarea.init(tareaSchema,Tarea.config(sequelize));


Usuario.associate(sequelize.models);
Perfil.associate(sequelize.models);
Role.associate(sequelize.models);
RoleUsuario.associate(sequelize.models);
Tarea.associate(sequelize.models);

}
module.exports = setupModels;
