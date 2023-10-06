const {config} = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}

// module.exports = {
//   development: {
//     username: 'tu_usuario',
//     password: 'tu_contraseña',
//     database: 'nombre_de_tu_base_de_datos',
//     host: 'localhost',

//   },
//   // Otras configuraciones (producción, prueba, etc.)
// };
