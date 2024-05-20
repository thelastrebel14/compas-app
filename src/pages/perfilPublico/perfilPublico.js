const editarPerfil = {
    idUsuario,
    nombre, 
    ubicacion,
    instrumentos:[""],
    generos:[""],
    redes:[""],
    acercaDe,
}

const demos = {
    idUsuario,
    titulo,
    link,
    descripcion //límite de caracteres.
}

const escenarios = [
    {
        idUsuario,
        idEscenario,
        tipoNegocio,
        nombreDelLugar,
        ubicacion,
        capacidad,
        descripcion,
        urlImagen
    }    
]

const editarPublicacion ={
    idPublicacion,
    idUsuario,
    tipoPublicacion, // Tipo texto/ multimedia || Tipo se busca
    descripcionPublicacion,
    urlArchivo //Opcional
}

//Esto va en la sección del perfil público
const resenas = [
    {
        idUsuario,
        idUsuarioAutor,
        idResena,
        resena,
        urlUsuarioAutor,
    }
]



 
    

 
