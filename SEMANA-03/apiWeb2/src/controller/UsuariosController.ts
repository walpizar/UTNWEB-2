import { json, Request, Response } from "express";

export class UsuariosController{


    static getAll = async (req:Request, res: Response)=>{
        console.log("obtener todos los usuarios");
        res.status(200).send('obtener todos los usuarios');

    }


    static getById = async (req:Request, res: Response)=>{
        console.log("obtener 1 usuarios");      
        res.status(200).send("obtener 1 usuarios");  
    }

    static new = async (req:Request, res: Response)=>{

        console.log("crear usuario");
        res.status(201).send("crear usuarios");          
    }

    static modify = async (req:Request, res: Response)=>{

        console.log("modificar usuario");
        res.status(201).send("modificar usuarios");  
    }

    static delete = async (req:Request, res: Response)=>{
        console.log("eliminar usuario"); 
        res.status(201).send("eliminar usuarios");         
    }





}