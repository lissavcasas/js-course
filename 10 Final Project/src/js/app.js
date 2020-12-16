//LLamando a la data 
import menu from './data.js';
//console.log(menu);

//Llamando a los elmentos del HTML que se van a manipular
const sectionCenter = document.getElementById('section-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchFood = document.getElementById('searcher');
let initValue = '';

//Creando función parar mostrar los cards en el documento
const showMenuItems = (menu) => {
    let menuArr = menu.map(el => {
        return `
       <div class="card">
               <div class="image">
                   <img src=${el.img} alt=${el.title}">
               </div>
               <div class="item-info">
                   <header>
                       <h4>${el.title}</h4>
                       <h4 class="main-color">${el.price}</h4>
                   </header>
                   <p>${el.desc} </p>
               </div>
           </div>
           `;
    })
    menuArr = menuArr.join('');
    //console.log(menuArr);
    sectionCenter.innerHTML = menuArr;

}

//Creando función para filtrar resultados según la categoría usando botones
const filterByCategory = () => {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnCategory = e.currentTarget.dataset.id;

            const menuCategory = menu.filter(option => {
                if (option.category === btnCategory) {
                    return option;
                }
            });

            if (btnCategory === 'all') {
                showMenuItems(menu);
            } else {
                showMenuItems(menuCategory);
            }
        });
    });
}

//Creando función para filtrar resultados según el texto ingresado en el buscador
const searchText = () => {
    searchFood.addEventListener('keyup', () => {
        //console.log(searchFood.value.toUpperCase());
        //console.log('HOLA' === 'HOLA');
        initValue = searchFood.value.toUpperCase();

        const filtered = menu.filter(item => {
            //console.log(item.title.toUpperCase());
            if (item.title.toUpperCase().indexOf(initValue) > -1) {
                return item;
            }
        })
        showMenuItems(filtered);
    })
}

// Llamando funciones para que se ejecuten cuando la pagina cargue
window.addEventListener('DOMContentLoaded', () => {
    showMenuItems(menu);
    filterByCategory();
    searchText();
})