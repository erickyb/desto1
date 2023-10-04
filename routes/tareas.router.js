const express=require('express');
const router=express.Router();
const TareasService = require('../services/tareas.service');
const service = new TareasService();
const  {
  createtareaSchema,
  gettareaSchema
  } = require('../schemas/tarea.schema');


  const validatorHandler = require('../middlewares/validator.handler');


router.get('/:tareaId',
validatorHandler(gettareaSchema, 'params'),
async (req,res,next)=>{
  try{
    const{tareaId}=req.params;
  const tarea = await service.findOne(tareaId);
  res.json(tarea);
  }catch(err){
    next(err);
  }
});
router.post('/',
validatorHandler(createtareaSchema,'body'),
async (req, res,next) => {
  try{
    const body = req.body;
  const Newtarea = await service.create(body);
  res.json({
    message: 'created',
    data: Newtarea
  });
  }catch(err){next(err);}
});

router.delete('/:tareaId',
  validatorHandler(gettareaSchema,'params'),
  async(req, res,next) => {
  try{
    const { tareaId } = req.params;
  const delX = await service.delete(tareaId);
  res.json({
    message: 'deleted',
    data: delX
  });
  }catch(err){
    next(err);
  }
});



module.exports=router;
