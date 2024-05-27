//import publicaciones from "./mockDataMiEscena"; // publicaciones tiene los datos de prueba para las publicaciones
document.addEventListener("DOMContentLoaded", function () {
  obtenerPublicaciones();
});

// const Co = document.getElementById('miEscena');
// const mensaje = document.getElementById('comentario');

// // --------- agregar comentarios --------------
// mensaje.addEventListener("change", (event) => {
//     event.preventDefault();
//     // const like = document.getElementById().value;
//     // const share = document.getElementById().value
//     // const colaborate = document.getElementById().value;
//     // const comment = document.getElementById().value;

//     // agarramos el elemento que contendra los comentarios
//     const comentariosDisplay = document.getElementById("comentariosDisplay");

//     // obtiene el texto del comentario
//     let comentarioText = event.target.value;

//     //crea el elemento del comentario y le agrega el texto
//     let comentarioP = document.createElement("p");
//     comentarioP.textContent = comentarioText;

//     // inserta el comentario en el contenedor
//     comentariosDisplay.appendChild(comentarioP);

//     //vacia el contenido del area de comentarios
//     mensaje.value = "";
// })

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

// ------- contador de Me entona ---------

// selecciona los elementos que se usaran
// const meEntonaBoton = document.getElementById("meEntonaBoton");
// const contadorMeEntona = document.getElementById("contadorMeEntona");

// // inicializar las variables
// let contador = 0;
// //determinar si la persona puede o no dar like (default: si puede)
// let puedeDarMeEntona = true;

// //espera un evento para dar like
// meEntonaBoton.addEventListener("click", (event) => {
//     //checa si la persona puede dar like
//     if(puedeDarMeEntona){
//         contador++;
//         puedeDarMeEntona = false;
//     }
//     else{
//         contador--;
//         puedeDarMeEntona = true;
//     }

//     // agrega el contador de likes
//     contadorMeEntona.textContent = contador;

//     if (contadorMeEntona.textContent == "0"){
//         contadorMeEntona.textContent = "";
//     }

//     meEntonaBoton.parentElement.append(contadorDisplay)
// });

/* Agrega una función que haga lo siguiente:
    Se ejecute al cargar la página mi escena
    Busque los datos de publicaciones (En este caso sería lo de la variable publicaciones pero después lo moveríamos a un fetch de tipo GET)
    Una vez obtenidas las publicaciones, iterar cada publicación con el método .map, por cada elemento, crear un elemento de publicación (La plantilla que creaste en html) usando los datos de cada elemento.
    Insertar los elementos en un div con id contenedor-publicaciones (Revisa InnerHTML)
    Puedes usar localStorage o fetch para buscar publicaciones (Esto se entrega)
*/

