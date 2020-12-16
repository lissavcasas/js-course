/* function saludar() {
    console.log('Hola a todos');
}

saludar();

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

console.log(sumar(467, 335)); */

/* FUNCIONES FLECHA */

const saludar = () => console.log('Hola a todos');
saludar();

const sumar = (numero1, numero2) => numero1 + numero2;
console.log(sumar(36, 25));
console.log('================');

/* CALLBACKS */

const mostrarTexto = (callback) => {
    console.log('Mensaje 1');
    callback;
}

const saludo = (nombre) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`);
    }, 2000);
}