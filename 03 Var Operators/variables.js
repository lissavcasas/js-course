/* Sintaxis
tipoVariable nomVariable = valor ;
Declaración                Asignación
*/

/* Reglas para escribir el nombre de una variable :
- No puede iniciar con numeros o caracteres especiales (excepto el $)
- No permite espacios en blanco
- Si el nombre contiene dos o mas palabras pueden usar:
  camelCase, PascalCase, snake_case
- No pueden llamarse igual que las palabras reservadas
- Nombre significativo (debe ser descriptivo)
 */

/* VAR
- Se puede re inicializar (declarar)
- Se puede reasignar
- Su contexto es de función (function scope)
- Se puede declarar sin valor inicial

LET
- No se puede re inicializar (declarar)
- Se puede reasignar
- Su contexto es de bloque (block scope)
- Se puede declarar sin valor inicial

CONST
- No se puede re inicializar (declarar)
- No se puede reasignar
- Su contexto es de bloque (block scope)
- No se puede declarar sin valor inicial */

/* let nombre = 'Mari';
nombre = 'Meli';
console.log(nombre); */

/* function saludar() {
    var saludo = 'Hola';
    console.log(saludo);
}
saludar();
console.log(saludo); */

/* if (true) {
    let edad = 20;
    console.log(edad);
}
console.log(edad); */

const numero = 66;
console.log(numero);