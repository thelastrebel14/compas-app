// ------------------Carrusel de sección de Escenarios--------------------
const prevArrowEscenarios = document.querySelector(
  "#carouselPrevArrowEscenarios"
);
const nextArrowEscenarios = document.querySelector(
  "#carouselNextArrowEscenarios"
);
const carouselCardsContainerEscenarios = document.querySelector(
  "#carouselCardsEscenarios"
);

prevArrowEscenarios.addEventListener("click", () => {
  carouselCardsContainerEscenarios.scrollLeft -= 250;
  // alert("prev");
});

nextArrowEscenarios.addEventListener("click", () => {
  carouselCardsContainerEscenarios.scrollLeft += 250;
  // alert("next");
});
