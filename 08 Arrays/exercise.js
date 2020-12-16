/* Ejercicios
    // 1- Crea una variable llamada amigos que guarde un arreglo,
    cuyos valores sean:
    Jhonatan, Sonia, Carlos, Paty.
    Muestra por consola: Mis amigos son Jhonatan y Carlos.

    // 2- Si queremos guardar un arreglo con 3 valores de tipo string,
    ¿Cuál es el error en la siguiente declaración?
    const personajes = ['Lucky' + 'Zoro' + 'Sanji'];

    // 3- Escribe una instrucción que devuelva la longitud del array amigos
    sea cual sea el número de datos almacenados en su interior
    y muestra el resultado por consola.

    // 4 - "Jhonathan" ha cambiado de nombre. Ahora se llama "John".
    Actualiza con una instrucción tu lista de amigos
    y muestra el resultado por consola.
 */

const amigos = ['Jhonatan', 'Sonia', 'Carlos', 'Paty'];
console.log(amigos[0]);
console.log(amigos[2]);
console.log(`Mis amigos son ${amigos[0]} y ${amigos[2]}`);

const personajes = ['Lucky', 'Zoro', 'Sanji'];
console.log(personajes);

console.log(amigos.length);

amigos[0] = 'John';
console.log(amigos);
