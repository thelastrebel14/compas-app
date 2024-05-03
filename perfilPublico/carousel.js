const prevArrow = document.querySelector(".carousel--prevArrow");
const nextArrow = document.querySelector(".carousel--nextArrow");
const carouselCardsContainer = document.querySelector(".carousel--cards");

prevArrow.addEventListener("click", ()=>{ 
    carouselCardsContainer.scrollLeft -= 500;
});

nextArrow.addEventListener("click", ()=>{
    carouselCardsContainer.scrollLeft += 500;
});




