/* Métodos para seleccionar elementos del DOM (Nodos de tipo Element)

document.getElementById() //Accede a un elemento a travês del nombre del id
document.getElementsByClassName() // Se le pasa el nombre de la clase. Devuelve una colección de elementos HTML
document.getElementByTagName() //Accede a todos los elementos que tengan el nombre de la etiqueta pasada como parametro.
document.querySelector() // Accede al primer elemento que cumpla la condición. Se le pasa un selector CSS.
document.querySelectorAll() // Se le pasa un selector CSS. Accede a todos los elementos que cumplan la condición   */

const menu = document.getElementById('menu');
console.log(menu);

const itemsList = document.getElementsByClassName('item');
console.log(itemsList);
console.log(itemsList.length);
console.log(itemsList[0]);

const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

const inputsList = document.getElementsByTagName('input');
console.log(inputsList.length);
console.log(inputsList[3]);

const mainContainer = document.querySelector('#main-container');
console.log(mainContainer);

const col = document.querySelector('.col-12');
console.log(col);

const colsList = document.querySelectorAll('.col-12');
console.log(colsList);
console.log(colsList.length);

/*
Métodos para modificar atributos del DOM
getAttribute()	Muestra el valor de un atributo especificado o null.	element.getAttribute('atribute');
setAttribute()	Agrega o actualiza el valor de un atributo especificado.	element.setAttribute('atribute', 'value');
removeAttribute()	Elimina un atributo de un elemento.	element.removeAttribute('atribute');


Métodos para modificar clases del DOM
classList.add()	Agrega uno o más valores de clase.	element.classList.add('class');
classList.remove()	Elimina un valor de clase.	element.classList.remove('class');
classList.replace()	Sustituye un valor de clase existente por uno nuevo.	element.classList.replace('oldClass', 'newClass');
*/

const myBtn = inputsList[3];
//console.log(myBtn.getAttribute('class'));
//myBtn.setAttribute('type', 'radio');
//myBtn.setAttribute('hola', 'hi');
//myBtn.removeAttribute('class');

//myBtn.classList.add('title', 'new');
//myBtn.classList.remove('custom-btn');
//myBtn.classList.replace('new', 'awesome-btn');
//console.log(myBtn);

/* EVENTOS DEL DOM */

/* myBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Hola');
}) */

const sendBtn = document.getElementById('send');
console.log(sendBtn);

const showAlert = () => {
    //console.log('Hola');
    //alert('Enviado!')
    //console.log(sendBtn.textContent);
    // console.log(sendBtn.innerHTML); 
    sendBtn.innerHTML = 'Enviado!';
}

sendBtn.addEventListener('click', showAlert);