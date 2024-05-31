//modelo de objetos del formulario

//selecion de elementos del documento
// const radioSoyMusico = document.getElementById("soyMusico");
//const radioSoyEscenario = document.getElementById("soyEscenario");
const musicoInputs = document.getElementById("musicoInputs");
// const escenarioInputs = document.getElementById("escenarioInputs");

//funcionalidad dinamica para los radio buttons
/*radioSoyEscenario.addEventListener(
  "click",
  (mostrarInputs = () => {
    if (radioSoyEscenario.checked) {
      escenarioInputs.hidden = false;
      musicoInputs.hidden = true;
    }
  })
);*/

// radioSoyMusico.addEventListener(
//   "click",
//   (mostrarInputs = () => {
//     if (radioSoyMusico.checked) {
//       musicoInputs.hidden = false;
//       escenarioInputs.hidden = true;
//     }
//   })
// );

const cp = () => {
  rellenoCodigoPostal();
  return;
};
async function rellenoCodigoPostal() {
  try {
    const codigoPostal = document.getElementById("inputCP").value;
    const response = await fetch(
      `https://api.copomex.com/query/info_cp/${codigoPostal}?token=201768c9-47bc-43a0-a2fe-f1fd7462a119`
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
    apellidos,
    edad,
    genero,
    email,
    password,
    estado,
    ciudad,
    codigoPostal,
    instrumentosMusicales,
    generosMusicales,
    foto_perfil,
    foto_portada //,
    //isEscenario,
    //tipoDeEscenario
  ) {
    datos: {
      (this.nombre = nombre),
        (this.apellidos = apellidos),
        (this.edad = edad),
        (this.genero = genero),
        (this.email = email),
        (this.password = password);
    }
    localizacion: {
      (this.estado = estado),
        (this.ciudad = ciudad),
        (this.codigoPostal = codigoPostal);
    }
    tipoUsuario: {
      (this.instrumentosMusicales = instrumentosMusicales),
        (this.generosMusicales = generosMusicales);
      (this.foto_perfil = ""), (this.foto_portada = ""); //,
      //(this.isEscenario = isEscenario),
      // (this.tipoDeEscenario = tipoDeEscenario);
    }
  }
}
const botonRegistro = document.getElementById("registrarme");

botonRegistro.addEventListener("click", (e) => {
  e.preventDefault();
  const registroNombre = document.getElementById("inputName").value;
  const registroApellido = document.getElementById("inputApellido").value;
  const registroEdad = document.getElementById("inputAge").value;
  const registroGenero = document.getElementById("inputGender").value;
  const registroEmail = document.getElementById("inputEmail").value;
  const registroContrasena = document.getElementById("inputPassword").value;
  const registroCodigoPostal = document.getElementById("inputCP").value;
  const inputEstado = document.getElementById("inputEstado");
  const selectedEstado = inputEstado?.options[inputEstado.selectedIndex];
  const estadoValue = selectedEstado ? selectedEstado.value : "";
  const inputCiudad = document.getElementById("inputCiudad");
  const selectedCiudad = inputCiudad?.options[inputCiudad.selectedIndex];
  const ciudadValue = selectedCiudad ? selectedCiudad.value : "";
  const registroInstrumentos =
    document.getElementById("inputInstrumentos").value;
  const registroGenerosMusicales = document.getElementById(
    "inputGenerosMusicales"
  ).value;
  let usuario;
  // const registroIsEscenario = document.getElementById("soyEscenario").checked;
  // const registroTipoDeEscenario =
  //   document.getElementById("inputEscenario").value;

  // Verificar si algún campo está vacío o tiene valor no permitido
  if (
    registroNombre.trim() === "" ||
    registroApellido.trim() === "" ||
    registroEdad.trim() === "" ||
    registroGenero.trim() === "" ||
    registroEmail.trim() === "" ||
    registroContrasena.trim() === "" ||
    registroCodigoPostal.trim() === "" ||
    estadoValue.trim() === "" ||
    ciudadValue.trim() === "" ||
    registroInstrumentos.trim() === "" ||
    registroGenerosMusicales.trim() === "" //||
    // (registroIsEscenario && registroTipoDeEscenario.trim() === "")
  ) {
    //alert("Por favor completa todos los campos obligatorios.");
    if (document.querySelector(".alert")) {
      return;
    } else {
      const alerta = document.createElement("div");
      const contenedorAlerta = document.getElementById("alertaFormulario");
      alerta.classList.add("alert", "alert-danger");
      alerta.textContent = "Por favor completa todos los campos obligatorios.";
      alerta.style.textAlign = "center";
      alerta.focus();
      contenedorAlerta.appendChild(alerta);
    }

    return; // Detener la ejecución si algún campo está incompleto
  } else {
    usuario = new RegistroDeUsuario(
      registroNombre.trim(),
      registroApellido.trim(),
      registroEdad,
      registroGenero,
      registroEmail.trim(),
      registroContrasena,
      estadoValue,
      ciudadValue,
      registroCodigoPostal,
      registroInstrumentos.trim(),
      registroGenerosMusicales.trim()
    );
  }

  const usuarioJSON = JSON.stringify(usuario);
  console.log(usuario);

  fetch("http://localhost:8081/api/v1/usuario/add-usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: usuarioJSON,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la red:  " + response.statusText);
      }
      window.location.href = "../inicioDeSesion/inicioDeSesion.html";
      return response.json();
    })
    .then((data) => {
      window.location.href = "../inicioDeSesion/inicioDeSesion.html";
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación fetch:", error);
    });
});

