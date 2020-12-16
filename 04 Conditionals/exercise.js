/*
Crea un programa que permita colocar una edad
y en base al siguiente registro,
mostrar a qué tipo de persona pertenece:
-	Infante: 0 – 5
-	Niño(a): 6 – 11
-	Adolescente: 12 – 18
-	Joven: 19 – 26
-	Adulto: 27 – 59
-	Anciano > 60
*/

let edad = 80;

switch (true) {
    case (edad >= 0 && edad <= 5):
        console.log('Infante');
        break;
    case (edad >= 6 && edad <= 11):
        console.log('Niño(a)');
        break;
    case (edad >= 12 && edad <= 18):
        console.log('Adolescente');
        break;
    case (edad >= 19 && edad <= 26):
        console.log('Joven');
        break;
    case (edad >= 27 && edad <= 59):
        console.log('Adulto');
        break;
    case (edad >= 60):
        console.log('Anciano');
        break;
    default:
        console.log('No encontrado');

}