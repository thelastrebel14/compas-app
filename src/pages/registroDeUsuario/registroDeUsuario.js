//modelo de objetos del formulario

//selecion de elementos del documento
const radioSoyMusico = document.getElementById("soyMusico");
const radioSoyEscenario = document.getElementById("soyEscenario");
const musicoInputs = document.getElementById("musicoInputs");
const escenarioInputs = document.getElementById("escenarioInputs");

//funcionalidad dinamica para los radio buttons
radioSoyEscenario.addEventListener(
  "click",
  (mostrarInputs = () => {
    if (radioSoyEscenario.checked) {
      escenarioInputs.hidden = false;
      musicoInputs.hidden = true;
    }
  })
);

radioSoyMusico.addEventListener(
  "click",
  (mostrarInputs = () => {
    if (radioSoyMusico.checked) {
      musicoInputs.hidden = false;
      escenarioInputs.hidden = true;
    }
  })
);

const cp = () => {
  rellenoCodigoPostal();
};
async function rellenoCodigoPostal() {
  try {
    const codigoPostal = document.getElementById("inputCP").value;
    const response = await fetch(
      `https://api.copomex.com/query/info_cp/${codigoPostal}?token=4d481f50-19e7-4e38-8d07-870975872307`
    );
    if (!response.ok) {
      throw new Error("No se encontró");
    }

    const data = await response.json();
    const opcionEstado = document.getElementById("inputEstado");
    const opcionMunicipio = document.getElementById("inputCiudad");

    data.forEach((element) => {
      let nuevaOpcionEstado = document.createElement("option");
      let nuevaOpcionMunicipio = document.createElement("option");
      nuevaOpcionEstado.textContent = element.response.estado;
      nuevaOpcionMunicipio.textContent = element.response.municipio;
      opcionEstado.appendChild(nuevaOpcionEstado);
      opcionMunicipio.appendChild(nuevaOpcionMunicipio);
    });
  } catch (error) {
    console.error(error);
  }
}

class RegistroDeUsuario {
  constructor(
    nombre,
    edad,
    genero,
    email,
    contraseña,
    estado,
    ciudad,
    codigoPostal,
    isMusico,
    instrumentosMusicales,
    generosMusicales,
    isEscenario,
    tipoDeEscenario
  ) {
    datos: {
      (this.nombre = nombre),
        (this.edad = edad),
        (this.genero = genero),
        (this.email = email),
        (this.contraseña = contraseña);
    }
    localizacion: {
      (this.estado = estado),
        (this.ciudad = ciudad),
        (this.codigoPostal = codigoPostal);
    }
    tipoUsuario: {
      (this.isMusico = isMusico),
        (this.instrumentosMusicales = instrumentosMusicales),
        (this.generosMusicales = generosMusicales),
        (this.isEscenario = isEscenario),
        (this.tipoDeEscenario = tipoDeEscenario);
    }
  }
}
const botonRegistro = document.getElementById("registrarme");
botonRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  const registroNombre = document.getElementById("inputName").value;
  const registroEdad = document.getElementById("inputAge").value;
  const registroGenero = document.getElementById("inputGender").value;
  const registroEmail = document.getElementById("inputEmail").value;
  const registroContraseña = document.getElementById("inputPassword").value;
  const registroCodigoPostal = document.getElementById("inputCP").value;
  const inputEstado = document.getElementById("inputEstado");
  const selectedEstado = inputEstado?.options[inputEstado.selectedIndex];
  const estadoValue = selectedEstado ? selectedEstado.value : "";
  const inputCiudad = document.getElementById("inputCiudad");
  const selectedCiudad = inputCiudad?.options[inputCiudad.selectedIndex];
  const ciudadValue = selectedCiudad ? selectedCiudad.value : "";
  const registroIsMusico = document.getElementById("soyMusico").checked;
  const registroInstrumentos =
    document.getElementById("inputInstrumentos").value;
  const registroGenerosMusicales = document.getElementById(
    "inputGenerosMusicales"
  ).value;
  const registroIsEscenario = document.getElementById("soyEscenario").checked;
  const registroTipoDeEscenario =
    document.getElementById("inputEscenario").value;

  let usuario = new RegistroDeUsuario(
    (nombre = registroNombre),
    (edad = registroEdad),
    (genero = registroGenero),
    (email = registroEmail),
    (contraseña = registroContraseña),
    (estado = estadoValue),
    (ciudad = ciudadValue),
    (codigoPostal = registroCodigoPostal),
    (isMusico = registroIsMusico),
    (instrumentosMusicales = registroInstrumentos),
    (generosMusicales = registroGenerosMusicales),
    (isEscenario = registroIsEscenario),
    (tipoDeEscenario = registroTipoDeEscenario)
  );
  const usuarioJSON = JSON.stringify(usuario);
});

