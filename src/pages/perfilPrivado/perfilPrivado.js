function Test() { 
    console.log("hola");
}

//---------------------------------------------------------------------
// const acercaDe = document.getElementById('idAcercaDeIcon'); // Constante que contiene el elemento iconEditAcercaDe mediante su ID(idAcercaDeIcon)

// acercaDe.addEventListener( "click" ,() => {  // al objeto acercaDe se le agrega un evento de escucha tipo click y ejecuta la funcion anonima de tipo flecha siguiente
      
//     console.log("Acerca de click");
//   });

// --------------------------------------------------------------------

const consformProfileInfo = document.querySelector('#formProfileInfo'); // Constante que contiene el elemento formulario mediante su ID(formProfileInfo)

consformProfileInfo.addEventListener( 'submit' , function(event) {  // al objeto consformProfileInfo se le agrega un evento de escucha tipo "submit" y ejecuta la funcion anonima siguiente.
  event.preventDefault();
  const nombre = document.getElementById('nombrePerfil').value;
  const ciudad = document.getElementById('ciudadPerfil').value
  const estado = document.getElementById('estadoPerfil').value;
  const instrumento = document.getElementById('instrumentosPerfil').value;
  const generoMusical = document.getElementById('generoMusicalPerfil').value;
  const redes = document.getElementById('redPerfil').value;
  const numeroTelefono = document.getElementById('numTelefono').value;
  console.log(nombre);
  console.log(ciudad);
  console.log(estado);
  console.log(instrumento);
  console.log(generoMusical);
  console.log(redes);
  let numeroValidado = validaTelefonosValidacion(numeroTelefono);
  console.log(numeroValidado);
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