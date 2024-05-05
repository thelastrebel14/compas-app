//import publicaciones from "./mockDataMiEscena"; // publicaciones tiene los datos de prueba para las publicaciones
document.addEventListener("DOMContentLoaded", function() {
    crearElementoPublicacion();
  });
// const Co = document.getElementById('miEscena');
//     const mensaje = document.getElementById('comment');

//     formulario.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const like = document.getElementById().value;
//         const share = document.getElementById().value
//         const colaborate = document.getElementById().value;
//         const comment = document.getElementById().value;

//         // Enviar los datos del formulario al servidor usando fetch
//         fetch('/enviarSolicitudDeCoraboracion', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'miEscenaColaborar/json',
//                 'Content-Type' : 'miEscenacompartir/json',
//                 'Content-Type' : 'miEscenaMegusta/json',
//                 'Content-Type' : 'miEscenaComentarios.json'
//             },  
//             body: JSON.stringify(
//                 colaborar ={
//                     idAutor : 1,
//                     idComentario : 1,
//                     idDestinatario : 1,
//                     mensaje : "Este es un mensaje",
//                 },
//                 compartir ={
//                     idPublicacion : 1,
//                     idAutor : 1,
                
//                 },
//                 reaccionar ={
//                     idPublicacion : 1,
//                     idAutor : 1,
                
//                 },
//                 comentarPublicacion ={
//                     idAutor : 1,
//                     idComentario : 1,
//                     idPublicacion : 1,
//                     comentario : "Este es un comentario",
//                     })
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Mostrar mensaje de éxito o error al usuario
//             if (data.success) {
//                 mensaje.textContent = '¡Mensaje enviado con éxito!';
//             } else {
//                 mensaje.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             mensaje.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
//         });
//     });



    















/* Agrega una función que haga lo siguiente:
    Se ejecute al cargar la página mi escena
    Busque los datos de publicaciones (En este caso sería lo de la variable publicaciones pero después lo moveríamos a un fetch de tipo GET)
    Una vez obtenidas las publicaciones, iterar cada publicación con el método .map, por cada elemento, crear un elemento de publicación (La plantilla que creaste en html) usando los datos de cada elemento.
    Insertar los elementos en un div con id contenedor-publicaciones (Revisa InnerHTML)
    Puedes usar localStorage o fetch para buscar publicaciones (Esto se entrega)
*/

/*
    Agregar una función que haga lo siguiente:
    Se ejecute al hacer click en el botón de guardar dentro del modal de foto/video
    Tome los datos del formulario de manera correcta
    Usar localStorage o fetch para crear publicaciones (Esto se entrega)
*/


/*
    Agregar una función que haga lo siguiente:
    Se ejecute al hacer click en el botón de guardar dentro del modal de busco artistas escenarios
    Tome los datos del formulario de manera correcta
    Usar localStorage o fetch para crear publicaciones (Esto se entrega)
*/

// IMPORTANTE: Definan si usar localStorage o fetch en todas las funciones, sería uno o el otro en todas las funciones.
// El ejemplo de fetch ya lo tienen, es modificar el method a GET o POST según corresponda, apóyense de documentación.








