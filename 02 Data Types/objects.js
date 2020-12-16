//Object: Key - value

var gato = {
    nombre: 'kitty',
    edad: 2,
    vivo: true,
};

console.log(gato);
console.log(typeof gato);

//Array

var frutas = ['coco', 'mango', 'pera'];
console.log(frutas);
console.log(typeof frutas);//object

console.log(Array.isArray(frutas));//true
console.log(Array.isArray(gato));//false