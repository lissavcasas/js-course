// ============= Para buscar entre elementos =============

//filter()
//Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

const strings = ['a', 'ab', 'abc', 'abcd', 'abcde'];
const filtered = strings.filter((string) => {
    if (string.length < 4) {
        return string;
    }
})
console.log(filtered);

// ============= Para iterar sobre elementos: =============

//forEach()
//Recorre los elemento de un array, pero no retorna nada. (Verán undefined)

strings.forEach((string) => {
    console.log(string);
})

// ============= Para transformar el arreglo =============

//map()
//Crea un nuevo array con el resultado de la función aplicada a cada uno de sus elementos.

const numbers = [1, 5, 10, 15];
const doubles = numbers.map((number) => {
    return number * 2;
})
console.log(doubles);

//reverse()
//Invierte el orden de los elementos de un array localmente y los retorna.
console.log(numbers.reverse());

//join()
//Convierte un array en un string. Por defecto el separador es una coma.
console.log(numbers.join('-'));

//sort()
//Ordena los elementos de un array localmente y devuelve el arreglo ordenado.
const fruits = ['fresa', 'coco', 'mango'];
console.log(fruits.sort());

const arrNumbers = [2, 4, 1, 5, 3];
//console.log(arrNumbers.sort().reverse());

const sorted = arrNumbers.sort((a, b) => {
    return b - a;
})
console.log(sorted);

//reduce()
//Ejecuta una función reductora sobre cada elemento de un array, 
//devolviendo como resultado un único valor.

const suma = arrNumbers.reduce((a, b) => {
    return a + b;
})
console.log(suma);