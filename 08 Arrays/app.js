//-------Declarar objetos-------
//Sintaxis antigua

const numeros = new Array();
numeros[0] = 5;
numeros[1] = 10;
numeros[2] = 15;
console.log(numeros);

//Sintaxis actual

const letras = [
    'A', 'B', 'C', true, 58,
];
console.log(letras);
console.log(letras.length);

//-------Acceder a los valores de los arreglos-------

const items = [
    ['a', 'e', 'i', 'o', 'u'],
    [2, 4, 6],
    [true, false]
];
console.log(items);
console.log(items[0][3]);//o
console.log(items[2][1]);//false

//-------Destructuring-------

const numbers = ['one', 'two', 'three'];

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);

const [uno, dos, tres] = numbers;
console.log(uno);