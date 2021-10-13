import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Persona } from "./Persona";

@Entity()
export class Cliente{
    //atributos   
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @IsNotEmpty()
    @IsEmail()    
    correo: string;

    @Column()
    @IsNotEmpty()
    estado: boolean;

    @OneToOne(type => Persona)
    @JoinColumn()
    persona: Persona;

}