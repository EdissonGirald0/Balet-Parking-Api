const { Parqueaderos, Usuarios} = require('../db');
const {request} = require("express");

const getInfDB = async () => {
    const gameArrays = await Parqueaderos.findAll({
    });
    const limpArray= gameArrays.map((limp) => {
        return {
            id: limp.id,
            disponibilidad: limp.name,
        };
    });
    return limpArray;
};
const postcliente = async () =>{

    const {
        celular,
        nombre,
        pass,
        asistencia,

    }= request.body
    
   const nuevocliente = await Usuarios.create({
       celular,
       nombre,
       pass,
       asistencia,

   })
}

const ingresaCliente = async (pass) =>{
    try {
        if (asi){

        }
    }catch (e) {
        
    }
}