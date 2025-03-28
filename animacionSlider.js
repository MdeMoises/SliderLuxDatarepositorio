//Buscar los elementos del slider
let items = document.querySelectorAll(".slider .list .item")
let buttonitems = document.querySelectorAll(" .buttonslist  .button-item")


let nrbuttonitems = buttonitems.length
let nrItems = items.length
let itemActivado = 0;


const movimientoCarrusel = setInterval(function() {
    //Aumentar la pagina activa a la siguiente
    itemActivado += 1
    if(itemActivado >= nrItems){
        itemActivado = 0
    }
    mostrarSlider(itemActivado)


}, 5000)

function mostrarSlider(itemActivo){
    //Buscar el item activo viejo para quitarlo
    let itemViejo = document.querySelector(".slider .list .item.active");
    let buttonItemViejo = document.querySelector(".buttonslist  .button-item.seleccionado")
    itemViejo.classList.remove('active')    
    buttonItemViejo.classList.remove('seleccionado')

    // activar item nuevo
    items[itemActivo].classList.add('active')
    buttonitems[itemActivo].classList.add('seleccionado')
    itemActivado = itemActivo
}

// Crear el observador (Intersection Observer API)
// En la función anónima se recibe una lista de entradas,
//    no importa que solo se observe un elemento
observer = new IntersectionObserver(entries => {
  // Recorrer las entradas recibidas
  entries.forEach(entry => {
    // Está visible en el viewport
    if (entry.intersectionRatio > 0) {
      // entry.target es el elemento que se está observando
      // Agregar la clase para animar
      entry.target.classList.add('active');
      // Dejar de observar
      observer.unobserve(entry.target);
    }
  });
});
// Observar elemento a animar
observer.observe(document.querySelector('#especifico1'));
observer.observe(document.querySelector('#especifico2'));
observer.observe(document.querySelector('#especifico3'));
observer.observe(document.querySelector('.objetivos-content .img'));
observer.observe(document.querySelector('.objetivos-content .text p'));


let sections= document.querySelectorAll('.titulo-demo');
let container = document.querySelector('.demo-container');
console.log(sections)
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        
        if(top + top*0.3 >= offset && top < offset + height){
            container.classList.add('show-animate');
            console.log('show-animate')
       }
      }
)
}