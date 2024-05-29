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

// ------------------Carrusel de sección de Se Busca--------------------
const prevArrowSeBusca = document.querySelector("#carouselPrevArrowSeBusca");
const nextArrowSeBusca = document.querySelector("#carouselNextArrowSeBusca");
const carouselCardsContainerSeBusca = document.querySelector(
  "#carouselCardsSeBusca"
);

prevArrowSeBusca.addEventListener("click", () => {
  carouselCardsContainerSeBusca.scrollLeft -= 250;
  // alert("prev");
});

nextArrowSeBusca.addEventListener("click", () => {
  carouselCardsContainerSeBusca.scrollLeft += 250;
  // alert("next");
});

// ------------------Carrusel de sección de Anuncios--------------------
const prevArrowAnuncios = document.querySelector("#carouselPrevArrowAnuncios");
const nextArrowAnuncios = document.querySelector("#carouselNextArrowAnuncios");
const carouselCardsContainerAnuncios = document.querySelector(
  "#carouselCardsAnuncios"
);

prevArrowAnuncios.addEventListener("click", () => {
  carouselCardsContainerAnuncios.scrollLeft -= 250;
  // alert("prev");
});

nextArrowAnuncios.addEventListener("click", () => {
  carouselCardsContainerAnuncios.scrollLeft += 250;
  // alert("next");
});