//funciones a utilizar

//funcion de validacion en vivo
function validacionEnVivo(inputId, callback, evitaEscrituraInvalida = false) {
  let input = document.getElementById(inputId);

  input.oninput = () => {
    let v = input.value;
    isValid = callback(v);

    if (inputId === "inputPassword") {
      let confirmarPassword = document.getElementById("inputPasswordConfirm");
      if (confirmarPassword.value !== "") {
        if (validaCoincidenciaContrasena(confirmarPassword.value)) {
          confirmarPassword.classList.remove("is-invalid");
          confirmarPassword.classList.add("is-valid");
        } else {
          confirmarPassword.classList.remove("is-valid");
          confirmarPassword.classList.add("is-invalid");
          if (evitaEscrituraInvalida) {
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
      if (evitaEscrituraInvalida) {
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

function validaContrasena(password) {
  let resultado = true;
  const regexNumero = /\d/;
  const regexMayuscula = /[A-Z]/;
  const regexSimbolo = /[^a-zA-Z0-9]/;
  password = password.trim();
  // Verificar la longitud mínima
  if (password.length < 8) {
    resultado = false;
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(1)"
    ).style.color = "red";
  } else {
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(1)"
    ).style.color = "green";
  }

  // Verificar presencia de número
  if (!regexNumero.test(password)) {
    resultado = false;
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(2)"
    ).style.color = "red";
  } else {
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(2)"
    ).style.color = "green";
  }

  // Verificar presencia de mayúscula
  if (!regexMayuscula.test(password)) {
    resultado = false;
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(3)"
    ).style.color = "red";
  } else {
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(3)"
    ).style.color = "green";
  }

  // Verificar presencia de símbolo
  if (!regexSimbolo.test(password)) {
    resultado = false;
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(4)"
    ).style.color = "red";
  } else {
    document.querySelector(
      "#validacion-caracteres-contrasena label:nth-child(4)"
    ).style.color = "green";
  }

  return resultado;
}

