//Operadores en JavaScript

let num = 60;
let num2 = 100;
let result = num + num2;

console.log(result); //160

//Concatenacion de Strings

let name = 'Francisco';
let lastName = 'Ramirez';
let completeName = name + ' ' + lastName;

console.log(completeName);


//Comparacion de valores

let numMayor = num > num2;
console.log(numMayor); //false

let numDiferente = num != num2; //true

let numMenor = num < num2; //true


//Ejemplo de comparacion con las bases de datos
let pswDB = 'pepe123';

let input = 'asdasd';

let resultado = input == pswDB; //false : not login