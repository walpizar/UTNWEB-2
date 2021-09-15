//declarar variable
// var-let-const

const MAX=4;
let num1=4;
let num2=7;
var num3=9;
var nombre="Juan";


console.log(num1);

if(true){
    let num1=5;    
    console.log(num1);
}
 console.log(num1);

//objetos
 const obj={
    nombre:"Luis",
    apellido:"Rojas"
 }
//validar si un objetos tiene un atributo especifico
 const tieneDato= obj.hasOwnProperty("apellido");
 console.log(tieneDato);

 if(obj.apellido){
     console.log("si tiene");
 }

 //tipos de datos
 //number
 //string
 //boolean
 //objeto
 //array

//coercion
const result= "5" + 5 ;
const result1= false + "5";
console.log(result);
console.log(result1);

// > <  >= <= != = == ===  !==

if("5" == 5){
    console.log("iguales");
}

if("5" !== 5){
    console.log("iguales");
}


for(let atributo in obj){

    console.log(obj[atributo]);
}

console.log(obj.nombre);


const arreglo =[obj,obj,"azul","verde"];

var x= arreglo.forEach(x=>{
    console.log(x);
});

const listaPersona=[
    {nombre:"Luis", apellido:"Perez", edad:20},
    {nombre:"Maria", apellido:"Rodriguez", edad:85},
    {nombre:"Pedro", apellido:"Rojas", edad:45},
    {nombre:"Juan", apellido:"Alpizar", edad:36},
    {nombre:"Carlos", apellido:"Arguello", edad:6},
]
console.log("map");
var y= arreglo.map((valor)=>{
    const nombre= valor;
    return {
        nombre
    }
});

var nombres= listaPersona.map((valor)=>{
  
    const nombre= `El nombre es ${valor.nombre} y su apellido es ${valor.apellido}`;
     
    return {
        nombre
    }
});




console.log("foreach"+x);
console.log("map"+y);
console.log("map nombre"+ nombre);




var pers= listaPersona.filter(x=>x.edad>30).map(persona=>{
    console.log(persona.nombre);
});


console.log("filter"+ pers);


//hoisting

leer();

function leer(){
    console.log("estoy leyendo");
}




























