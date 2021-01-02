exports.CrearRespuesta= (error,data,res,statusCode)=>{
    let respuesta ={
        error: false,
        data: '',
    }
    if (error!=null){
        respuesta.error=true;
        respuesta.data=error;
    }
    else{
        respuesta.data=data;
    }
    
    res.status(statusCode);
    res.send(respuesta);
}