const publicaciones = [
  {
    idPublicacion: 1,
    idAutor: 101,
    nombreAutor: "Mario Sandoval",
    instrumentosAutor: ["Guitarra", "Piano", "Voz"],
    avatarAutor: "../perfilPublico/img/fotoPerfil.png",
    titulo: "¡Nuevo álbum en camino!",
    tipoPublicacion: "multimedia",
    descripcion:
      "Estoy emocionado de compartirles que estoy trabajando en un nuevo álbum. ¡Espero que les guste!",
    archivoMultimedia:
      "https://i2.wp.com/elcirculobeatle.com/wp-content/uploads/jlanthology1.jpg?resize=1000%2C1000&ssl=1",
    createdAt: "2024-04-30T12:00:00Z",
  },
  {
    idPublicacion: 2,
    idAutor: 102,
    nombreAutor: "Taylor Swift",
    instrumentosAutor: ["Voz", "Guitarra acústica", "Piano"],
    avatarAutor:
      "https://th.bing.com/th/id/OIP.GfybPTpU2VpHNNDlTPBXhQHaFb?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    titulo: "¡Concierto en vivo esta noche!",
    tipoPublicacion: "multimedia",
    descripcion:
      "No se pierdan mi concierto en vivo esta noche a las 8pm. ¡Prepárense para una noche llena de música y diversión!",
    archivoMultimedia:
      "https://th.bing.com/th/id/OIP.mww4wsoHQvSPRFfOCvNCRgHaEc?w=202&h=121&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    createdAt: "2024-04-30T14:00:00Z",
  },
  {
    idPublicacion: 3,
    idAutor: 103,
    nombreAutor: "Ed Sheeran",
    instrumentosAutor: ["Guitarra", "Voz", "Loop Station"],
    avatarAutor:
      "https://th.bing.com/th/id/OIP.le6_lg05wudqDDLjzM3inAHaLH?w=128&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    titulo: "Nueva canción disponible",
    tipoPublicacion: "texto",
    descripcion:
      "Mi nueva canción 'Shape of You' ya está disponible en todas las plataformas. ¡Espero que la disfruten!",
    createdAt: "2024-04-30T16:30:00Z",
  },
  {
    idPublicacion: 4,
    idAutor: 104,
    nombreAutor: "Ariana Grande",
    instrumentosAutor: ["Voz", "Baile"],
    avatarAutor:
      "https://media.vogue.mx/photos/5e9f0aef8966aa000859aac6/2:3/w_2560%2Cc_limit/como-hacer-el-peinado-de-ariana-grande.jpg",
    titulo: "Feliz de colaborar con...",
    tipoPublicacion: "texto",
    descripcion:
      "Estoy emocionada de anunciar mi colaboración con otro artista. Pronto les daré más detalles, ¡estén atentos!",
    createdAt: "2024-04-30T18:45:00Z",
  },
  {
    idPublicacion: 5,
    idAutor: 105,
    nombreAutor: "Bruno Mars",
    instrumentosAutor: ["Voz", "Batería", "Teclado"],
    avatarAutor:
      "https://lastfm.freetls.fastly.net/i/u/ar0/367566b62ce6653a8f2c520cacf23c06.jpg",
    titulo: "¡Gira mundial anunciada!",
    tipoPublicacion: "multimedia",
    descripcion:
      "Estoy emocionado de anunciar mi próxima gira mundial. Visiten mi sitio web para conocer las fechas y lugares.",
    archivoMultimedia:
      "https://th.bing.com/th/id/OIP.d_2p72MBxSiwJHxDLicehAHaJQ?rs=1&pid=ImgDetMain",
    createdAt: "2024-04-30T20:20:00Z",
  },
  {
    idPublicacion: 6,
    idAutor: 106,
    nombreAutor: "Shakira",
    instrumentosAutor: ["Voz", "Guitarra", "Bailar"],
    avatarAutor:
      "https://th.bing.com/th/id/R.220bc9daef6ad8926e8f12be9cfb4185?rik=4IPVwZo6F4nlkg&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f32800000%2f-Shakira-shakira-32850475-1024-768.jpg&ehk=oTCf2mw15XtS1hqXKrqGETgkx4QBSlKCpI%2f0DWK9k7U%3d&risl=&pid=ImgRaw&r=0",
    titulo: "¡Nuevo videoclip!",
    tipoPublicacion: "multimedia",
    descripcion: "Acabo de lanzar mi nuevo videoclip. ¡No se lo pierdan!",
    archivoMultimedia: "https://www.youtube.com/shorts/DsvrgaPnQ18",
    createdAt: "2024-04-30T22:10:00Z",
  },
  {
    idPublicacion: 7,
    idAutor: 107,
    nombreAutor: "Justin Bieber",
    instrumentosAutor: ["Voz", "Guitarra", "Piano"],
    avatarAutor: "https://i.ytimg.com/vi/y5hBPNt_tDs/hqdefault.jpg",
    titulo: "Agradecido por el apoyo de mis fans",
    tipoPublicacion: "texto",
    descripcion:
      "Quiero expresar mi gratitud a todos mis fans por su increíble apoyo. Ustedes son los mejores.",
    createdAt: "2024-04-30T23:30:00Z",
  },
  {
    idPublicacion: 8,
    idAutor: 108,
    nombreAutor: "Beyoncé",
    instrumentosAutor: ["Voz", "Baile", "Piano"],
    avatarAutor:
      "https://i.pinimg.com/originals/7a/ca/c3/7acac3a08b297674cf41d3c30bb53e67.jpg",
    titulo: "Detrás de cámaras de mi último videoclip",
    tipoPublicacion: "multimedia",
    descripcion:
      "Comparto con ustedes un vistazo detrás de cámaras de la filmación de mi último videoclip. ¡Espero que les guste!",
    archivoMultimedia:
      "https://th.bing.com/th/id/OIP.4axd5SxpMi7FUstmqQsGygHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    createdAt: "2024-05-01T02:00:00Z",
  },
  {
    idPublicacion: 9,
    idAutor: 109,
    nombreAutor: "Drake",
    instrumentosAutor: ["Voz", "Rap", "Teclado"],
    avatarAutor:
      "https://th.bing.com/th/id/OIP.SRSY5WQ0tAGf7NCD2oiNfwHaFj?rs=1&pid=ImgDetMain",
    titulo: "Nuevo éxito en las listas de éxitos",
    tipoPublicacion: "texto",
    descripcion:
      "Mi última canción ha llegado al número 1 en las listas de éxitos. ¡Gracias a todos por su apoyo!",
    createdAt: "2024-05-01T04:30:00Z",
  },
  {
    idPublicacion: 10,
    idAutor: 110,
    nombreAutor: "Katy perry",
    instrumentosAutor: ["Voz", "Guitarra", "Bajo"],
    avatarAutor:
      "https://th.bing.com/th/id/R.fb67cd5ebb83a1e2c0bd0c390fedabf9?rik=yGK2MCjSyD2%2bUA&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f37100000%2fKaty-Perry-katy-perry-37179349-923-1200.jpg&ehk=F1LBC7084dhL986q8fCz%2ftt1hrRVoC1G650XIXi8Hi8%3d&risl=&pid=ImgRaw&r=0",
    titulo: "Nuevo sencillo disponible",
    tipoPublicacion: "texto",
    descripcion:
      "Mi nuevo sencillo 'Roar' ya está disponible para escuchar en todas las plataformas. ¡Espero que les guste!",
    createdAt: "2024-05-01T06:15:00Z",
  },
];

