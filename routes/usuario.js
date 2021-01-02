const Usuario = require('../models/usuario');
const usuarioController= require('../controllers/usuario')

router.post('/login' ,usuarioController.login);

module.exports=router;