// const acercaDe = document.getElementById('idAcercaDeIcon'); // Constante que contiene el elemento iconEditAcercaDe mediante su ID(idAcercaDeIcon)

// acercaDe.addEventListener( "click" ,() => {  // al objeto acercaDe se le agrega un evento de escucha tipo click y ejecuta la funcion anonima de tipo flecha siguiente

//     console.log("Acerca de click");
//   });
// --------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  cargarInfoUserEnPerfil();
});

// Validación en vivo de input Nombre
validacionEnVivo("nombrePerfil", //string del id del input
  validarTexto); //callback de una funcion de validacion
// Validación en vivo de input Ciudad
validacionEnVivo("ciudadPerfil", //string del id del input
  validarTexto); //callback de una funcion de validacion
// Validación en vivo de input Estado
validacionEnVivo("estadoPerfil", //string del id del input
  validarTexto); //callback de una funcion de validacion
// Validación en vivo de input Instrumentos
//validacionEnVivo("instrumentosPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Género musical
//validacionEnVivo("generoMusicalPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Número de telefono
//validacionEnVivo("numTelefono",  //string del id del input
//  validaTelefonosValidacion);  //callback de una funcion de validacion

//                      Clase de prueba que carga sus elementos a la información del perfil
class UserCreadoEnRegistro {
  //instrumentos = ["Guitarra","Bajo","Voz"];
  //generosMusicales = ["Rock","Cumbia","Metal"];
  instrumentosMusicales = [];
  generosMusicales = [];
  constructor(nombre, ciudad, estado, instrumentosMusicales,generosMusicales){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.estado = estado;
    //this.fotoPerfil = fotoPerfil;
    this.instrumentosMusicales = instrumentosMusicales;
    this.generosMusicales = generosMusicales;
    // this.imgPortada = imgPortada;
  }
  mostrarAtributos(){
    console.log(this.nombre,this.ciudad,this.estado,this.instrumentosMusicales,this.generosMusicales);
  }
  // // Método para agregar un instrumento al array
  // agregarInstrumento(instrumento) {
  //   this.instrumentos.push(instrumento);
  //   console.log(`Instrumento '${instrumento}' agregado a la biblioteca.`);
  // }
  // // Método para modificar atributos en el array "instrumentos"
  // modificarInstrumentos(element, posision){
  //   this.instrumentos[posision] = element;
  // }
  // // Método para agregar un género musical al array
  // agregarGeneroMusical(generoMusical) {
  //   this.generosMusicales.push(generoMusical);
  //   console.log(`Genero '${generoMusical}' agregado a la biblioteca.`);
  // }
  // // Método para modificar atributos en el array "generosMusicales"
  // modificarGenerosMusicales(element, posision){
  //   this.generosMusicales[posision] = element;
  // }
}
//                      Instanciar un objeto desde la clase UserCreadoEnRegistro
//const objetoUsuarioDelPerfil = new UserCreadoEnRegistro('Moises Reyes Orea', 'Guadalajara', 'Jalisco');
const objetoUsuarioDelPerfil = JSON.parse(localStorage.getItem("usuarioCompleto"));
// objetoUsuarioDelPerfil.mostrarAtributos();
 console.log(objetoUsuarioDelPerfil.nombre);
 console.log(objetoUsuarioDelPerfil.ciudad); 
 console.log(objetoUsuarioDelPerfil.estado); 
 console.log(objetoUsuarioDelPerfil.instrumentosMusicales);
 console.log(objetoUsuarioDelPerfil.generosMusicales);

// objetoUsuarioDelPerfil.agregarInstrumento("teclado");

//                                      Creación de elementos
// Creando un nuevo elemento 'h1' y guardandolo en una constante 'nombreUser'
const nombreUser = document.createElement("h1");
const ubicacionUser = document.createElement("h5");
const instrumentosUser = document.createElement("p");
const generosMusicalesUser = document.createElement("p");
//const fotoPerfilUser = document.createElement("img");
// const fotoPerfilUser = document.getElementById("");

