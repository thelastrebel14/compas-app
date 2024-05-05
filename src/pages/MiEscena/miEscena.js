//import publicaciones from "./mockDataMiEscena"; // publicaciones tiene los datos de prueba para las publicaciones

const formulario = document.getElementById('miEscena');
const mensaje = document.getElementById('publicacion-comment');

// --------- agregar comentarios --------------
mensaje.addEventListener("change", (event) => {
    event.preventDefault();
    // const like = document.getElementById().value;
    // const share = document.getElementById().value
    // const colaborate = document.getElementById().value;
    // const comment = document.getElementById().value;
    
    // agarramos el elemento que contendra los comentarios
    const comentariosDisplay = document.getElementById("comentariosDisplay");


    // obtiene el texto del comentario
    let comentarioText = event.target.value;

    //crea el elemento del comentario y le agrega el texto
    let comentarioP = document.createElement("p");
    comentarioP.textContent = comentarioText;

    // inserta el comentario en el contenedor
    comentariosDisplay.appendChild(comentarioP);

    //vacia el contenido del area de comentarios
    mensaje.value = "";



    // Enviar los datos del formulario al servidor usando fetch
    fetch('/enviarSolicitudDeCoraboracion', {
        method: 'POST',
        headers: {
            'Content-Type': 'miEscenaColaborar/json',
            'Content-Type' : 'miEscenacompartir/json',
            'Content-Type' : 'miEscenaMegusta/json',
            'Content-Type' : 'miEscenaComentarios.json'
        },  
        body: JSON.stringify(
            colaborar ={
                idAutor : 1,
                idComentario : 1,
                idDestinatario : 1,
                mensaje : "Este es un mensaje",
            },
            compartir ={
                idPublicacion : 1,
                idAutor : 1,
            
            },
            reaccionar ={
                idPublicacion : 1,
                idAutor : 1,
            
            },
            comentarPublicacion ={
                idAutor : 1,
                idComentario : 1,
                idPublicacion : 1,
                comentario : "Este es un comentario",
                })
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar mensaje de éxito o error al usuario
            if (data.success) {
                mensaje.textContent = '¡Mensaje enviado con éxito!';
            } else {
                mensaje.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            mensaje.textContent = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.';
        });
    });

// ------- contador de Me entona ---------

// selecciona los elementos que se usaran
const meEntonaBoton = document.getElementById("meEntonaBoton");
const contadorMeEntona = document.getElementById("contadorMeEntona");

// inicializar las variables
let contador = 0;
//determinar si la persona puede o no dar like (default: si puede)
let puedeDarMeEntona = true;

//espera un evento para dar like
meEntonaBoton.addEventListener("click", (event) => {
    //checa si la persona puede dar like
    if(puedeDarMeEntona){
        contador++;
        puedeDarMeEntona = false;
    }
    else{
        contador--;
        puedeDarMeEntona = true;
    }

    // agrega el contador de likes
    contadorMeEntona.textContent = contador;
    
    if (contadorMeEntona.textContent == "0"){
        contadorMeEntona.textContent = "";
    }
    

    meEntonaBoton.parentElement.append(contadorDisplay)
});

/* Agrega una función que haga lo siguiente:
    Se ejecute al cargar la página mi escena
    Busque los datos de publicaciones (En este caso sería lo de la variable publicaciones pero después lo moveríamos a un fetch de tipo GET)
    Una vez obtenidas las publicaciones, iterar cada publicación con el método .map, por cada elemento, crear un elemento de publicación (La plantilla que creaste en html) usando los datos de cada elemento.
    Insertar los elementos en un div con id contenedor-publicaciones (Revisa InnerHTML)
    Puedes usar localStorage o fetch para buscar publicaciones (Esto se entrega)
*/
document.addEventListener('DOMContentLoaded', async () => {
    try{
        // Obtener las publicaciones
        const response = await fetch("./mockDataMiEscena");
        const publicaciones = await response.json();
        console.log(publicaciones)
        
    }
    catch (error){
        console.log(error);
    }
})
/*
    Agregar una función que haga lo siguiente:
    Se ejecute al hacer click en el botón de guardar dentro del modal de foto/video
    Tome los datos del formulario de manera correcta
    Usar localStorage o fetch para crear publicaciones (Esto se entrega)
*/


/*
    Agregar una función que haga lo siguiente:
    Se ejecute al hacer click en el botón de guardar dentro del modal de busco artistas escenarios
    Tome los datos del formulario de manera correcta
    Usar localStorage o fetch para crear publicaciones (Esto se entrega)
*/

// IMPORTANTE: Definan si usar localStorage o fetch en todas las funciones, sería uno o el otro en todas las funciones.
// El ejemplo de fetch ya lo tienen, es modificar el method a GET o POST según corresponda, apóyense de documentación.

