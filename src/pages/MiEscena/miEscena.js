import publicaciones from "./mockDataMiEscena"; // publicaciones tiene los datos de prueba para las publicaciones

const Co = document.getElementById('miEscena');
    const mensaje = document.getElementById('comment');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const like = document.getElementById().value;
        const share = document.getElementById().value
        const colaborate = document.getElementById().value;
        const comment = document.getElementById().value;

        // Enviar los datos del formulario al servidor usando fetch
        fetch('/enviarSolicitudDeCoraboracion', {
            method: 'POST',
            headers: {
                'Content-Type': 'miEscenaColaborar/json'
                'Content-Type' : 'miEscenacompartir/json'
                'Content-Type' : 'miEscenaMegusta/json'
                'Content-Type' : 'miEscenaComentarios.json'
            },  
            body: JSON.stringify(
                colaborar ={
                    idAutor : 1,
                    idComentario : 1,
                    idDestinatario : 1,
                    mensaje : "Este es un mensaje",
                }
                compartir ={
                    idPublicacion : 1,
                    idAutor : 1,
                
                }
                reaccionar ={
                    idPublicacion : 1,
                    idAutor : 1,
                
                }
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

/* Agrega una función que haga lo siguiente:
    Se ejecute al cargar la página mi escena
    Busque los datos de publicaciones (En este caso sería lo de la variable publicaciones pero después lo moveríamos a un fetch de tipo GET)
    Una vez obtenidas las publicaciones, iterar cada publicación con el método .map, por cada elemento, crear un elemento de publicación (La plantilla que creaste en html) usando los datos de cada elemento.
    Insertar los elementos en un div con id contenedor-publicaciones (Revisa InnerHTML)
    Puedes usar localStorage o fetch para buscar publicaciones (Esto se entrega)
*/

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