//funciones a utilizar

//funcion de validacion en vivo
function validacionEnVivo(inputId, callback, evitaEscrituraInvalida = false) {
  let input = document.getElementById(inputId);
  
  input.oninput = () => {
    let v = input.value;
    isValid = callback(v);

    if(inputId === 'inputPassword'){
      let confirmarPassword = document.getElementById('inputPasswordConfirm')
      if(confirmarPassword.value !== ''){
        if(validaCoincidenciaContraseña(confirmarPassword.value)){
          confirmarPassword.classList.remove("is-invalid");
          confirmarPassword.classList.add("is-valid");
        } else {
          confirmarPassword.classList.remove("is-valid");
          confirmarPassword.classList.add("is-invalid");
          if (evitaEscrituraInvalida){
            confirmarPassword.value = v.slice(0, -1); // Si el caracter no es válido, lo elimina del campo
          }
        }
      }
    }

    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      if (evitaEscrituraInvalida){
        input.value = v.slice(0, -1); // Si el caracter no es válido, lo elimina del campo
      }
    }
  };
}

//funcion para validar codigo postal

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

// funcion para validar la contraseña

function validaContraseña(password) {
  let resultado = true; 
  const regexNumero = /\d/;
  const regexMayuscula = /[A-Z]/;
  const regexSimbolo = /[^a-zA-Z0-9]/;
  password = password.trim();
  // Verificar la longitud mínima
  if (password.length < 8) {
    resultado = false;
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(1)').style.color = 'red';
  } else {
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(1)').style.color = 'green';
  }

  // Verificar presencia de número
  if (!regexNumero.test(password)) {
    resultado = false;
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(2)').style.color = 'red';
  } else {
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(2)').style.color = 'green';
  }

  // Verificar presencia de mayúscula
  if (!regexMayuscula.test(password)) {
    resultado = false;
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(3)').style.color = 'red';
  } else {
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(3)').style.color = 'green';
  }

  // Verificar presencia de símbolo
  if (!regexSimbolo.test(password)) {
    resultado = false;
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(4)').style.color = 'red';
  } else {
    document.querySelector('#validacion-caracteres-contraseña label:nth-child(4)').style.color = 'green';
  }

  return resultado;
}

//funcion para validar el correo
function validarEmail(correo) {
  // Se consideran los dominios y extensiones más populares en México para el registro de correos.
  // No se aceptan correos universitarios o empresariales ya que la cuenta debe ser personal.
  if (!correo.match(/^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com|yahoo\.com|aol\.com|telmex\.com|prodigy\.net\.mx|infinitum\.com\.mx)$/)) {
    return false;
  }
  return true;
}

// funcion para validar edad

function validarEdad(edad) {
  if (edad > 15 && edad < 120) {
    return true;
  }
  return false;
}

// funcion para confirmar contraseña

function validaCoincidenciaContraseña(password) {
  let passwordCheck = document.getElementById("inputPassword").value;
  if (password !== passwordCheck) {
    
    document.querySelector('#validacion-coincidencia-contraseña label:nth-child(1)').style.color = 'red';
    return false;
  }
  
  document.querySelector('#validacion-coincidencia-contraseña label:nth-child(1)').style.color = 'green';
  return true;
}

//funcion para solo texto
function validarTexto(texto) {
  // inicializa variable para determinar si es texto
  isText = false;
  // Verificar que la casilla no se deje vacía
  if (texto == "" || texto == null) {
    // se omite todo y regresa false
    return false;
  }

  // Verificar que el tipo de dato sea una cadena de texto
  if (typeof texto !== "string") {
    // se omite todo y regresa false
    return false;
  }

  // Verificar que los caracteres utilizados sean letras según la tabla ASCII
  for (let i = 0; i < texto.length; i++) {
    if (
      (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) ||
      (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)
    ) {
      // se actualiza la variable
      isText = true;
    } else {
      // se actualiza la variable
      isText = false;
    }
  }
  // elimina espacios innecesarios
  texto = texto.trim();

  // regresa el valor booleano de la variable
  return isText;
}

// implementacion de las funciones

validacionEnVivo("inputAge", validarEdad);
validacionEnVivo("inputEmail", validarEmail);
validacionEnVivo("inputPassword", validaContraseña);
validacionEnVivo("inputPasswordConfirm", validaCoincidenciaContraseña);
validacionEnVivo("inputCP", validaCodigoPostal);
validacionEnVivo("inputName", validarTexto, true);

const form = document.querySelector(".needs-validation");
form.addEventListener(
  "submit",
  (event) => {
    console.log(form.children);
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  },
  false
);
