  // JSON Crear publicacion 
const crearPublicacion ={
    idPublicacion : 1,
    idAutor : 2,
    titulo : "Título de la Publicación",
    tipoContenido: "multimedia",
    createdAt: "2024-04-30T12:00:00Z",
}

const crearPublicacionTextoMultimediaFomulario = {
    textoPublicacion: String, // texto
    archivoMultimedia: archivo,// Opcional, puede no mandar ni foto ni video
}

const crearPublicacionBusquedaArtistasOEscenarios = {
    tituloPublicacion: String,
    textoPublicacion: String,
    tipoDeBusqueda, // Radiobutton: Artista o Escenario
    géneroMusical, // Checkbox con opciones de géneros musicales
    instrumentos, // Checkbox con opciones de instrumentos
    codigoPostal, // numero
    municipio, // texto
    estado, // texto
    imagen // Opcional
}

// JSON Crear comentario
const comentarPublicacion ={
    idAutor : 1,
    idComentario : 1,
    idPublicacion : 1,
    comentario : "Este es un comentario",
}

 // Reaccionar a Publicacion

const reaccionar ={
    idPublicacion : 1,
    idAutor : 1,

}

  // Reaccionar a Publicacion

const compartir ={
    idPublicacion : 1,
    idAutor : 1,

}


// JSON colaborar 
const colaborar ={
    idAutor : 1,
    idComentario : 1,
    idDestinatario : 1,
    mensaje : "Este es un mensaje",
}