function crearElementoPublicacion() {
    // Crear el elemento div principal
    var publicacionContenedor = document.createElement("div");
    publicacionContenedor.classList.add("publicacion-contenedor");
  
    // Contenido del autor
    var autorContenedor = document.createElement("div");
    autorContenedor.classList.add("autor-contenedor");
    var autorImg = document.createElement("img");
    autorImg.src = "https://th.bing.com/th/id/OIP.fMaa216CcNx57aG5oYldiQHaHc?w=204&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    autorImg.classList.add("rounded-circle", "img-usuario");
    autorImg.alt = "Usuario";
    var autorInfo = document.createElement("div");
    autorInfo.classList.add("autor-info");
    var autorNombre = document.createElement("h5");
    autorNombre.textContent = "Kawai Man";
    var autorEtiqueta = document.createElement("label");
    autorEtiqueta.textContent = " Guitarra | Bajo sexto | voz-principal";
    autorInfo.appendChild(autorNombre);
    autorInfo.appendChild(autorEtiqueta);
    autorContenedor.appendChild(autorImg);
    autorContenedor.appendChild(autorInfo);
  
    // Contenido de la publicación
    var contenidoPublicacionContenedor = document.createElement("div");
    contenidoPublicacionContenedor.classList.add("contenido-publicacion-contenedor");
    var contenidoPublicacion = document.createElement("p");
    contenidoPublicacion.textContent = "Aqui en el evento del domingo con mis Compadres.";
    var imgPublicacion = document.createElement("img");
    imgPublicacion.src = "https://th.bing.com/th/id/OIP.z584B0fwnJ4cYMMBWAzVigHaJ4?pid=ImgDet&w=179&h=238&c=7&dpr=1.3";
    imgPublicacion.classList.add("img-publicacion");
    contenidoPublicacionContenedor.appendChild(contenidoPublicacion);
    contenidoPublicacionContenedor.appendChild(imgPublicacion);
  
    // Botones de la publicación
    var botonesPublicacionContenedor = document.createElement("div");
    botonesPublicacionContenedor.classList.add("botones-publicacion-contenedor");
    var reaccionesContenedor1 = document.createElement("div");
    reaccionesContenedor1.classList.add("reacciones-contenedor");
    var icono1 = document.createElement("span");
    icono1.classList.add("material-symbols-outlined");
    icono1.textContent = "artist";
    var boton1 = document.createElement("button");
    boton1.classList.add("boton", "flat");
    boton1.textContent = "Me entona";
    var reaccionesContenedor2 = document.createElement("div");
    reaccionesContenedor2.classList.add("reacciones-contenedor");
    var icono2 = document.createElement("span");
    icono2.classList.add("material-symbols-outlined");
    icono2.textContent = "music_cast";
    var boton2 = document.createElement("button");
    boton2.classList.add("boton", "flat");
    boton2.textContent = "Compartir";
    var reaccionesContenedor3 = document.createElement("div");
    reaccionesContenedor3.classList.add("reacciones-contenedor");
    var icono3 = document.createElement("span");
    icono3.classList.add("material-symbols-outlined");
    icono3.textContent = "adaptive_audio_mic";
    var boton3 = document.createElement("button");
    boton3.classList.add("boton", "flat");
    boton3.textContent = "Colaborar";
    reaccionesContenedor1.appendChild(icono1);
    reaccionesContenedor1.appendChild(boton1);
    reaccionesContenedor2.appendChild(icono2);
    reaccionesContenedor2.appendChild(boton2);
    reaccionesContenedor3.appendChild(icono3);
    reaccionesContenedor3.appendChild(boton3);
    botonesPublicacionContenedor.appendChild(reaccionesContenedor1);
    botonesPublicacionContenedor.appendChild(reaccionesContenedor2);
    botonesPublicacionContenedor.appendChild(reaccionesContenedor3);
  
    // Input de comentario
    var inputComentario = document.createElement("input");
    inputComentario.type = "text";
    inputComentario.classList.add("form-control", "input-comentario");
    inputComentario.placeholder = "Comentar";
    inputComentario.name = "comentario";
  
    // Contenedor de comentarios
    var comentariosContenedor = document.createElement("div");
    comentariosContenedor.classList.add("comentarios-contenedor");
  
    // Agregar elementos al contenedor principal
    publicacionContenedor.appendChild(autorContenedor);
    publicacionContenedor.appendChild(document.createElement("hr"));
    publicacionContenedor.appendChild(contenidoPublicacionContenedor);
    publicacionContenedor.appendChild(document.createElement("hr"));
    publicacionContenedor.appendChild(botonesPublicacionContenedor);
    publicacionContenedor.appendChild(document.createElement("hr"));
    publicacionContenedor.appendChild(inputComentario);
    publicacionContenedor.appendChild(comentariosContenedor);
  
    // Obtener el contenedor donde se agregarán los elementos
    var contenedor = document.getElementById("contenedor");
  
    // Agregar el nuevo elemento al contenedor
    contenedor.appendChild(publicacionContenedor);
  }
  
  // Llamar a la función para crear el elemento dinámico
  crearElemento();