//                              Obtener referencias de los contenedores
// Obtener referencia al contenedor "nombreUsuario"
const contenedorNombreUser = document.getElementById('contenedor--nombreUsuario');
// Obtener referencia al contenedor "ubicacionUsuario"
const contenedorUbicacionUser = document.getElementById('contenedor--ubicacion');
// Obtener referencia al contenedor "instrumentos"
const contenedorInstrumentos = document.getElementById("contenedor--instrumentos");
// Obtener referencia al contenedor "inputsInstrumentos"
const contenedorInputsIntrumentos = document.getElementById('contenedor--inputsInstrumentos');
// Obtener referencia al contenedor "generosMusicales"
const contenedorGenerosMusicales = document.getElementById('contenedor--generosMusicales');
// Obtener referencia al contenedor "inputsGenerosMusicales"
const contenedorInputsGenerosMusicales = document.getElementById('contenedor--inputsGenerosMusicales');
// Obtener referencia al contenedor "fotoPerfil"
const contenedorFotoPerfil = document.getElementById('contenedor--fotoPerfil');


//                      Función para cargar información inicial del usuario a su perfil
function cargarInfoUserEnPerfil(){
// Configurando el nuevo elemento, estableciendole atributos, contenido, estilos, etc.
nombreUser.textContent = objetoUsuarioDelPerfil.nombre;
ubicacionUser.textContent = objetoUsuarioDelPerfil.ciudad + ", " + objetoUsuarioDelPerfil.estado;
instrumentosUser.textContent = objetoUsuarioDelPerfil.instrumentosMusicales;
generosMusicalesUser.textContent = objetoUsuarioDelPerfil.generosMusicales;
// Agregar el nuevo elemento 'nombreUser' al contenedor 'contenedorNombreUser' mediante DOM
contenedorNombreUser.appendChild(nombreUser);
contenedorUbicacionUser.appendChild(ubicacionUser);
contenedorInstrumentos.appendChild(instrumentosUser);
contenedorGenerosMusicales.appendChild(generosMusicalesUser);
}
cargarInfoUserEnPerfil();

