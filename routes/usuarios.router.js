const express=require('express');
const router=express.Router();
const UsuariosService = require('../services/usuarios.service');
const service = new UsuariosService();
const  {
  createusuarioSchema,
  updateusuarioSchema,
  getusuarioSchema,
  loginusuarioSchema,
  addroleSchema,
  subtractroleSchema
  } = require('../schemas/usuario.schema');


  const validatorHandler = require('../middlewares/validator.handler');


router.get('/:usuarioId',
validatorHandler(getusuarioSchema, 'params'),
async (req,res,next)=>{
  try{
    const{usuarioId}=req.params;
  const usuario = await service.findOne(usuarioId);
  res.json(usuario);
  }catch(err){
    next(err);
  }
});
router.post('/',
validatorHandler(createusuarioSchema,'body'),
async (req, res,next) => {
  try{
    const body = req.body;
    const Newusuario = await service.create(body);
    res.json({
      message: 'created',
      data: Newusuario
    });
  }catch(err){next(err);}
});
router.post('/add-role',
validatorHandler(addroleSchema,'body'),
async (req, res,next) => {
  try{
    const body = req.body;
    const Newusuario = await service.addRole(body);
    res.json({
      message: 'add role',
      data: Newusuario
    });
  }catch(err){
    next(err);
  }
});

router.post('/login',
validatorHandler(loginusuarioSchema,'body'),
async (req, res,next) => {
 try{
  const {username,password} = req.body;
  const user = await service.login(username, password);
  res.json({
    message: 'login',
    data: user
  });
 }catch(err){next(err);}
});
router.patch('/:usuarioId',
validatorHandler(getusuarioSchema,'params'),
validatorHandler(updateusuarioSchema,'body'),
async (req, res,next) => {
  try{
    const { usuarioId } = req.params;
    const body = req.body;
    const xupdate = await service.update(usuarioId,body);
    res.json({
      message: 'updated',
      data: xupdate
    });
  }
  catch(err){
    next(err);
  }
});
router.delete('/:usuarioId',
  validatorHandler(getusuarioSchema,'params'),
  async(req, res,next) => {
  try{
    const { usuarioId } = req.params;
  const delX = await service.delete(usuarioId);
  res.json({
    message: 'deleted',
    data: delX
  });
  }catch(err){
    next(err);
  }
});

router.delete('/subtract-role',
  validatorHandler(subtractroleSchema,'body'),
  async(req, res,next) => {
  try{
    const { roleId,usuarioId } = req.body;
  const delX = await service.subtractRole(roleId,usuarioId);
  res.json({
    message: 'deleted',
    data: delX
  });
  }catch(err){
    next(err);
  }
});


module.exports=router;
