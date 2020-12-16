/* CICLO FOR  */

//for (let i = 1; i <= 20; i++) {
//instruccion
//1vuelta: i = 0; ¿0 <= 3?; 0++
//2vuelta: i = 1; ¿1 <= 3?; 1++
//3vuelta: i = 2; ¿2 <= 3?; 2++
//4vuelta: i = 3; ¿3 <= 3?; 3++
//5vuelta: i = 4; ¿4 <= 3?; NO: FIN DEL BUCLE
//console.log(i);
//}

/* CICLO WHILE */

//  let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// } 

/* CICLO DO WHILE */

// let i = 1;

// do {
//     //instrucciones
//     console.log(i);
//     i++;
// }
// while (i <= 5)

/* BUCLE FOR IN */

let person = {
    name: 'Meli',
    lastname: 'Casas',
    developer: true,
}

for (let property in person) {
    console.log(property);
}

/* BUCLE FOR OF */

let arrNumbers = [2, 4, 6];

for (let val of arrNumbers) {
    console.log(val);
}