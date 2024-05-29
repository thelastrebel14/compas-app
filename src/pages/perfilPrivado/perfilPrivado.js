document.addEventListener("DOMContentLoaded", function () {
  fetchGetInfoUser();
});

function fetchGetInfoUser(){
  // ---------    Función Fetch para extraer datos, cargarlos en los elementos HTML y guardarlos en un objeto
  const url = 'https://jsonplaceholder.typicode.com/users/5';
  let post;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      post = response;
      //setTimeout(funcionAejecutarse, 1500);
      cargarInfoUserEnPerfil(post);
      instanciarObjetoUser(post);
      mostrarDatosObjeto();
    })
    .catch(error => console.error("error en la petición", error));
}

// ---------   Función Fetch para Enviar los datos modificados del formulario al servidor usando fetch
// const urlPost = "";
// fetch(urlPost, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8"},
// // Definir el body que debe coincidir con mi API, para ello le paso un método stringify que permite transformar el objeto en formato JSON
//   body: JSON.stringify({
//     nombre: nombreUser,
//     ciudad: ciudadUser,
//     estado: estadoUser
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Mostrar mensaje de éxito o error al usuario
//     if (data.success) {
//       console.log("¡Datos enviados con éxito!");
//     } else {
//       console.log("Error al actualizar los datos. Inténtalo de nuevo.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//     console.log("Error al actualizar los datos. Inténtalo de nuevo.");
//     });

//-------------------  Clase con la información del perfil del usuario
class UserCreadoEnRegistro {
  // instrumentosMusicales = ["Guitarra","Bajo","Voz"];
  // generosMusicales = ["Rock","Cumbia","Metal"];
  instrumentosMusicales = [];
  generosMusicales = [];
  fotoPerfil;
  constructor(nombre, ciudad, estado,instrumentosMusicales,generosMusicales){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.estado = estado;
    //this.fotoPerfil = fotoPerfil;
    // this.instrumentosMusicales = instrumentosMusicales;
    // this.generosMusicales = generosMusicales;
    // this.imgPortada = imgPortada;
  }
  mostrarAtributos(){
    console.log(this.nombre,this.ciudad,this.estado,this.instrumentosMusicales,this.generosMusicales,this.fotoPerfil);
  }
  // Método para agregar un instrumento al array
  agregarInstrumento(instrumento) {
    this.instrumentos.push(instrumento);
    console.log(`Instrumento '${instrumento}' agregado a la biblioteca.`);
  }
  // Método para modificar atributos en el array "instrumentos"
  modificarInstrumentos(element, posision){
    this.instrumentos[posision] = element;
  }
  // Método para agregar un género musical al array
  agregarGeneroMusical(generoMusical) {
    this.generosMusicales.push(generoMusical);
    console.log(`Genero '${generoMusical}' agregado a la biblioteca.`);
  }
  // Método para modificar atributos en el array "generosMusicales"
  modificarGenerosMusicales(element, posision){
    this.generosMusicales[posision] = element;
  }
}

//                                      Creación de elementos
// Creando un nuevo elemento 'h1' y guardandolo en una constante 'nombreUser'
const nombreUser = document.createElement("h1");
const ciudadUser = document.createElement("h5");
const estadoUser = document.createElement("h5");
const ubicacionUser = document.createElement("h5");
const instrumentosUser = document.createElement("p");
const generosMusicalesUser = document.createElement("p");
//let fotoPerfilUser = document.createElement("img");
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
function cargarInfoUserEnPerfil(post){
  nombreUser.innerHTML = post.name;
  ciudadUser.innerHTML = post.address.city;
  // estadoUser.innerHTML = post.address.estado;
  ubicacionUser.innerHTML = post.address.city;
  instrumentosUser.innerHTML = post.email;
  generosMusicalesUser.innerHTML = post.username;

// Agregar el elementos de la información de usuario
contenedorNombreUser.appendChild(nombreUser);
contenedorUbicacionUser.appendChild(ubicacionUser);
contenedorInstrumentos.appendChild(instrumentosUser);
contenedorGenerosMusicales.appendChild(generosMusicalesUser);
}

// ------------- funcion para tomar los valores del fetch e instanciar un objeto
function instanciarObjetoUser(post){
  // ----------------------   Instanciar un objeto con los valores recibidos de fetch
  objetoUsuarioDelPerfil = new UserCreadoEnRegistro(post.name,post.address.city,post.address.city);  
  //                      Instanciar un objeto desde la clase UserCreadoEnRegistro
  //objetoUsuarioDelPerfil = new UserCreadoEnRegistro('Moises Reyes Orea', 'Guadalajara', 'Jalisco');
  //const objetoUsuarioDelPerfil = new UserCreadoEnRegistro(objetoUsuarioLocalStorage.nombre,objetoUsuarioLocalStorage.ciudad,objetoUsuarioLocalStorage.estado,objetoUsuarioLocalStorage.instrumentosMusicales,objetoUsuarioLocalStorage.generosMusicales);
}

function mostrarDatosObjeto(){
 // objetoUsuarioDelPerfil.mostrarAtributos();
 console.log(objetoUsuarioDelPerfil.nombre);
 console.log(objetoUsuarioDelPerfil.ciudad); 
 console.log(objetoUsuarioDelPerfil.estado); 
 console.log(objetoUsuarioDelPerfil.instrumentosMusicales);
 console.log(objetoUsuarioDelPerfil.generosMusicales);
 //console.log(objetoUsuarioDelPerfil.fotoPerfil);
}

// objetoUsuarioDelPerfil.agregarInstrumento("teclado");



