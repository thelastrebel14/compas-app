document.addEventListener("DOMContentLoaded", function(){
    obtenerDemos();
})
const demos = [{
        "idDemo": 1,
        "idArtista": 1,
        "titulo": "¿Quién carajo son Los Fantasmas Del Ático?",
        "FechaDeLanzamiento": "26/11/1998",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo1.jpg"
    },
    {
        "idDemo": 2,
        "idArtista": 1,
        "titulo": "Las luces de la ciudad",
        "FechaDeLanzamiento": "26/01/1980",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo2.jpg"
    },

    {
        "idDemo": 3,
        "idArtista": 1,
        "titulo": "Mérida de colores",
        "FechaDeLanzamiento": "26/11/1998",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo3.jpg"
    },

    {
        "idDemo": 4,
        "idArtista": 1,
        "titulo": "Al calor de mi ritmo",
        "FechaDeLanzamiento": "26/11/1998",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo4.jpg"
    },

    {
        "idDemo": 5,
        "idArtista": 1,
        "titulo": "Los gatos rockabilly",
        "FechaDeLanzamiento": "26/11/1998",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo5.jpg"
    },

    {
        "idDemo": 6,
        "idArtista": 1,
        "titulo": "Mala influencia",
        "FechaDeLanzamiento": "26/11/1998",
        "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
        "fotoPortada": "img/perfilPublico_demo6.jpg"
    },
];

function obtenerDemos(){
    demos.forEach((element)=>{
        crearElementoDemo(element);
    })
}

function crearElementoDemo(datosDemo){
    //Se obtiene contenedor donde se generarán todos los elementos
    var contenedorDemosItems = document.getElementById("carouselCardsDemos");

    //Se crea Item de carrusel
    var itemCarouselContenedor = document.createElement("div")
    itemCarouselContenedor.classList.add("carousel--cards--item");

    //Se crea contenedor dela imagen y la información de demo
    var demoContenedor = document.createElement("div");
    demoContenedor.classList.add("card", "demos--item");

    //Se crea etiqueta img de la portada del demo
    var demoPortada = document.createElement("img");
    demoPortada.setAttribute("src", `${datosDemo.fotoPortada}`);

    //Se crea div contenedor de la información del demo
    var demoInfo = document.createElement("div");
    demoInfo.classList.add("card-body", "demos--item--info");

    //Se crea etiqueta h4 para el título del demo
    var demoTitulo = document.createElement("h4");
    demoTitulo.textContent = datosDemo.titulo;

    //Se crea botón de link a demo
    var botonDemo = document.createElement("a");
    botonDemo.setAttribute("href", `${datosDemo.link}`);
    botonDemo.setAttribute("target", "_blank");
    botonDemo.classList.add("boton", "flat");
    botonDemo.textContent = "Reproducir";

    //Append Childs
    contenedorDemosItems.appendChild(itemCarouselContenedor);
    itemCarouselContenedor.appendChild(demoContenedor);
    demoContenedor.appendChild(demoPortada);
    demoContenedor.appendChild(demoInfo);
    demoInfo.appendChild(demoTitulo);
    demoInfo.appendChild(botonDemo)

    //Estructura HTML Generada:
    // <div id="carouselCardsDemos" class="carousel--cards">
    //       <div class="carousel--cards--item">
    //         <div class="card demos--item">
    //           <img src="img/perfilPublico_demo6.jpg" alt="..." />
    //           <div class="card-body demos--item--info">
    //             <h4 class="card-title">Las ciudad de las luces</h4>
    //             <button class="boton flat">Reproducir</button>
    //           </div>
    //         </div>
    //       </div>
    //  </div>

}

