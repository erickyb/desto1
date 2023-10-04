const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');
class TareasService {
  async create(data){
    const dat = await models.Tarea.create(data);
    if(!dat){throw boom.notFound("Tarea not found");}
    return dat;
  }
  async find(){
    const Tareas = await models.Tarea.findAll();
    return Tareas;
  }
  async findOne(id){
    const Tarea = await models.Tarea.findByPk(id);
    if(!Tarea){throw boom.notFound("Tarea not found");}
    return Tarea;
  }
  async delete(id){
    const Tarea = await this.findOne(id);
    const rta = await Tarea.destroy();
    if(!rta){throw boom.notFound("Tarea not found");}
    return Tarea;
  }
}
module.exports = TareasService;
