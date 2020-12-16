/* IF ELSE */

let edad = 15;

if (edad >= 18) {
    // líneas de código a ejecutar si la condición es verdadera
    console.log('Eres mayor de edad');
} else {
    // líneas a ejecutar si la condición es falsa
    console.log('Eres menor de edad');
}

/* IF ANIDADOS */
//Nota
//Si la nota es mayor a 17, mostrar Sobresaliente
//Si la nota es entre 12 y 16, mostrar Aprobado
//Si la nota es menor a 11, mostrar Reprobado

let nota = 11;

if (nota >= 17) {
    console.log('Sobresaliente');
} else if (nota >= 12 && nota <= 16) {
    console.log('Aprobado');
} else {
    //console.log('Reprobado');
    if (nota === 11) {
        console.log('Tu nota es 11')
    } else {
        console.log('Has sido reprobado');
    }
}

/* SWITCH */

let dia = 1;

switch (dia) {
    case 1:
        console.log('Lunes');
        break;

    case 2:
        console.log('Martes');
        break;

    case 3:
        console.log('Miercoles');
        break;

    case 4:
        console.log('Jueves');
        break;

    case 5:
        console.log('Viernes');
        break;

    case 6:
        console.log('Sabado');
        break;

    case 7:
        console.log('Domingo');
        break;

    default:
        console.log('Dia no encontrado');
}