//                            Formulario Edit Información de Usuario en Perfil
//                            Formulario Edit Información de Usuario en Perfil
const consformProfileInfo = document.querySelector('#formProfileInfo'); // Constante que contiene el elemento formulario mediante su ID(formProfileInfo)
consformProfileInfo.addEventListener('submit', function (event) { // al objeto consformProfileInfo se le agrega un evento de escucha tipo "submit" y ejecuta la funcion anonima siguiente.
  event.preventDefault();
  // Leyendo valores de los inputs del formulario
  objetoUsuarioDelPerfil.nombre = document.getElementById('nombrePerfil').value; //Modifica el atributo nombre del objeto usuario
  console.log(objetoUsuarioDelPerfil.nombre);
  objetoUsuarioDelPerfil.ciudad = document.getElementById('ciudadPerfil').value;
  console.log(objetoUsuarioDelPerfil.ciudad);
  objetoUsuarioDelPerfil.estado = document.getElementById('estadoPerfil').value;
  console.log(objetoUsuarioDelPerfil.estado);

  // Leyendo valores de inputs instrumentos y guardandolos en el atributo array 'objetoUsuarioDelPerfil.instrumentos'
  let numeroInputsInstrumentos = contenedorInputsIntrumentos.children;
  //console.log(numeroInputsInstrumentos.length);
  for (let i = 1; i <= numeroInputsInstrumentos.length; i++) {
    const newInstrument = document.getElementById(`input${i}--instrumento`).value;
    console.log(newInstrument);
    objetoUsuarioDelPerfil.instrumentosMusicales[i-1] = newInstrument;
  }
  // Eliminando elementos sobrantes en el array 'objetoUsuarioDelPerfil.instrumentos'
  let tamanoArrayInstrumentos = objetoUsuarioDelPerfil.instrumentosMusicales.length;
  for(let i = numeroInputsInstrumentos.length; i < tamanoArrayInstrumentos; i++){
      //objetoUsuarioDelPerfil.instrumentosMusicales.splice(i);
  }

  // Leyendo valores de inputs generosMusicales y guardandolos en el atributo array 'objetoUsuarioDelPerfil.generosMusicales'
  let numeroInputsGenerosMusicales = contenedorInputsGenerosMusicales.children;
  //console.log(numeroInputsGenerosMusicales.length);
  for (let i = 1; i <= numeroInputsGenerosMusicales.length; i++) {
    const newGeneroMusical = document.getElementById(`input${i}--generoMusical`).value;
    console.log(newGeneroMusical);
    objetoUsuarioDelPerfil.generosMusicales[i - 1] = newGeneroMusical; // Modificando los elementos del atributo array 'generosMusicales'
  }
  // Eliminando elementos sobrantes en el array 'objetoUsuarioDelPerfil.generosMusicales'
  let tamanoArrayGenerosMusicales = objetoUsuarioDelPerfil.generosMusicales.length;
  for(let i = numeroInputsGenerosMusicales.length; i < tamanoArrayGenerosMusicales; i++){
      //objetoUsuarioDelPerfil.generosMusicales.splice(i);
  }

  // Leyendo valores de inputs redesSociales y guardandolos en el atributo array 'objetoUsuarioDelPerfil.redesSociales'


  //                   Manipulación del DOM para informacion del perfil
  // Configurando el nuevo elemento, estableciendole atributos, contenido, etc.
  nombreUser.textContent = objetoUsuarioDelPerfil.nombre;
  ubicacionUser.textContent = objetoUsuarioDelPerfil.ciudad + ", " + objetoUsuarioDelPerfil.estado;
  instrumentosUser.textContent = objetoUsuarioDelPerfil.instrumentosMusicales;
  generosMusicalesUser.textContent = objetoUsuarioDelPerfil.generosMusicales;
  // Agregar el nuevo elemento al contenedor
  contenedorNombreUser.appendChild(nombreUser);
  contenedorUbicacionUser.appendChild(ubicacionUser);
  contenedorInstrumentos.appendChild(instrumentosUser);
  contenedorGenerosMusicales.appendChild(generosMusicalesUser);
});

// Funcion test para verificar valores del objeto
function impr() {
  console.log(objetoUsuarioDelPerfil.nombre);
  console.log(objetoUsuarioDelPerfil.ciudad);
  console.log(objetoUsuarioDelPerfil.estado);
  console.log(objetoUsuarioDelPerfil.instrumentos);
  console.log(objetoUsuarioDelPerfil.generosMusicales);
}

//                  Agregando Inputs en sección instrumentos de modal información personal

// Variable para el total de elementos agregados
let totalInputsIntrumentos = 1;
// Bloque de código que agrega inputs en modal
const buttonAddInputInstruments = document.getElementById("button--AddInstrument");
buttonAddInputInstruments.addEventListener('click', function (event) {
  //crear elemento div
  const inputsInstrumentos = document.createElement("div");
  //agregar un input al elemento div
  inputsInstrumentos.innerHTML = `<label>${totalInputsIntrumentos}</label> <input type="text" id="input${totalInputsIntrumentos}--instrumento" name="instrumento[]" placeholder="Añade instrumento" required><button onclick="eliminarInputsInstrumentos(this)">Eliminar</button>`;
  //agregar el elemento div a contenedor inputsInstrumentos
  contenedorInputsIntrumentos.appendChild(inputsInstrumentos);
  totalInputsIntrumentos++;
});
// Método para eliminar el div contenedor del input
const eliminarInputsInstrumentos = (e) => {
  const divPadre = e.parentNode;
  contenedorInputsIntrumentos.removeChild(divPadre);
  actualizarContadorInputsInstrumentos();
};
// Método para actualizar el contador de los elementos agregados
const actualizarContadorInputsInstrumentos = () => {
  let divs = contenedorInputsIntrumentos.children;
  totalInputsIntrumentos = 1;
  for (let i = 0; i < divs.length; i++) {
    divs[i].children[0].innerHTML = totalInputsIntrumentos;
    divs[i].children[1].id = `input${totalInputsIntrumentos++}--instrumento`;
  }
};
//                  Agregando Inputs en sección generosMusicales de modal información personal

