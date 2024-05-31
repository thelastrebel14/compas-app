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
    const inputMultimedia = document.getElementById("publicacionMultimedia");
    document.getElementById("publicacionMultimedia");

    const srcRegex = /src="(.*?)"/;
    var match = "";
    var publicacionMultimedia = "";

    if (inputMultimedia.files.length > 0) {
    inputMultimedia.src = URL.createObjectURL(inputMultimedia.files[0]);
    console.log(inputMultimedia);
    match = srcRegex.exec(inputMultimedia.outerHTML); 
    console.log(match);
    publicacionMultimedia = match[1]; 
    console.log(publicacionMultimedia);
    }

    crearPublicacionFotoVideo(publicacionTexto, publicacionMultimedia);

    enviarMultimedia(inputMultimedia);

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
  
      console.log({publicacion});
      const publicacionJSON = JSON.stringify(publicacion);
  
      // Enviar los datos de la publicación al servidor usando fetch
      fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
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

      // Editar los datos de la publicación al servidor usando fetch
        fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
          method: "PUT",
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
              publicacion.textContent = "¡Publicación editada con éxito!";
            } else {
              publicacion.textContent =
                "Error al editar la publicación. Por favor, inténtalo de nuevo.";
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            publicacion.textContent =
              "Error al editar la publicación. Por favor, inténtalo de nuevo.";
          });

      // Eliminar los datos de la publicación del servidor usando fetch
          fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
            method: "DELETE",
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
                publicacion.textContent = "¡Publicación eliminada con éxito!";
              } else {
                publicacion.textContent =
                  "Error al eliminar la publicación. Por favor, inténtalo de nuevo.";
              }
            })
            .catch((error) => {
              console.error("Error:", error);
              publicacion.textContent =
                "Error al eliminar la publicación. Por favor, inténtalo de nuevo.";
            });
    }
    // Limpiar y cerrar el modal
    formularioFotoVideo.reset();
    const myModal = bootstrap.Modal.getOrCreateInstance('modalFotoVideo');
    myModal.hide();
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
      titulo,
      artistaOEscenario,
      generoMusical,
      instrumentoMusical,
      ubicacionBusqueda,
      codigoPostal,
      descripcion,
      multimediaBusqueda
    ) {
      {
        (this.titulo = titulo),
          (this.artistaOEscenario = artistaOEscenario),
          (this.generoMusical = generoMusical),
          (this.instrumentoMusical = instrumentoMusical),
          (this.ubicacionBusqueda = ubicacionBusqueda),
          (this.codigoPostal = codigoPostal),
          (this.descripcion = descripcion),
          (this.multimediaBusqueda = multimediaBusqueda);
      }
    }
  }
  
  const botonPublicarBusquedaArtista = document.getElementById("publicarBusquedaArtista");
  
  botonPublicarBusquedaArtista.addEventListener("click", (e) => {
    const titulo = document.getElementById("titulo").value;
    const artistaOEscenario = document.getElementById("artistaOEscenario").value;
    const generoMusical = document.getElementById("generoMusical").value;
    const instrumentoMusical = document.getElementById("instrumentoMusical").value;
    const ubicacionBusqueda = document.getElementById("ubicacionBusqueda").value;
    const codigoPostal = document.getElementById("codigoPostal").value;
    const descripcion = document.getElementById("descripcion").value;
    const inputMultimediaBusqueda = document.getElementById("multimediaBusqueda");
    
    const srcRegexBusq = /src="(.*?)"/;
    var matchBusq = "";
    var multimediaBusqueda = "";

    if (inputMultimediaBusqueda.files.length > 0) {
    inputMultimediaBusqueda.src = URL.createObjectURL(inputMultimediaBusqueda.files[0]);
    console.log(inputMultimediaBusqueda);
    matchBusq = srcRegexBusq.exec(inputMultimediaBusqueda.outerHTML); 
    console.log(matchBusq);
    multimediaBusqueda = matchBusq[1]; 
    console.log(multimediaBusqueda);
    }

    crearPublicacionBusquedaArtista(titulo, artistaOEscenario, generoMusical, instrumentoMusical, ubicacionBusqueda, codigoPostal, descripcion, multimediaBusqueda);

    enviarMultimedia(inputMultimediaBusqueda);
  
    if (
      titulo.trim() === "" ||
      artistaOEscenario === "" ||
      ubicacionBusqueda === "" ||
      codigoPostal === "" ||
      descripcion === ""
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
        titulo.trim(),
        artistaOEscenario,
        generoMusical,
        instrumentoMusical,
        ubicacionBusqueda,
        codigoPostal,
        descripcion,
        multimediaBusqueda
      );
  
      console.log({publicacion});
      const publicacionJSON = JSON.stringify(publicacion);
  
      // Enviar los datos de la publicación al servidor usando fetch
      fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: titulo,
          artistaOEscenario: artistaOEscenario,
          generoMusical: generoMusical,
          instrumentoMusical: instrumentoMusical,
          ubicacionBusqueda: ubicacionBusqueda,
          codigoPostal: codigoPostal,
          descripcion: descripcion,
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

        // Editar los datos de la publicación al servidor usando fetch
      fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: titulo,
          artistaOEscenario: artistaOEscenario,
          generoMusical: generoMusical,
          instrumentoMusical: instrumentoMusical,
          ubicacionBusqueda: ubicacionBusqueda,
          codigoPostal: codigoPostal,
          descripcion: descripcion,
          multimediaBusqueda: multimediaBusqueda,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Mostrar mensaje de éxito o error al usuario
          if (data.success) {
            publicacion.textContent = "¡Publicación editada con éxito!";
          } else {
            publicacion.textContent =
              "Error al editar la publicación. Por favor, inténtalo de nuevo.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          publicacion.textContent =
            "Error al editar la publicación. Por favor, inténtalo de nuevo.";
        });

        // Eliminar los datos de la publicación del servidor usando fetch
      fetch("http://localhost:8081/api/v1/publicacion/add-publicacion", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo: titulo,
          artistaOEscenario: artistaOEscenario,
          generoMusical: generoMusical,
          instrumentoMusical: instrumentoMusical,
          ubicacionBusqueda: ubicacionBusqueda,
          codigoPostal: codigoPostal,
          descripcion: descripcion,
          multimediaBusqueda: multimediaBusqueda,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Mostrar mensaje de éxito o error al usuario
          if (data.success) {
            publicacion.textContent = "¡Publicación eliminada con éxito!";
          } else {
            publicacion.textContent =
              "Error al eliminar la publicación. Por favor, inténtalo de nuevo.";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          publicacion.textContent =
            "Error al eliminar la publicación. Por favor, inténtalo de nuevo.";
        });
    }
    // Limpiar y cerrar el modal
    formularioBusquedaArtista.reset();
    const myModal = bootstrap.Modal.getOrCreateInstance('modalBusquedaArtista');
    myModal.hide();
  });
  
   //Código para evitar que Mi Escena se recargue al hacer 'submit' en algún formulario
    var form = document.getElementById("formularioBusquedaArtista");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);


