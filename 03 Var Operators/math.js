const fecha = new Date();
const year = fecha.getFullYear();
const yearNac = 1995;

const edad = year - yearNac;
const texto = `La edad es ${edad} años`;
console.log(texto);

const mensaje = `La edad en 5 años será de ${edad + 5} `;
console.log(mensaje);

console.log(edad * 3);
console.log(edad / 5);