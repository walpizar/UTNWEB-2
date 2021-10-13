import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Cliente } from "../entity/Cliente";
import { Persona } from "../entity/Persona";

export class ClientesController{

    static getAll = async (req:Request, res: Response)=>{
       const clienteRepo = getRepository(Cliente); 

       let lista;

       try {
            lista = await clienteRepo.find({select:['id','correo'],where:{estado:1}, relations:["persona"]});
       } 
       catch (error) {
           res.status(404).json({mensaje:'Algo fue mal!'});
       }
    
       if(lista.length > 0){
            res.send(lista);
       }else{
            res.status(404).json({mensaje:'No hay resultados!'});
       }
    }


    static getById = async (req:Request, res: Response)=>{
        const clienteRepo = getRepository(Cliente);

        const { id } = req.params;

        try {
             const cliente = await clienteRepo.findOneOrFail(id, 
                {select:['id','correo'], 
                where:{estado:1}, relations:["persona"]});

             res.send(cliente);
        } 
        catch (error) {
            res.status(404).json({mensaje:'No se encontro el usuario!'});
        }
     
    }

    static new = async (req:Request, res: Response)=>{

        const clienteRepo = getRepository(Cliente);
        const { nombre, apellido1, apellido2, fechaNac, correo, password }  = req.body;

        let cliente = new Cliente();
        let persona = new Persona();

        if(!nombre){
            res.status(404).json({mensaje:'Falta el nombre!'});
        }
        if(!apellido1){
            res.status(404).json({mensaje:'Falta el apellido 1!'});
        }
        if(!apellido2){
            res.status(404).json({mensaje:'Falta el apellido 2!'});
        }
        if(!fechaNac){
            res.status(404).json({mensaje:'Falta Fecha Nacimiento!'});
        }
        if(!correo){
            res.status(404).json({mensaje:'Falta correo electronico!'});
        }
        if(!password){
            res.status(404).json({mensaje:'Falta password!'});
        }

        persona.nombre= nombre;
        persona.apellido1= apellido1;
        persona.apellido2= apellido2;
        persona.fechaNac= fechaNac;

        cliente.correo= correo;
        cliente.estado = true ;

        //join
        cliente.persona= persona;


        //validacion de decoredares de class validator
        const validateOpt = { validationError: { target:false, value:false} };
        const errores = await validate(cliente, validateOpt);
       //valiado si hay errores
        if(errores.length>0){
            return res.status(400).json(errores);
        }

       

        //guardo
        try {
            await clienteRepo.save(cliente);
        } catch (error) {
            return res.status(409).json({mensaje:'El cliente ya existe!'})
        }       
  
        res.status(201).send("Cliente creado");          
    }

}