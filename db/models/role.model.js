const {Model,DataTypes, Sequelize} = require('sequelize');

const ROLE_TABLE = 'roles';
const roleSchema  = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Role extends Model{
  // crear metodos estaticos
  static associate(models){

  }
  // definir otrto estatico para la conexin
  static config(sequelize){
    return {
      sequelize,
      tableName:  ROLE_TABLE,
      modelName: 'Role',
      timestamps: false
    }
  }
}
module.exports = {
  ROLE_TABLE,
  roleSchema,
  Role
}
