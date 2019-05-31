//Condcionales en JavaScript

let pswDB = 'psw123';
let input =   'asdasd';
let result = input == pswDB; //false


// Condicional: IF-ELSE

if(result == true){
    console('Login success!');
}else{
    console.log('Invalid password');
}

// IF ANIDADO

let score = 70;

if(score > 30){
    console.log('Well done, you are so good player');
}else if(score > 15){
    console.log('You need to practice more');
}else{
    console.log('You need to follow this tutorial');
}



// CONDICIONAL SWITCH
let typeCard = 'Debid Card';

switch(typeCard){
    
    case 'Debid Card': console.log('Esto es una tarjera de debito');
    break;

    case 'Credit Card': console.log('Esto es una tarjera de credito');
    break;

    default: 
        console.log('Invalid Card');
}