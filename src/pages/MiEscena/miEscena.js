import publicaciones from "./mockDataMiEscena"; // publicaciones tiene los datos de prueba para las publicaciones

const Co = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const phone = document.getElementById('Numero de telefono').value
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        // Enviar los datos del formulario al servidor usando fetch
        fetch('/enviarSolicitudDeContacto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                phone: phone,
                correo: correo,
                mensaje: mensaje
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