// ------------------Carrusel de sección de demos--------------------
const prevArrowDemos = document.querySelector("#carouselPrevArrowDemos");
const nextArrowDemos = document.querySelector("#carouselNextArrowDemos");
const carouselCardsContainerDemos = document.querySelector("#carouselCardsDemos");

prevArrowDemos.addEventListener("click", ()=>{ 
    carouselCardsContainerDemos.scrollLeft -= 500;
});

nextArrowDemos.addEventListener("click", ()=>{
    carouselCardsContainerDemos.scrollLeft += 500;
});


