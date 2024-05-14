class NuevaPublicacionFotoVideo {
    constructor (
        texto, 
        multimedia,
    ) {
        {
            (this.texto = texto),
            (this.multimedia = multimedia)
        }
    }
}

const botonPublicarFotoVideo = document.getElementById('publicarFotoVideo');

botonPublicarFotoVideo.addEventListener('click', (e) => {
    const publicacionTexto = document.getElementById('publicacionTexto').value;
    const publicacionMultimedia = document.getElementById('publicacionMultimedia').value;

    if (publicacionTexto.trim() === '') {
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
        publicacion = new NuevaPublicacionFotoVideo (
            publicacionTexto.trim(),
            publicacionMultimedia,
        );
    }
    console.log({publicacion});
    const publicacionJSON = JSON.stringify(publicacion);
});

class NuevaPublicacionBusquedaArtista {
  constructor (
      tituloPublicacion, 
      artistaOEscenario,
      generoMusical,
      instrumentoMusical,
      ubicacionBusqueda,
      codigoPostal,
      cuerpoPublicacion,
      multimediaBusqueda,
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

const botonPublicarBusquedaArtista = document.getElementById('publicarBusquedaArtista');

botonPublicarBusquedaArtista.addEventListener('click', (e) => {
  const tituloPublicacion = document.getElementById('tituloPublicacion').value;
  const artistaOEscenario = document.getElementById('artistaOEscenario').value;
  const generoMusical = document.getElementById('generoMusical').value;
  const instrumentoMusical = document.getElementById('instrumentoMusical').value;
  const ubicacionBusqueda = document.getElementById('ubicacionBusqueda').value;
  const codigoPostal = document.getElementById('codigoPostal').value;
  const cuerpoPublicacion = document.getElementById('cuerpoPublicacion').value;
  const multimediaBusqueda = document.getElementById('multimediaBusqueda').value;

  if (tituloPublicacion.trim() === '' ||
      artistaOEscenario === '' ||
      ubicacionBusqueda === '' ||
      codigoPostal === '' ||
      cuerpoPublicacion === ''
    ) {
    if (document.querySelector(".alert")) {
        return;
      } else {
        const alerta = document.createElement("div");
        const contenedorAlerta = document.getElementById("formularioBusquedaArtista");
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "Por favor, completa todos los campos.";
        alerta.style.textAlign = "center";
        alerta.focus();
        contenedorAlerta.appendChild(alerta);
      }
      return;
} else {
    let publicacion;
    publicacion = new NuevaPublicacionBusquedaArtista (
        tituloPublicacion.trim(),
        artistaOEscenario,
        generoMusical,
        instrumentoMusical,
        ubicacionBusqueda,
        codigoPostal,
        cuerpoPublicacion,
        multimediaBusqueda,
    );
}
console.log({publicacion});
const publicacionJSON = JSON.stringify(publicacion);
});



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