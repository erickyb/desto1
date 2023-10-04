'use strict';

const {USUARIO_TABLE,usuarioSchema}=require('../models/usuario.model');
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(USUARIO_TABLE,usuarioSchema);

  },

  async down (queryInterface, Sequelize) {


    await queryInterface.dropTable(USUARIO_TABLE);

  }
};
