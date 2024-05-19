// const acercaDe = document.getElementById('idAcercaDeIcon'); // Constante que contiene el elemento iconEditAcercaDe mediante su ID(idAcercaDeIcon)

// acercaDe.addEventListener( "click" ,() => {  // al objeto acercaDe se le agrega un evento de escucha tipo click y ejecuta la funcion anonima de tipo flecha siguiente
      
//     console.log("Acerca de click");
//   });
// --------------------------------------------------------------------

// Validación en vivo de input Nombre
validacionEnVivo("nombrePerfil",  //string del id del input
validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Ciudad
validacionEnVivo("ciudadPerfil",  //string del id del input
validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Estado
validacionEnVivo("estadoPerfil",  //string del id del input
validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Instrumentos
//validacionEnVivo("instrumentosPerfil",  //string del id del input
//validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Género musical
validacionEnVivo("generoMusicalPerfil",  //string del id del input
validarTexto);  //callback de una funcion de validacion
// Validación en vivo de input Número de telefono
validacionEnVivo("numTelefono",  //string del id del input
  validaTelefonosValidacion);  //callback de una funcion de validacion

//                          Clase de prueba para modificar sus elementos
class UserCreadoEnRegistro {
  instrumentos = ["Guitarra","Bajo","Voz"];
  constructor(nombre, ciudad, estado){
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.estado = estado;
  }
  mostrarAtributos(){
    console.log(this.nombre,this.ciudad,this.estado,this.instrumentos);
  }
  // Método para agregar un instrumento al array
  agregarInstrumento(instrumento) {
    this.instrumentos.push(instrumento);
    console.log(`Instrumento '${instrumento}' agregado a la biblioteca.`);
  }
}
//                      Instanciar un objeto desde la clase UserCreadoEnRegistro
const objetoUsuarioDelPerfil = new UserCreadoEnRegistro('Mario Sandoval Velázquez', 'Tizayuca', 'Hidalgo');
// objetoUsuarioDelPerfil.mostrarAtributos();
 console.log(objetoUsuarioDelPerfil.nombre);
 console.log(objetoUsuarioDelPerfil.ciudad); 
 console.log(objetoUsuarioDelPerfil.estado); 
 console.log(objetoUsuarioDelPerfil.instrumentos);

// objetoUsuarioDelPerfil.agregarInstrumento("teclado");

//                                      Creación de elementos
// Creando un nuevo elemento 'h1' y guardandolo en una constante 'nombreUser'
const nombreUser = document.createElement("h1");
const ubicacionUser = document.createElement("h5");
const instrumentosUser = document.createElement("p");

//                              Obtener referencias de los contenedores
// Obtener referencia al contenedor "nombreUsuario"
const contenedorNombreUser = document.getElementById('contenedor--nombreUsuario');
// Obtener referencia al contenedor "ubicacionUsuario"
const contenedorUbicacionUser = document.getElementById('contenedor--ubicacion');
// Obtener referencia al contenedor "instrumentos"
const contenedorInstrumentos = document.getElementById("contenedor--instrumentos");
// Obtener referencia al contenedor "inputsInstrumentos"
const contenedorInputsIntrumentos = document.getElementById('contenedor--inputsInstrumentos');

//                      Función para cargar información inicial del usuario a su perfil
function cargarInfoUserEnPerfil(){
// Configurando el nuevo elemento, estableciendole atributos, contenido, estilos, etc.
nombreUser.textContent = objetoUsuarioDelPerfil.nombre;
ubicacionUser.textContent = objetoUsuarioDelPerfil.ciudad + ", " + objetoUsuarioDelPerfil.estado;
instrumentosUser.textContent = objetoUsuarioDelPerfil.instrumentos;
// Agregar el nuevo elemento 'nombreUser' al contenedor 'contenedorNombreUser' mediante DOM
contenedorNombreUser.appendChild(nombreUser);
contenedorUbicacionUser.appendChild(ubicacionUser);
contenedorInstrumentos.appendChild(instrumentosUser);
}
cargarInfoUserEnPerfil();

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
  const newInstrument = document.getElementById('input3--instrumento').value;
  console.log(newInstrument);
  //objetoUsuarioDelPerfil.instrumentos = document.getElementById('contenedor--inputsInstrumentos').value;
  objetoUsuarioDelPerfil.agregarInstrumento(newInstrument);
  // for(let i=0; i<= ;i++){
  //   const newInstrument = document.getElementById(`input[${i}]--instrumento`).value;
  //   console.log(newInstrument);
  //   //objetoUsuarioDelPerfil.instrumentos = document.getElementById('contenedor--inputsInstrumentos').value;
  //   objetoUsuarioDelPerfil.agregarInstrumento(newInstrument);
  // }
  console.log(objetoUsuarioDelPerfil.instrumentos);
  // const generoMusical = document.getElementById('generoMusicalPerfil').value;
  // const redes = document.getElementById('redPerfil').value;

  // Manipulación del DOM para informacion del perfil
  // Configurando el nuevo elemento, estableciendole atributos, contenido, etc.
  nombreUser.textContent = objetoUsuarioDelPerfil.nombre;
  ubicacionUser.textContent = objetoUsuarioDelPerfil.ciudad + ", " + objetoUsuarioDelPerfil.estado;
  instrumentosUser.textContent = objetoUsuarioDelPerfil.instrumentos;
  // Agregar el nuevo elemento al contenedor
  contenedorNombreUser.appendChild(nombreUser);
  contenedorUbicacionUser.appendChild(ubicacionUser);
  contenedorInstrumentos.appendChild(instrumentosUser);
  });

  // Funcion test para verificar valores del objeto
  function impr(){
  console.log(objetoUsuarioDelPerfil.nombre);
  console.log(objetoUsuarioDelPerfil.ciudad); 
  console.log(objetoUsuarioDelPerfil.estado);
  console.log(objetoUsuarioDelPerfil.instrumentos);
  }

//                  Agregando Inputs en sección instrumentos de modal información personal

// Variable para el total de elementos agregados
let totalInputsIntrumentos = 1;

const buttonAddInputInstruments = document.getElementById("button--AddInstrument");
buttonAddInputInstruments.addEventListener('click', function(event){
  //crear elemento div
  const inputsInstrumentos = document.createElement("div");
  //agregar un input al elemento div
  inputsInstrumentos.innerHTML = `<label>${totalInputsIntrumentos}</label> <input type="text" id="input${totalInputsIntrumentos++}--instrumento" name="instrumento[]" placeholder="Añade instrumento" required><button onclick="eliminar(this)">Eliminar</button>`;
  //agregar el elemento div a contenedor inputsInstrumentos
  contenedorInputsIntrumentos.appendChild(inputsInstrumentos);
});
// input${totalInputsIntrumentos}
/**
 * Método para eliminar el div contenedor del input
 * @param {this} e 
 */

/** * Método para eliminar el div contenedor del input * @param {this} e */
const eliminar = (e) => {
  const divPadre = e.parentNode;
  contenedorInputsIntrumentos.removeChild(divPadre);
  actualizarContador();
};

// Método para actualizar el contador de los elementos agregados
const actualizarContador = () => {
  let divs = contenedorInputsIntrumentos.children;
  totalInputsIntrumentos = 1;
  for (let i = 0; i < divs.length; i++) {
      divs[i].children[0].innerHTML = totalInputsIntrumentos++;
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