//funcion para validar el correo
function validarEmail(correo) {
  // Se consideran los dominios y extensiones más populares en México para el registro de correos.
  // No se aceptan correos universitarios o empresariales ya que la cuenta debe ser personal.
  if (
    !correo.match(
      /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com|yahoo\.com|aol\.com|telmex\.com|prodigy\.net\.mx|infinitum\.com\.mx)$/
    )
  ) {
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

function validaCoincidenciaContrasena(password) {
  let passwordCheck = document.getElementById("inputPassword").value;

  if (password !== passwordCheck) {
    document
      .querySelector("#validacion-coincidencia-contrasena")
      .removeAttribute("hidden");
    document.querySelector(
      "#validacion-coincidencia-contrasena label:nth-child(1)"
    ).style.color = "red";
    document.querySelector(
      "#validacion-coincidencia-contrasena label:nth-child(1)"
    ).textContent = "Las contraseñas no coinciden";
    return false;
  }

  document.querySelector(
    "#validacion-coincidencia-contrasena label:nth-child(1)"
  ).style.color = "green";
  document
    .querySelector("#validacion-coincidencia-contrasena")
    .removeAttribute("hidden");
  document.querySelector(
    "#validacion-coincidencia-contrasena label:nth-child(1)"
  ).textContent = "Las contraseñas coinciden";
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
      (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) ||
      texto.charCodeAt(i) == 32
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
validacionEnVivo("inputPassword", validaContrasena);
validacionEnVivo("inputPasswordConfirm", validaCoincidenciaContrasena);
validacionEnVivo("inputCP", validaCodigoPostal);
validacionEnVivo("inputName", validarTexto, true);
validacionEnVivo("inputInstrumentos", validarTexto, true);
validacionEnVivo("inputGenerosMusicales", validarTexto, true);
// validacionEnVivo("inputEscenario", validarTexto, true);

const form = document.querySelector(".needs-validation");
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

var inputContraseña = document.getElementById("inputPassword");

inputContraseña.addEventListener("keydown", function (event) {
  var teclaPresionada = event.keyCode || event.which;

  if (teclaPresionada === 32) {
    event.preventDefault();
  }
});

var inputContraseñaConfirmar = document.getElementById("inputPasswordConfirm");
inputContraseñaConfirmar.addEventListener("keydown", function (event) {
  var teclaPresionada = event.keyCode || event.which;

  if (teclaPresionada === 32) {
    event.preventDefault();
  }
});

// implementacion del checkbox
/*
const direccionCheckbox = document.getElementById("direccionCheckbox");
const selectEstado = document.getElementById("selectEstado");
const selectCiudad = document.getElementById("selectCiudad");
const dataCiudad = document.getElementById("dataCiudad");
const dataEstado = document.getElementById("dataEstado");

direccionCheckbox.addEventListener("click", function (event) {
  if (direccionCheckbox.checked) {
    if (
      !document.getElementById("inputTextEstado") &&
      !document.getElementById("inputTextCiudad")
    ) {
      //oculta el input de select
      selectEstado.hidden = true;
      selectCiudad.hidden = true;

      //crea el nuevo input de tipo texto para estado
      const divEstado = document.createElement("div");
      const inputEstado = document.createElement("input");
      const labelEstado = document.createElement("label");

      //asigna clases y atributos a los elementos
      divEstado.classList.add("form-floating");
      divEstado.id = "inputTextEstado";

      inputEstado.classList.add("form-control");
      inputEstado.type = "text";
      inputEstado.id = "inputEstado";
      inputEstado.placeholder = "Estado";
      inputEstado.required = true;

      labelEstado.classList.add("form-label");
      labelEstado.setAttribute("for", "inputEstado");
      labelEstado.textContent = "Estado";

      //añade los elementos al div
      divEstado.append(inputEstado, labelEstado);
      dataEstado.append(divEstado);

      //crea el nuevo input de tipo texto para ciudad
      //crea el nuevo input de tipo texto para estado
      const divCiudad = document.createElement("div");
      const inputCiudad = document.createElement("input");
      const labelCiudad = document.createElement("label");

      //asigna clases y atributos a los elementos
      divCiudad.classList.add("form-floating");
      divCiudad.id = "inputTextCiudad";

      inputCiudad.classList.add("form-control");
      inputCiudad.type = "text";
      inputCiudad.id = "inputCiudad";
      inputCiudad.placeholder = "Ciudad";
      inputCiudad.required = true;

      labelCiudad.classList.add("form-label");
      labelCiudad.setAttribute("for", "inputCiudad");
      labelCiudad.textContent = "Ciudad";

      //añade los elementos al div
      divCiudad.append(inputCiudad, labelCiudad);
      dataCiudad.append(divCiudad);
    } else if (
      document.getElementById("inputTextEstado") &&
      document.getElementById("inputTextCiudad")
    ) {
      document.getElementById("inputTextEstado").hidden = false;
      document.getElementById("inputTextCiudad").hidden = false;
      selectEstado.hidden = true;
      selectCiudad.hidden = true;
    }
  } else if (!direccionCheckbox.checked) {
    //habilita los selects
    selectEstado.hidden = false;
    selectCiudad.hidden = false;
    document.getElementById("inputTextCiudad").hidden = true;
    document.getElementById("inputTextEstado").hidden = true;
  }
});
*/
// const inputInstrumentos = document.getElementById("inputInstrumentos");
// const inputGenerosMusicales = document.getElementById("inputGenerosMusicales");
// const instrumentosChipContainer = document.getElementById("instrumentosChips");
// const generosChipContainer = document.getElementById("generosChips");

// function crearChip(text, container) {
//   const chip = document.createElement("div");
//   const chipClose = document.createElement("span");
//   chipClose.innerHTML = "&times;";
//   chipClose.id = "removeChip";
//   chip.classList.add("chip");
//   chip.textContent = text;
//   chip.append(chipClose);
//   container.append(chip);
//   chipClose.addEventListener("click", function (event) {
//     event.target.parentElement.remove();
//   });
// }

// inputInstrumentos.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     let text = event.target.value;
//     crearChip(text, instrumentosChipContainer);
//   }
// });

// inputGenerosMusicales.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     let text = event.target.value;
//     crearChip(text, generosChipContainer);
//   }
// });
