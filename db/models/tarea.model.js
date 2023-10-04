const {Model,DataTypes, Sequelize} = require('sequelize');

//const {ROLE_TABLE}=require('../models/role.model');
const TAREA_TABLE = 'tareas';
const tareaSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  },
  minutos:{
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Tarea extends Model{
  // crear metodos estaticos
  static associate(models){
Tarea.belongsTo(models.Usuario.model,{
  foreignkey:'id',
  target_key:'idUsuarios'

})
  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName: TAREA_TABLE,
      modelName: 'Tarea',
      timestamps: false
    }
  }
}
module.exports = {
  TAREA_TABLE,
  tareaSchema,
  Tarea
}
