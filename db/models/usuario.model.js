const {Model,DataTypes, Sequelize} = require('sequelize');
const {PERFIL_TABLE}=require('../models/perfil.model');
const {ROLE_TABLE}=require('../models/role.model');

//const {ROLE_TABLE}=require('../models/role.model');
const USUARIO_TABLE = 'usuarios';
const usuarioSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  perfilId:{
    field: 'perfil_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PERFIL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  roleId:{
    field: 'role_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: ROLE_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'

  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model{
  // crear metodos estaticos
  static associate(models){

    this.belongsTo(models.Perfil, {as: 'perfil'});
    this.belongsTo(models.Role, {as: 'roles'});
    this.hasMany(models.Tarea,{
      foreignkey:'id'
    });
this.belongsTo(models.Perfil,{
  foreignkey:'id',
  target_key:'idPerfil'
})


  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}
module.exports = {
  USUARIO_TABLE,
  usuarioSchema,
  Usuario
}
