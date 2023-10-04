const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UsuariosService {
  async create(data) {
    const dat = await models.Usuario.create(data);
    if (!dat) {
      throw boom.notFound('Usuario o Contraseña not found');
    }
    const usuarioSinContraseña = {
      id: dat.id,
      username: dat.username,
      createdAt: dat.createdAt

    };
    return usuarioSinContraseña;

  }
  async addRole(data) {
    const dat = await models.RoleUsuario.create(data);
    if (!dat) {
      throw boom.notFound('Usuario not found');
    }
    return dat;
  }
  async subtractRole(roleId, usuarioId) {
    const user = await models.RoleUsuario.findOne({
      where: {
        roleId: roleId,
        usuarioId: usuarioId,
      },
    });
    if (!user) {
      throw boom.notFound('User not found');
    }

    const rta = await user.destroy();
    if (!rta) {
      throw boom.notFound('Delete User not found');
    }
    return rta;
  }
  async login(username, password) {
    const user = await models.Usuario.findOne({
      where: { username: username },
      include: ['roles', 'perfil'],
    });
    if (!user) {
      throw boom.notFound('Usuario o Contraseña not found');
    }
    if (user.dataValues.password != password) {
      throw boom.notFound('Usuario o Contraseña not found');
    }
    const usuarioSinContraseña = {
      id: user.id,
      username: user.username,
      perfilId: user.perfilId,
      createdAt: user.createdAt,
      perfil: user.perfil,
      roles: user.roles
    };
    return usuarioSinContraseña;
  }
  async find() {
    const usuarios = await models.Usuario.findAll();
    if (!usuarios) {
      throw boom.notFound('Usuarios not found');
    }

    return usuarios;
  }
  async findOne(usuarioId) {
    const user = await models.Usuario.findByPk(usuarioId, {
      attributes: ['id','username'],
      include: ['perfil'],
    });
    if (!user) {
      throw boom.notFound('User not found');
    }



   return user;
  }

  async delete( usuarioId) {
    const user = await this.findOne( usuarioId);
    const rta = await user.destroy();
    if (!rta) {
      throw boom.notFound('User not found');
    }

    return user;
  }
}
module.exports = UsuariosService;
