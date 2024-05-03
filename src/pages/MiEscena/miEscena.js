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