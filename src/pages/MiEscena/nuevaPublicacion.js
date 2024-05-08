
    const formularioFotoVideo = document.querySelector('#formularioFotoVideo');

    formularioFotoVideo.addEventListener('submit', (e) => {
        e.preventDefault();

        const datosTexto = new FormData(document.getElementById('formularioFotoVideo'));
        var publicacionTexto = datosTexto.get('publicacionTexto');

        const datosMultimedia = new FormData(document.getElementById('formularioFotoVideo'));
        var publicacionMultimedia = datosMultimedia.get('publicacionMultimedia');

        var almacenDatosFotoVideo = ('/enviarDatosFotoVideo');

        fetch (almacenDatosFotoVideo, {
            method: 'POST',
            body: formularioFotoVideo
        })

    //     .then(data => data.json())
    //     .then(data => {
    //         if (data.success) {
    //             formularioFotoVideo.textContent = 'Publicación hecha con éxito';
    //         } else {
    //             formularioFotoVideo.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.'
    //         }
    //     })

    //     .catch(error => {
    //         console.error('Error:', error);
    //         formularioFotoVideo.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.';
    //     });

    });



    const formularioArtista = document.querySelector('#formularioArtista');

    formularioArtista.addEventListener('submit', (e) => {
        e.preventDefault();

        const datosTituloPublicacion = new FormData(document.getElementById('formularioArtista'));
        var tituloPublicacion = datosTituloPublicacion.get('tituloPublicacion');

        const datosCuerpoPublicacion = new FormData(document.getElementById('formularioArtista'));
        var cuerpoPublicacion = datosCuerpoPublicacion.get('cuerpoPublicacion');

        const datosArtistaOEscenario = new FormData(document.getElementById('formularioArtista'));
        var artistaOEscenario = datosArtistaOEscenario.get('artistaOEscenario');

        const datosGeneroMusical = new FormData(document.getElementById('formularioArtista'));
        var generoNorteno = datosGeneroMusical.get('generoNorteno');
        var generoCumbia = datosGeneroMusical.get('generoCumbia');
        var generoSalsa = datosGeneroMusical.get('generoSalsa');
        var generoMariachi = datosGeneroMusical.get('generoMariachi');

        const datosInstrumentoMusical = new FormData(document.getElementById('formularioArtista'));
        var instrumentoGuitarra = datosInstrumentoMusical.get('instrumentoGuitarra');
        var instrumentoAcordeon = datosInstrumentoMusical.get('instrumentoAcordeon');
        var instrumentoBateria = datosInstrumentoMusical.get('instrumentoBateria');
        var instrumentoSintetizador = datosInstrumentoMusical.get('instrumentoSintetizador');

        const datosCodigoPostal = new FormData(document.getElementById('formularioArtista'));
        var codigoPostal = datosCodigoPostal.get('codigoPostal');

        const datosCiudadOMunicipio = new FormData(document.getElementById('formularioArtista'));
        var ciudadOMunicipio = datosCiudadOMunicipio.get('ciudadOMunicipio');

        const datosEntidadFederativa = new FormData(document.getElementById('formularioArtista'));
        var entidadFederativa = datosEntidadFederativa.get('entidadFederativa');

        const datosArtistaMultimedia = new FormData(document.getElementById('formularioArtista'));
        var artistaMultimedia = datosArtistaMultimedia.get('artistaMultimedia');

        var almacenDatosArtista = ('/enviarDatosArtista');

        fetch (almacenDatosArtista, {
            method: 'POST',
            body: formularioArtista
        })

        // .then(data => data.json())
        // .then(data => {
        //     if (data.success) {
        //         formularioArtista.textContent = 'Publicación realizada con éxito';
        //     } else {
        //         formularioArtista.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.'
        //     }
        // })

        // .catch(error => {
        //     console.error('Error:', error);
        //     formularioArtista.textContent = 'Error al crear la publicación. Por favor inténtalo de nuevo.';
        // });

    });