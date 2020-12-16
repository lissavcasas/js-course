//------- Crear objetos -------

//1. Crear un objeto literal

const perro = {
    nombre: 'coco',
    color: 'negro',
    masculino: true,
};
console.log(perro);

//2. Usando la palabra new

const celular = new Object();
celular.marca = 'Xiaomi';
celular.pantalla = 6.3;
celular.color = 'azul';
console.log(celular);

//3. function constructor

function Persona(nombre, edad, pasatiempos) {
    this.nombre = nombre;
    this.edad = edad;
    this.pasatiempos = pasatiempos;
};

const persona1 = new Persona('John', 26, ['programar', 'cantar']);
console.log(persona1);

const persona2 = new Persona('Meli', 27, ['ver animes', 'bailar']);
console.log(persona2);

// -------Accceder a los valores de un objeto -------

//Notacion de punto
console.log(perro.nombre);
console.log(perro.color);

//Notacion con corchetes
console.log(celular['marca']);
console.log(celular['pantalla']);

const usuario = {
    'el nombre': 'Edu',
};
console.log(usuario['el nombre']);

// -------Destructuración-------

//Forma tradicional
// const marca = celular.marca;
// const pantalla = celular.pantalla;
// const color = celular.color;
// console.log(marca, pantalla, color);

//Destructuring
const { marca, pantalla, color } = celular;
console.log(marca, pantalla, color);

// -------Object Keys, Object Values-------

//Object Keys
const arrLlaves = Object.keys(celular);
console.log(arrLlaves);//arr

for (let llave of arrLlaves) {
    //alert(llave);
};

//Object Valyes
const arrValores = Object.values(perro);
console.log(arrValores);

for (let valor of arrValores) {
    //alert(valor);
};