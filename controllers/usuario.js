const response = require('../utils/response');
const Usuario = require('../models/usuario');

exports.login = async (req, res) => {
    
       models.Usuario.findOne({
            where: {   usuario: req.body.usuario }
          }).then((usuario) => {
            if (!usuario) {
            response.CrearRespuesta("No existe usuario", null, res, 400);
            
            }else{
                if(usuario.contrasena== req.body.contrasena){
                    response.CrearRespuesta(null,usuario,res,200);
                }
            }
          }).catch(
              (e)=>{
            onsole.log(error);
            response.CrearRespuesta("Error del servidor", null, res, 500);
          });

        

};

exports.register= async (req, res) => {
    
    models.Usuario.create().then((usuario) => {
         if (!usuario) {
         response.CrearRespuesta("No existe usuario", null, res, 400);
         
         }else{
             if(usuario.contrasena== req.body.contrasena){
                 response.CrearRespuesta(null,usuario,res,200);
             }
         }
       }).catch(
           (e)=>{
         onsole.log(error);
         response.CrearRespuesta("Error del servidor", null, res, 500);
       });

     

};
