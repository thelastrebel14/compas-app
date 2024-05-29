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

// ------------------Carrusel de sección de Eventos--------------------
const prevArrowEventos = document.querySelector("#carouselPrevArrowEventos");
const nextArrowEventos = document.querySelector("#carouselNextArrowEventos");
const carouselCardsContainerEventos = document.querySelector(
  "#carouselCardsEventos"
);

const autoScrollEventos = () => {
  if (
    carouselCardsContainerEventos.scrollLeft +
      carouselCardsContainerEventos.clientWidth >=
    carouselCardsContainerEventos.scrollWidth
  ) {
    carouselCardsContainerEventos.scrollLeft = 0;
  } else {
    carouselCardsContainerEventos.scrollLeft += 1;
  }
};

let intervalEventos = setInterval(autoScrollEventos, 10);

prevArrowEventos.addEventListener("click", () => {
  clearInterval(intervalEventos);
  carouselCardsContainerEventos.scrollLeft -= 250;
  intervalEventos = setInterval(autoScrollEventos, 10);
});

nextArrowEventos.addEventListener("click", () => {
  clearInterval(intervalEventos);
  carouselCardsContainerEventos.scrollLeft += 250;
  intervalEventos = setInterval(autoScrollEventos, 10);
});

carouselCardsContainerEventos.addEventListener("mouseover", () => {
  clearInterval(intervalEventos);
});

carouselCardsContainerEventos.addEventListener("mouseout", () => {
  intervalEventos = setInterval(autoScrollEventos, 10);
});
