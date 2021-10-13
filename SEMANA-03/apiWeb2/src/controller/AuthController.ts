import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Usuarios } from "../entity/Usuarios";
import * as jwt from 'jsonwebtoken';
import config from "../config/config";

export class AuthController{

    static login = async (req:Request, res: Response)=>{
   
        const{correo, password} = req.body;

        if(!(correo && password)){
            return res.status(400).json({mensaje: 'Correo o contraseña requerida!'})
        }

        const userRepo = getRepository(Usuarios);

        let usuario: Usuarios;
        try {
            usuario = await userRepo.findOneOrFail({where:{correo}}) ;
        } catch (error) {
            return res.status(400).json({mensaje: 'Correo o contraseña incorrectas!'})
        }

        if(!usuario.checkPassword(password)){
            return res.status(400).json({mensaje: 'Correo o contraseña incorrectas!'})

        }
        
        const token = jwt.sign({userId:usuario.id, correo: usuario.correo}, config.jwtSecretKey, { expiresIn:'20m'} );



        res.status(200).json({mensaje:'OK',token});
    
    }
}