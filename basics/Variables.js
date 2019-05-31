//Declarando variables en JavaScript

var username = "john";
let lastname = "carter";

//Ejemplo de Hoisting con var
var i;
console.log(i); //undefined error
i =1;
console.log(i); // i=1


//Ejemplo de let como variable global

let i = 0;
function foo(){
    i =1;
    let j = 2;
    if(true){
        console.log(i); //1
        console.log(j); //2
    }
}

foo();

/*
    Si la variable solo es declarada en el bloque esta solo
    pertenece a ese bloque
*/

//Ejemplo de let como variable local
function foo(){
    i = 1;
    let j = 2;
    if(true){
        let i = 1; // solo para el if
        console.log(i); //1
    }
    console.log(i); //0
}

foo();

//Ejemplo mutable de una const

const user = {name:'Juan'};
user.username = 'Parda';
console.log(user);
//OUTPUT: {name:  'Juan', surnmae: 'Parda'}



/*
    NOTA: 'var' define una variable en el ambito local 
    actual, y se hereda a los scopes descendientes
    si var es declarado fuera de la funcion sera global

    NOTA: El Hoisting sólo es valido con var

    NOTA: let es usada en lo que queda entre corchetes
    ya sean funciones o bloques if,while,for y loops similares

    NOTA: var : para scope global  o local de funcion
          let: scope global, local o de bloque
          const: global, local o funcion, no reasignable pero mutable
*/