//                            Editando Foto de perfil usuario
//Obtener referencia al input "foto--perfilUser"
const botonAddFotoUser = document.getElementById("botonFotoPerfil");
botonAddFotoUser.addEventListener('click', function(){
   const fotoPerfilUser = document.getElementById("foto--perfilUser");
  //         objetoUsuarioDelPerfil.fotoPerfil = document.getElementById("foto--perfilUser");
   contenedorFotoPerfil.src = URL.createObjectURL(fotoPerfilUser.files[0]);
   // Cerrar el modal utilizando el método de Bootstrap
  const myModal = bootstrap.Modal.getOrCreateInstance('#headerFotoPerfilModal');
  myModal.hide();
});

// Mostrando la información del usuario en los inputs del form editar información
  const iconoEditInfoUser = document.getElementById('iconEdit-infoPerfil');
  iconoEditInfoUser.addEventListener('click',function(){
    const contenedorInputNombre = document.getElementById('nombrePerfil');
    contenedorInputNombre.value = objetoUsuarioDelPerfil.nombre;
    const contenedorInputCiudad = document.getElementById('ciudadPerfil');
    contenedorInputCiudad.value = objetoUsuarioDelPerfil.ciudad;
    const contenedorInputEstado = document.getElementById('estadoPerfil');
    contenedorInputEstado.value = objetoUsuarioDelPerfil.estado;
  });
  

//                            Formulario Edit Información de Usuario en Perfil
//                            Formulario Edit Información de Usuario en Perfil
const consformProfileInfo = document.querySelector('#formProfileInfo'); // Constante que contiene el elemento formulario mediante su ID(formProfileInfo)
consformProfileInfo.addEventListener( 'submit' , function(event) {  // al objeto consformProfileInfo se le agrega un evento de escucha tipo "submit" y ejecuta la funcion anonima siguiente.
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
  for(let i=1; i <= numeroInputsInstrumentos.length; i++){
    const newInstrument = document.getElementById(`input${i}--instrumento`).value;
    console.log(newInstrument);
    objetoUsuarioDelPerfil.instrumentosMusicales[i-1] = newInstrument;
  }
  // Eliminando elementos no deseados en el array 'objetoUsuarioDelPerfil.instrumentosMusicales'
  let tamanoArrayInstrumentos = objetoUsuarioDelPerfil.instrumentosMusicales.length;
  for(let i = numeroInputsInstrumentos.length; i < tamanoArrayInstrumentos; i++){
      objetoUsuarioDelPerfil.instrumentosMusicales.splice(i);
  }

  // Leyendo valores de inputs generosMusicales y guardandolos en el atributo array 'objetoUsuarioDelPerfil.generosMusicales'
  let numeroInputsGenerosMusicales = contenedorInputsGenerosMusicales.children;
  //console.log(numeroInputsGenerosMusicales.length);
  for(let i=1; i <= numeroInputsGenerosMusicales.length; i++){
    const newGeneroMusical = document.getElementById(`input${i}--generoMusical`).value;
    console.log(newGeneroMusical);
    objetoUsuarioDelPerfil.generosMusicales[i-1] = newGeneroMusical; // Modificando los elementos del atributo array 'generosMusicales'
  }
  // Eliminando elementos no deseados en el array 'objetoUsuarioDelPerfil.generosMusicales'
  let tamanoArrayGenerosMusicales = objetoUsuarioDelPerfil.generosMusicales.length;
  for(let i = numeroInputsGenerosMusicales.length; i < tamanoArrayGenerosMusicales; i++){
      objetoUsuarioDelPerfil.generosMusicales.splice(i);
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

  // Cerrar el modal utilizando el método de Bootstrap
  const myModal = bootstrap.Modal.getOrCreateInstance('#profileInfo');
  myModal.hide();
  });

//                  Agregando Inputs en sección instrumentos de modal información personal

// Variable para el total de elementos agregados
let totalInputsIntrumentos = 1;
// Bloque de código que agrega inputs en modal
const buttonAddInputInstruments = document.getElementById("button--AddInstrument");
buttonAddInputInstruments.addEventListener('click', function(event){
  //crear elemento div
  const inputsInstrumentos = document.createElement("div");
  //agregar un input al elemento div
  inputsInstrumentos.innerHTML = `<label>${totalInputsIntrumentos}</label> <input type="text" class="InputsDinamicos"; id="input${totalInputsIntrumentos}--instrumento" name="instrumento[]" placeholder="Añade instrumento" required><button onclick="eliminarInputsInstrumentos(this)" class="btn-deleteInput">Eliminar</button>`;
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
buttonAddInputGeneroMusical.addEventListener('click', function(event){
  //crear elemento div
  const inputsGenerosMusicales = document.createElement("div");
  //agregar un input al elemento div
  inputsGenerosMusicales.innerHTML = `<label>${totalInputsGenerosMusicales}</label> <input type="text" class="InputsDinamicos"; id="input${totalInputsGenerosMusicales}--generoMusical" name="generoMusical[]" placeholder="Añade género musical" required><button onclick="eliminarInputsGenerosMusicales(this)" class="btn-deleteInput">Eliminar</button>`;
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
textUsuarioAcercaDe.addEventListener('submit', function(event1){
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



// Validación en vivo de input Nombre
//validacionEnVivo("nombrePerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Ciudad
//validacionEnVivo("ciudadPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Estado
//validacionEnVivo("estadoPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Instrumentos
//validacionEnVivo("instrumentosPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Género musical
//validacionEnVivo("generoMusicalPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Número de telefono
//validacionEnVivo("numTelefono",  //string del id del input
//  validaTelefonosValidacion);  //callback de una funcion de validacion