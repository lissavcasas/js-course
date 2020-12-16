//Programa una función que solicite al usuario ingresar un texto,
//y cuente el número de caracteres de la cadena ingresada.
//Ejemplo: Si el valor ingresado es Hola Mundo debería retornar 10

const getString = () => {
    //let mensaje = `La cadena ingresada tiene ${cadena.length} caracteres`;
    //console.log(mensaje);

    let cadena = prompt('Ingrese un texto');
    console.log(cadena);

    if (cadena !== '' && cadena !== null) {
        alert(`La cadena ingresada tiene ${cadena.length} caracteres`);
    } else {
        alert('Ingrese un texto, por favor');
    }
}

getString();