function obtenerPublicaciones() {
  var url = "https://ejemploDeapi.com";

  publicaciones.forEach((element) => {
    crearElementoPublicacion(element);
  });

  // Realizar la solicitud fetch
  // fetch(url)
  // .then(response => {
  //     // Verificar si la respuesta fue exitosa (código de estado 200)
  //     if (response.ok) {
  //         // Devolver los datos en formato JSON
  //         return response.json();
  //     }
  //     // Si la respuesta no es exitosa, lanzar un error
  //     throw new Error('Error al obtener las publicaciones');
  // })
  // .then(data => {
  //     // Manejar los datos de las publicaciones
  //     data.forEach(element => {
  //         crearElementoPublicacion(element);

  //     });
  //     console.log('Datos de las publicaciones:', data);
  //     // Llamar a una función para procesar los datos, por ejemplo, mostrar las publicaciones en la página
  //     mostrarPublicaciones(data);
  // })
  // .catch(error => {
  //     // Manejar errores
  //     console.error('Error:', error);
  // });
}

function crearElementoPublicacion(datosPublicacion) {
  // Crear el elemento div principal
  var publicacionContenedor = document.createElement("div");
  publicacionContenedor.id = datosPublicacion.idPublicacion;
  publicacionContenedor.classList.add("publicacion-contenedor");

  // Contenido del autor
  var autorContenedor = document.createElement("div");
  autorContenedor.classList.add("autor-contenedor");
  var autorImg = document.createElement("img");
  var redirecion = document.createElement("a");
  redirecion.href = "../perfilPublico/index.html";
  redirecion.appendChild(autorImg);
  autorImg.src = datosPublicacion.avatarAutor;
  autorImg.classList.add("rounded-circle", "img-usuario");
  autorImg.alt = "Usuario";
  var autorInfo = document.createElement("div");
  autorInfo.classList.add("autor-info");
  var autorNombre = document.createElement("h5");
  autorNombre.textContent = datosPublicacion.nombreAutor;
  var autorEtiqueta = document.createElement("label");
  autorEtiqueta.textContent = datosPublicacion.instrumentosAutor.join(" | ");
  autorInfo.appendChild(autorNombre);
  autorInfo.appendChild(autorEtiqueta);
  autorContenedor.appendChild(redirecion);
  autorContenedor.appendChild(autorInfo);

  // Contenido de la publicación
  var contenidoPublicacionContenedor = document.createElement("div");
  contenidoPublicacionContenedor.classList.add(
    "contenido-publicacion-contenedor"
  );
  var contenidoPublicacion = document.createElement("p");
  contenidoPublicacion.textContent = datosPublicacion.descripcion;
  if (datosPublicacion.tipoPublicacion === "multimedia") {
    var imgPublicacion = document.createElement("img");
    imgPublicacion.src = datosPublicacion.archivoMultimedia;
    imgPublicacion.classList.add("img-publicacion");
  }

  contenidoPublicacionContenedor.appendChild(contenidoPublicacion);
  if (datosPublicacion.tipoPublicacion === "multimedia")
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
  boton1.appendChild(icono1);
  reaccionesContenedor1.appendChild(boton1);
  boton2.appendChild(icono2);
  reaccionesContenedor2.appendChild(boton2);
  boton3.appendChild(icono3);
  reaccionesContenedor3.appendChild(boton3);
  botonesPublicacionContenedor.appendChild(reaccionesContenedor1);
  botonesPublicacionContenedor.appendChild(reaccionesContenedor2);
  botonesPublicacionContenedor.appendChild(reaccionesContenedor3);

  // Input de comentario
  var comentarioFormContainer = document.createElement("div");
  comentarioFormContainer.classList.add("form-floating");
  var inputComentario = document.createElement("input");
  inputComentario.type = "text";
  inputComentario.classList.add("form-control", "input-comentario");
  inputComentario.placeholder = "Comentar";
  inputComentario.name = "comentario";
  inputComentario.id = "comentario";
  var comentarioLabel = document.createElement("label");
  comentarioLabel.setAttribute("for", "comentario");
  comentarioLabel.classList.add("form-label");
  comentarioLabel.textContent = "Comentar";
  comentarioFormContainer.appendChild(inputComentario);
  comentarioFormContainer.appendChild(comentarioLabel);
  var comentarioContainer = document.createElement("div");
  comentarioContainer.classList.add("col-md-12");
  comentarioContainer.appendChild(comentarioFormContainer);

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
  publicacionContenedor.appendChild(comentarioContainer);
  publicacionContenedor.appendChild(comentariosContenedor);

  // Obtener el contenedor donde se agregarán los elementos
  var contenedor = document.getElementById("publicacionesMiEscena-contenedor");

  // Agregar el nuevo elemento al contenedor
  contenedor.appendChild(publicacionContenedor);
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/* ---------- Comienza código de nueva publicación ---------- */

// Creación de objeto a partir de los datos del formulario "Foto/Vídeo"

class NuevaPublicacionFotoVideo {
  constructor(texto, multimedia) {
    {
      (this.texto = texto), (this.multimedia = multimedia);
    }
  }
}

const botonPublicarFotoVideo = document.getElementById("publicarFotoVideo");

botonPublicarFotoVideo.addEventListener("click", (e) => {
  const publicacionTexto = document.getElementById("publicacionTexto").value;
  const publicacionMultimedia = document.getElementById(
    "publicacionMultimedia"
  ).value;

  if (publicacionTexto.trim() === "") {
    if (document.querySelector(".alert")) {
      return;
    } else {
      const alerta = document.createElement("div");
      const contenedorAlerta = document.getElementById("formularioFotoVideo");
      alerta.classList.add("alert", "alert-danger");
      alerta.textContent = "Por favor, completa este campo.";
      alerta.style.textAlign = "center";
      alerta.focus();
      contenedorAlerta.appendChild(alerta);
    }
    return;
  } else {
    let publicacion;
    publicacion = new NuevaPublicacionFotoVideo(
      publicacionTexto.trim(),
      publicacionMultimedia
    );

    console.log({ publicacion });
    const publicacionJSON = JSON.stringify(publicacion);

    // Enviar los datos del formulario al servidor usando fetch
    fetch("/enviarPublicacionFotoVideo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        publicacionTexto: publicacionTexto,
        publicacionMultimedia: publicacionMultimedia,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Mostrar mensaje de éxito o error al usuario
        if (data.success) {
          publicacion.textContent = "¡Publicación enviada con éxito!";
        } else {
          publicacion.textContent =
            "Error al enviar la publicación. Por favor, inténtalo de nuevo.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        publicacion.textContent =
          "Error al enviar la publicación. Por favor, inténtalo de nuevo.";
      });
  }
});

// Código para evitar que Mi Escena se recargue al hacer 'submit' en algún formulario
var form = document.getElementById("formularioFotoVideo");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// Creación de objeto a partir de los datos del formulario "Estoy buscando artistas"

class NuevaPublicacionBusquedaArtista {
  constructor(
    tituloPublicacion,
    artistaOEscenario,
    generoMusical,
    instrumentoMusical,
    ubicacionBusqueda,
    codigoPostal,
    cuerpoPublicacion,
    multimediaBusqueda
  ) {
    {
      (this.tituloPublicacion = tituloPublicacion),
        (this.artistaOEscenario = artistaOEscenario),
        (this.generoMusical = generoMusical),
        (this.instrumentoMusical = instrumentoMusical),
        (this.ubicacionBusqueda = ubicacionBusqueda),
        (this.codigoPostal = codigoPostal),
        (this.cuerpoPublicacion = cuerpoPublicacion),
        (this.multimediaBusqueda = multimediaBusqueda);
    }
  }
}

const botonPublicarBusquedaArtista = document.getElementById(
  "publicarBusquedaArtista"
);

botonPublicarBusquedaArtista.addEventListener("click", (e) => {
  const tituloPublicacion = document.getElementById("tituloPublicacion").value;
  const artistaOEscenario = document.getElementById("artistaOEscenario").value;
  const generoMusical = document.getElementById("generoMusical").value;
  const instrumentoMusical =
    document.getElementById("instrumentoMusical").value;
  const ubicacionBusqueda = document.getElementById("ubicacionBusqueda").value;
  const codigoPostal = document.getElementById("codigoPostal").value;
  const cuerpoPublicacion = document.getElementById("cuerpoPublicacion").value;
  const multimediaBusqueda =
    document.getElementById("multimediaBusqueda").value;

  if (
    tituloPublicacion.trim() === "" ||
    artistaOEscenario === "" ||
    ubicacionBusqueda === "" ||
    codigoPostal === "" ||
    cuerpoPublicacion === ""
  ) {
    if (document.querySelector(".alert")) {
      return;
    } else {
      const alerta = document.createElement("div");
      const contenedorAlerta = document.getElementById(
        "formularioBusquedaArtista"
      );
      alerta.classList.add("alert", "alert-danger");
      alerta.textContent = "Por favor, completa los campos requeridos.";
      alerta.style.textAlign = "center";
      alerta.focus();
      contenedorAlerta.appendChild(alerta);
    }
    return;
  } else {
    let publicacion;
    publicacion = new NuevaPublicacionBusquedaArtista(
      tituloPublicacion.trim(),
      artistaOEscenario,
      generoMusical,
      instrumentoMusical,
      ubicacionBusqueda,
      codigoPostal,
      cuerpoPublicacion,
      multimediaBusqueda
    );

    console.log({ publicacion });
    const publicacionJSON = JSON.stringify(publicacion);

    // Enviar los datos del formulario al servidor usando fetch
    fetch("/enviarPublicacionBusquedaArtista", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tituloPublicacion: tituloPublicacion,
        artistaOEscenario: artistaOEscenario,
        generoMusical: generoMusical,
        instrumentoMusical: instrumentoMusical,
        ubicacionBusqueda: ubicacionBusqueda,
        codigoPostal: codigoPostal,
        cuerpoPublicacion: cuerpoPublicacion,
        multimediaBusqueda: multimediaBusqueda,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Mostrar mensaje de éxito o error al usuario
        if (data.success) {
          publicacion.textContent = "¡Publicación enviada con éxito!";
        } else {
          publicacion.textContent =
            "Error al enviar la publicación. Por favor, inténtalo de nuevo.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        publicacion.textContent =
          "Error al enviar la publicación. Por favor, inténtalo de nuevo.";
      });
  }
});

// Código para evitar que Mi Escena se recargue al hacer 'submit' en algún formulario
var form = document.getElementById("formularioBusquedaArtista");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// FUNCIONES DE VALIDACIÓN

// Función de validación en vivo
function validacionEnVivo(inputId, callback) {
  // recibe el id del input a validar y una funcion que returna true o false
  let input = document.getElementById(inputId); // guarda el input dado el id
  input.oninput = () => {
    // cada cambio que se realiza en el input pasara por la siguiente funcion
    let v = input.value; // guarda el valor de lo que se escribe en el input
    callback(v); // ejecuta la funcion de validacion

    // usando clases de bootstrap para validacion
    if (callback(v)) {
      input.classList.remove("is-invalid"); // se remueve la clase invalid
      input.classList.add("is-valid"); // se añade la clase valid
    } else {
      input.classList.remove("is-valid"); // se remueve la clase valid
      input.classList.add("is-invalid"); // se añade la clase invalid
    }
  };
}

// Función para validar código postal

function validaCodigoPostal(value) {
  // recibe el texto a validar
  let esValido = true; // inicia como true
  if (value.length != 5) {
    esValido = false; // checa que tenga 5 caracteres
  } else if (!(value <= 99000 && value >= 1000)) {
    esValido = false; // checa que este en el rango valido
  }
  return esValido; // devuelve true o false
}

validacionEnVivo("codigoPostal", validaCodigoPostal);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

/*
// Editar publicación
const editarformularioFotoVideo = document.querySelector('#formularioFotoVideo');

editarformularioFotoVideo.addEventListener('submit', (e) => {
    e.preventDefault();

    const datosTexto = new FormData(document.getElementById('formularioFotoVideo'));
    var publicacionTexto = datosTexto.get('publicacionTexto');

    const datosMultimedia = new FormData(document.getElementById('formularioFotoVideo'));
    var publicacionMultimedia = datosMultimedia.get('publicacionMultimedia');

    var almacenDatosFotoVideo = ('/enviarDatosFotoVideo');

    fetch (almacenDatosFotoVideo, {
        method: 'PUT',
        body: editarformularioFotoVideo
    })


    .then(data => data.json())
    .then(data => {
        if (data.success) {
            formularioFotoVideo.textContent = 'Publicación hecha con éxito';
        } else {
            formularioFotoVideo.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.'
        }
    })

    .catch(error => {
        console.error('Error:', error);
        formularioFotoVideo.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.';
    });

});
*/

/*
const editarFormularioArtista = document.querySelector('#formularioArtista');

editarFormularioArtista.addEventListener('submit', (e) => {
    e.preventDefault();

    const datosTituloPublicacion = new FormData(document.getElementById('formularioArtista'));
    var tituloPublicacion = datosTituloPublicacion.get('tituloPublicacion');

    const datosCuerpoPublicacion = new FormData(document.getElementById('formularioArtista'));
    var cuerpoPublicacion = datosCuerpoPublicacion.get('cuerpoPublicacion');

    const datosArtistaOEscenario = new FormData(document.getElementById('formularioArtista'));
    var artistaOEscenario = datosArtistaOEscenario.get('artistaOEscenario');

    const datosGeneroMusical = new FormData(document.getElementById('formularioArtista'));
    var generoNorteno = datosGeneroMusical.get('generoNorteno');
    var generoCumbia = datosGeneroMusical.get('generoCumbia');
    var generoSalsa = datosGeneroMusical.get('generoSalsa');
    var generoMariachi = datosGeneroMusical.get('generoMariachi');

    const datosInstrumentoMusical = new FormData(document.getElementById('formularioArtista'));
    var instrumentoGuitarra = datosInstrumentoMusical.get('instrumentoGuitarra');
    var instrumentoAcordeon = datosInstrumentoMusical.get('instrumentoAcordeon');
    var instrumentoBateria = datosInstrumentoMusical.get('instrumentoBateria');
    var instrumentoSintetizador = datosInstrumentoMusical.get('instrumentoSintetizador');

    const datosCodigoPostal = new FormData(document.getElementById('formularioArtista'));
    var codigoPostal = datosCodigoPostal.get('codigoPostal');

    const datosCiudadOMunicipio = new FormData(document.getElementById('formularioArtista'));
    var ciudadOMunicipio = datosCiudadOMunicipio.get('ciudadOMunicipio');

    const datosEntidadFederativa = new FormData(document.getElementById('formularioArtista'));
    var entidadFederativa = datosEntidadFederativa.get('entidadFederativa');

    const datosArtistaMultimedia = new FormData(document.getElementById('formularioArtista'));
    var artistaMultimedia = datosArtistaMultimedia.get('artistaMultimedia');

    var almacenDatosArtista = ('/enviarDatosArtista');

    fetch (almacenDatosArtista, {
        method: 'PUT',
        body: formularioArtista
    })

    .then(data => data.json())
    .then(data => {
        if (data.success) {
            formularioArtista.textContent = 'Publicación realizada con éxito';
        } else {
            formularioArtista.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.'
        }
    })

    .catch(error => {
        console.error('Error:', error);
        formularioArtista.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.';
    });
});
*/

/*
// Eliminar publicación
function eliminarPublicacion() {
    var url = 'https://ejemploDeapi.com/eliminarPublicacion/:idPublicacion';
    
    publicaciones.forEach(element=> {
        crearElementoPublicacion(element)
    });

    // Realizar la solicitud fetch
    fetch(url, {
        method: 'DELETE',
        body: idPublicacion
    })
    .then(response => {
        // Verificar si la respuesta fue exitosa (código de estado 200)
        if (response.ok) {
            // Devolver los datos en formato JSON
            return response.json();
        }
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error('Error al eliminar las publicaciones');
    })
    .catch(error => {
        // Manejar errores
        console.error('Error:', error);
    });
}

// Eliminar todas las publicaciones
function eliminarTodasPublicaciones() {
    var url = 'https://ejemploDeapi.com/eliminarPublicaciones';
    
    publicaciones.forEach(element=> {
        crearElementoPublicacion(element)
    });

    // Realizar la solicitud fetch
    fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        // Verificar si la respuesta fue exitosa (código de estado 200)
        if (response.ok) {
            // Devolver los datos en formato JSON
            return response.json();
        }
        // Si la respuesta no es exitosa, lanzar un error
        throw new Error('Error al eliminar las publicaciones');
    })
    .catch(error => {
        // Manejar errores
        console.error('Error:', error);
    });
}
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

const modalNombre = document.getElementById("modalNombre");
modalNombre.textContent = JSON.parse(
  localStorage.getItem("usuarioJSON")
).nombre;
