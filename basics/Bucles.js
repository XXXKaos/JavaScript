// TRABAJANDO CON BUCLES
let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

console.log("\n");

let names = ['javier', 'joe', 'oscar', 'mario'];
console.log(names[0]); // javier
console.log(names[3]); // mario

console.log("\n");

//metodo length
console.log(names.length);

console.log("\n"); // salto de linea

// BUCLE FOR

for(let i = names.length -1; i>= 0; i--){
    console.log(names[i]);
}
