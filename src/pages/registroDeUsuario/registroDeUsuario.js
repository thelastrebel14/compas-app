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
      throw new Error("No se encontro");
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

const inputCiudad = document.getElementById("inputCiudad");
