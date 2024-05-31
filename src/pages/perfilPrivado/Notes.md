
//setTimeout(funcionAejecutarse, 1500);

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








// fetch(urlPost, {
  //   method: "PUT", // PUT / POST
  //   headers: {
  //     "Content-Type": ""
  //   },
    
  //   // Definir el body que debe coincidir con mi API, para ello le paso un método stringify que permite transformar el objeto en formato JSON
  //   body: {
  //     "foto_portada": formDataImg
  //   }
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     // Mostrar mensaje de éxito o error al usuario
  //     if (response.success) {
  //       console.log("Datos enviados con éxito");
  //     }
  //     else {
  //       console.log("Error");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //     console.log("Error al actualizar los datos");
  //   });




  //   --- function cargarInfoUserEnPerfil(post){  *NOTE: lo siguiente estba dentro de la funcion cargarInfoUserEnPerfil(post)


  // Configurando el nuevo elemento, estableciendole atributos, contenido, estilos, etc.
//---------------Comendtado por test
// // nombreUser.textContent = objetoUsuarioDelPerfil.nombre;
// // ubicacionUser.textContent = objetoUsuarioDelPerfil.ciudad + ", " + objetoUsuarioDelPerfil.estado;
// // instrumentosUser.textContent = objetoUsuarioDelPerfil.instrumentosMusicales;
// // generosMusicalesUser.textContent = objetoUsuarioDelPerfil.generosMusicales;
//---------------- comentado por test
//fotoPerfilUser.src = "./img/fotoPerfil.png";
    //Establecer atributos adicionales si es necesario
    //fotoPerfilUser.alt = 'Foto Perfil de Usuario';
    //fotoPerfilUser.width = 250; // Puedes ajustar el ancho y alto según sea necesario

    // }




//  ------------   Para agregar imagenes de perfil dinamicamente esperimento 1
    // const imgPerfil = document.createElement("img");
// imgPerfil.src = "./img/Moises1.jpg";
// contenedorFotoPerfil.src = imgPerfil.src;