// Variable para el total de elementos agregados
let totalInputsGenerosMusicales = 1;
// Bloque de código que agrega inputs en modal
const buttonAddInputGeneroMusical = document.getElementById("button--AddGeneroMusical");
buttonAddInputGeneroMusical.addEventListener('click', function (event) {
  //crear elemento div
  const inputsGenerosMusicales = document.createElement("div");
  //agregar un input al elemento div
  inputsGenerosMusicales.innerHTML = `<label>${totalInputsGenerosMusicales}</label> <input type="text" id="input${totalInputsGenerosMusicales}--generoMusical" name="generoMusical[]" placeholder="Añade género musical" required><button onclick="eliminarInputsGenerosMusicales(this)">Eliminar</button>`;
  //agregar el elemento div a contenedor inputsInstrumentos
  contenedorInputsGenerosMusicales.appendChild(inputsGenerosMusicales);
  totalInputsGenerosMusicales++;
});
// Método para eliminar el div contenedor del input
const eliminarInputsGenerosMusicales = (e) => {
  const divPadre = e.parentNode;
  contenedorInputsGenerosMusicales.removeChild(divPadre);
  actualizarContadorInputsGenerosMusicales();
};
// Método para actualizar el contador de los elementos agregados
const actualizarContadorInputsGenerosMusicales = () => {
  let divs = contenedorInputsGenerosMusicales.children;
  totalInputsGenerosMusicales = 1;
  for (let i = 0; i < divs.length; i++) {
    divs[i].children[0].innerHTML = totalInputsGenerosMusicales;
    divs[i].children[1].id = `input${totalInputsGenerosMusicales++}--generoMusical`;
  }
};

// --------------------  Sección acerca de   ------------------------------------
// --------------------  Sección acerca de   ------------------------------------

//              Validaciones en vivo sección acerca de
/*  Ejemplo de uso funcion validacionEnVivo
 validacionEnVivo("inputId", callback-funcion-validación);   */
//validacionEnVivo("message-text", validarTexto);

// Creando un nuevo elemento 'p' y guardandolo en una constante 'textAcercaDe'
const textAcercaDe = document.createElement("p");

// ----------------------    Capturando texto de formularios --------------------
const textUsuarioAcercaDe = document.querySelector('#formAcercaDe');
textUsuarioAcercaDe.addEventListener('submit', function (event1) {
  event1.preventDefault();
  const textAcercaDeForm = document.getElementById("message-text").value;
  console.log(textAcercaDeForm);
  //  ---------------------    Actualizando elementos del DOM  ------------------------
  // Configurando el nuevo elemento, estableciendole atributos, contenido, estilos, etc.
  textAcercaDe.textContent = textAcercaDeForm; //textAcercaDeForm.textContent;
  // Obtener referencia al contenedor acerca de
  const contenedorAcecaDe = document.getElementById('contenedor--acercaDe');
  // Agregar el nuevo elemento 'textAcercaDe' al contenedor 'contenedorAcercaDe' mediante DOM
  contenedorAcecaDe.appendChild(textAcercaDe);
  // Limpiar el contenido del textarea
  formAcercaDe.reset();
  // Cerrar el modal utilizando el método de Bootstrap
  const myModal = bootstrap.Modal.getOrCreateInstance('#acercaDeModal');
  myModal.hide();
});




//---------------------------------------------------------------------
// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }

//------------------Demos----------------------
const demos = [{
  "idDemo": 1,
  "idUsuario": 1,
  "titulo": "¿Quién carajo son Los Fantasmas Del Ático?",
  "FechaDeLanzamiento": "26/11/1998",
  "link": "https://www.youtube.com/watch?v=URuWE-gvfJw",
  "fotoPortada": ""
}]