// Función para enviar los archivos multimedia al backend

function enviarMultimedia(img) {
  const imagen = img.files[0];
    console.log(imagen);
  const urlEnviar = "http://localhost:8081/api/v1/publicacion/add-publicacion";
  const reader = new FileReader();
    reader.onloadend = async() => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      const image = {
        inputMultimedia: base64String
      };
      try {
        const response = await fetch(urlEnviar, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(image)
        });
      if (response.ok) {
        console.log('Multimedia enviada exitosamente');
      } else {
        console.log('Error al enviar la multimedia');
      }
      } catch (error) {
          console.error('Error al enviar la multimedia: ', error);
          console.log('Error al enviar la multimedia');
  }};
reader.readAsDataURL(imagen); 
}


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



  function crearPublicacionFotoVideo (publicacionTexto, publicacionMultimedia){
    const publicacionFotoVideo = 
    {
      idPublicacion: 11,
      idAutor: 111,
      nombreAutor: "Moisés Reyes Orea",
      instrumentosAutor: ["Guitarra", "Teclado", "Batería"],
      avatarAutor: "../../pages/perfilPrivado/img/fotoPerfilVacio.jpg",
      titulo: "test" ,
      tipoPublicacion: "texto",
      tipoPublicacion: "multimedia",
      descripcion: [publicacionTexto],
      archivoMultimedia: publicacionMultimedia,
      createdAt: "2024-05-27T06:15:00Z",
    };
  
   crearNuevaPublicacion(publicacionFotoVideo);
  }

  function crearPublicacionBusquedaArtista (titulo, artistaOEscenario, generoMusical, instrumentoMusical, ubicacionBusqueda, codigoPostal, descripcion, multimediaBusqueda){
    const publicacionBusquedaArtista = 
    {
      idPublicacion: 12,
      idAutor: 112,
      nombreAutor: "Moisés Reyes Orea",
      instrumentosAutor: ["Guitarra", "Teclado", "Batería"],
      avatarAutor: "../../pages/perfilPrivado/img/fotoPerfilVacio.jpg",
      titulo: "test",
      tipoPublicacion: "texto",
      tipoPublicacion: "multimedia",
      descripcion: [`Título: ${titulo} \u000A | Busco: ${artistaOEscenario} \u000A | Me interesa: ${generoMusical} \u000A | Con: ${instrumentoMusical} \u000A | Ubicación: ${ubicacionBusqueda} \u000A | Código postal: ${codigoPostal} \u000A | Descripción: ${descripcion}`],
      archivoMultimedia: multimediaBusqueda,
      createdAt: "2024-05-27T08:15:00Z",
    };

   crearNuevaPublicacion(publicacionBusquedaArtista);
  }



  function crearNuevaPublicacion(datosPublicacion) {
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
    contenidoPublicacion.textContent = datosPublicacion.descripcion.join("\n");
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
    var contenedor = document.getElementById("nuevaPublicacion-contenedor");
  
    // Agregar el nuevo elemento al contenedor
    contenedor.appendChild(publicacionContenedor);
}
