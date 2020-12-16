/* PROPIEDAD LENGTH */
var nombre = 'Marilyn';
var apellido = 'Casas';
console.log(nombre.length);
console.log(apellido.length);

/* METODOS DEL STRING */

//concat()
console.log(nombre.concat(' ', apellido));

//toUpperCase()
console.log(nombre.toUpperCase());

//toLowerCase()
console.log(apellido.toLowerCase());

//indexOf()
console.log(nombre.indexOf('lyn'));
console.log(apellido.indexOf('a'));

//lastIndexOf()
console.log(apellido.lastIndexOf('s'));

//chartAt()
console.log(nombre.charAt(2));
console.log(apellido.charAt(4));

// J O S E = 4
// 0 1 2 3 
console.log(nombre.charAt(nombre.length - 1));

//substring()
console.log(nombre.substring(0, 4));

//slice()
console.log(nombre.slice(-3));

//split()
console.log(nombre.split(''));

//includes()
console.log(nombre.includes('Mar'));

//replace()
console.log(nombre.replace('Marilyn', 'Meli'));