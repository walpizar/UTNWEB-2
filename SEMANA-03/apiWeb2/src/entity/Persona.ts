import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Persona{
    //atributos   
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    nombre: string;

    @Column()
    @IsNotEmpty()
    apellido1:string;

    @Column()
    @IsNotEmpty()
    apellido2: string;

    @Column()
    @IsNotEmpty()
    //@IsDate()
    fechaNac: Date;

}