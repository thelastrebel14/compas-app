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

// ------------------Carrusel de sección de Escenarios--------------------
const prevArrowEscenarios = document.querySelector("#carouselPrevArrowEscenarios");
const nextArrowEscenarios = document.querySelector("#carouselNextArrowEscenarios");
const carouselCardsContainerEscenarios = document.querySelector("#carouselCardsEscenarios");

prevArrowEscenarios.addEventListener("click", ()=>{ 
    carouselCardsContainerEscenarios.scrollLeft -= 250;
    // alert("prev");
});

nextArrowEscenarios.addEventListener("click", ()=>{
    carouselCardsContainerEscenarios.scrollLeft += 250;
    // alert("next");
});

// ------------------Carrusel de sección de similares--------------------
const prevArrowSimilares = document.querySelector("#carouselPrevArrowSimilares");
const nextArrowSimilares = document.querySelector("#carouselNextArrowSimilares");
const carouselCardsContainerSimilares = document.querySelector("#carouselCardsSimilares");

prevArrowSimilares.addEventListener("click", ()=>{ 
    carouselCardsContainerSimilares.scrollLeft -= 500;
    // alert("prev");
});

nextArrowSimilares.addEventListener("click", ()=>{
    carouselCardsContainerSimilares.scrollLeft += 500;
    // alert("next");
});


