const publicaciones = [
    {
        "idPublicacion": 1,
        "idAutor": 101,
        "nombreAutor": "John Lennon",
        "instrumentosAutor": ['Guitarra', 'Piano', 'Voz'],
        "avatarAutor": "URL_AVATAR_1",
        "titulo": "¡Nuevo álbum en camino!",
        "tipoPublicacion": "multimedia",
        "descripcion": "Estoy emocionado de compartirles que estoy trabajando en un nuevo álbum. ¡Espero que les guste!",
        "archivoMultimedia": "URL_PORTADA_ALBUM",
        "createdAt": "2024-04-30T12:00:00Z"
    },
    {
        "idPublicacion": 2,
        "idAutor": 102,
        "nombreAutor": "Taylor Swift",
        "instrumentosAutor": ['Voz', 'Guitarra acústica', 'Piano'],
        "avatarAutor": "URL_AVATAR_2",
        "titulo": "¡Concierto en vivo esta noche!",
        "tipoPublicacion": "multimedia",
        "descripcion": "No se pierdan mi concierto en vivo esta noche a las 8pm. ¡Prepárense para una noche llena de música y diversión!",
        "archivoMultimedia": "URL_FOTO_CONCIERTO",
        "createdAt": "2024-04-30T14:00:00Z"
    },
    {
        "idPublicacion": 3,
        "idAutor": 103,
        "nombreAutor": "Ed Sheeran",
        "instrumentosAutor": ['Guitarra', 'Voz', 'Loop Station'],
        "avatarAutor": "URL_AVATAR_3",
        "titulo": "Nueva canción disponible",
        "tipoPublicacion": "texto",
        "descripcion": "Mi nueva canción 'Shape of You' ya está disponible en todas las plataformas. ¡Espero que la disfruten!",
        "createdAt": "2024-04-30T16:30:00Z"
    },
    {
        "idPublicacion": 4,
        "idAutor": 104,
        "nombreAutor": "Ariana Grande",
        "instrumentosAutor": ['Voz', 'Baile'],
        "avatarAutor": "URL_AVATAR_4",
        "titulo": "Feliz de colaborar con...",
        "tipoPublicacion": "texto",
        "descripcion": "Estoy emocionada de anunciar mi colaboración con otro artista. Pronto les daré más detalles, ¡estén atentos!",
        "createdAt": "2024-04-30T18:45:00Z"
    },
    {
        "idPublicacion": 5,
        "idAutor": 105,
        "nombreAutor": "Bruno Mars",
        "instrumentosAutor": ['Voz', 'Batería', 'Teclado'],
        "avatarAutor": "URL_AVATAR_5",
        "titulo": "¡Gira mundial anunciada!",
        "tipoPublicacion": "multimedia",
        "descripcion": "Estoy emocionado de anunciar mi próxima gira mundial. Visiten mi sitio web para conocer las fechas y lugares.",
        "archivoMultimedia": "URL_FOTO_GIRA",
        "createdAt": "2024-04-30T20:20:00Z"
    },
    {
        "idPublicacion": 6,
        "idAutor": 106,
        "nombreAutor": "Shakira",
        "instrumentosAutor": ['Voz', 'Guitarra', 'Bailar'],
        "avatarAutor": "URL_AVATAR_6",
        "titulo": "¡Nuevo videoclip!",
        "tipoPublicacion": "multimedia",
        "descripcion": "Acabo de lanzar mi nuevo videoclip. ¡No se lo pierdan!",
        "archivoMultimedia": "URL_VIDEOPUBLICACION",
        "createdAt": "2024-04-30T22:10:00Z"
    },
    {
        "idPublicacion": 7,
        "idAutor": 107,
        "nombreAutor": "Justin Bieber",
        "instrumentosAutor": ['Voz', 'Guitarra', 'Piano'],
        "avatarAutor": "URL_AVATAR_7",
        "titulo": "Agradecido por el apoyo de mis fans",
        "tipoPublicacion": "texto",
        "descripcion": "Quiero expresar mi gratitud a todos mis fans por su increíble apoyo. Ustedes son los mejores.",
        "createdAt": "2024-04-30T23:30:00Z"
    },
    {
        "idPublicacion": 8,
        "idAutor": 108,
        "nombreAutor": "Beyoncé",
        "instrumentosAutor": ['Voz', 'Baile', 'Piano'],
        "avatarAutor": "URL_AVATAR_8",
        "titulo": "Detrás de cámaras de mi último videoclip",
        "tipoPublicacion": "multimedia",
        "descripcion": "Comparto con ustedes un vistazo detrás de cámaras de la filmación de mi último videoclip. ¡Espero que les guste!",
        "archivoMultimedia": "URL_FOTO_BTS",
        "createdAt": "2024-05-01T02:00:00Z"
    },
    {
        "idPublicacion": 9,
        "idAutor": 109,
        "nombreAutor": "Drake",
        "instrumentosAutor": ['Voz', 'Rap', 'Teclado'],
        "avatarAutor": "URL_AVATAR_9",
        "titulo": "Nuevo éxito en las listas de éxitos",
        "tipoPublicacion": "texto",
        "descripcion": "Mi última canción ha llegado al número 1 en las listas de éxitos. ¡Gracias a todos por su apoyo!",
        "createdAt": "2024-05-01T04:30:00Z"
    },
    {
        "idPublicacion": 10,
        "idAutor": 110,
        "nombreAutor": "Katy Perry",
        "instrumentosAutor": ['Voz', 'Guitarra', 'Bajo'],
        "avatarAutor": "URL_AVATAR_10",
        "titulo": "Nuevo sencillo disponible",
        "tipoPublicacion": "texto",
        "descripcion": "Mi nuevo sencillo 'Roar' ya está disponible para escuchar en todas las plataformas. ¡Espero que les guste!",
        "createdAt": "2024-05-01T06:15:00Z"
    }
];

const nuevaPublicacion = [
    {
        "textoPublicacion": "1",
        "archivoMultimedia": 1
    },
    {
        "tituloPublicacion": "1",
        "textoPublicacion": "1",
        "tipoDeBusqueda": 1,
        "generoMusical": 1,
        "instrumentos": 1,
        "codigoPostal": 1,
        "ciudadOMunicipio": "1",
        "entidadFederativa": "1",
        "imagen": 1
    },

    {
        "textoPublicacion": "2",
        "archivoMultimedia": 2
    },
    {
        "tituloPublicacion": "2",
        "textoPublicacion": "2",
        "tipoDeBusqueda": 2,
        "generoMusical": 2,
        "instrumentos": 2,
        "codigoPostal": 2,
        "ciudadOMunicipio": "2",
        "entidadFederativa": "2",
        "imagen": 2
    },

    {
        "textoPublicacion": "3",
        "archivoMultimedia": 3
    },
    {
        "tituloPublicacion": "3",
        "textoPublicacion": "3",
        "tipoDeBusqueda": 3,
        "generoMusical": 3,
        "instrumentos": 3,
        "codigoPostal": 3,
        "ciudadOMunicipio": "3",
        "entidadFederativa": "3",
        "imagen": 3
    },

    {
        "textoPublicacion": "4",
        "archivoMultimedia": 4
    },
    {
        "tituloPublicacion": "4",
        "textoPublicacion": "4",
        "tipoDeBusqueda": 4,
        "generoMusical": 4,
        "instrumentos": 4,
        "codigoPostal": 4,
        "ciudadOMunicipio": "4",
        "entidadFederativa": "4",
        "imagen": 4
    },

    {
        "textoPublicacion": "5",
        "archivoMultimedia": 5
    },
    {
        "tituloPublicacion": "5",
        "textoPublicacion": "5",
        "tipoDeBusqueda": 5,
        "generoMusical": 5,
        "instrumentos": 5,
        "codigoPostal": 5,
        "ciudadOMunicipio": "5",
        "entidadFederativa": "5",
        "imagen": 5
    },

    {
        "textoPublicacion": "6",
        "archivoMultimedia": 6
    },
    {
        "tituloPublicacion": "6",
        "textoPublicacion": "6",
        "tipoDeBusqueda": 6,
        "generoMusical": 6,
        "instrumentos": 6,
        "codigoPostal": 6,
        "ciudadOMunicipio": "6",
        "entidadFederativa": "6",
        "imagen": 6
    },

    {
        "textoPublicacion": "7",
        "archivoMultimedia": 7
    },
    {
        "tituloPublicacion": "7",
        "textoPublicacion": "7",
        "tipoDeBusqueda": 7,
        "generoMusical": 7,
        "instrumentos": 7,
        "codigoPostal": 7,
        "ciudadOMunicipio": "7",
        "entidadFederativa": "7",
        "imagen": 7
    },

    {
        "textoPublicacion": "8",
        "archivoMultimedia": 8
    },
    {
        "tituloPublicacion": "8",
        "textoPublicacion": "8",
        "tipoDeBusqueda": 8,
        "generoMusical": 8,
        "instrumentos": 8,
        "codigoPostal": 8,
        "ciudadOMunicipio": "8",
        "entidadFederativa": "8",
        "imagen": 8
    },

    {
        "textoPublicacion": "9",
        "archivoMultimedia": 9
    },
    {
        "tituloPublicacion": "9",
        "textoPublicacion": "9",
        "tipoDeBusqueda": 9,
        "generoMusical": 9,
        "instrumentos": 9,
        "codigoPostal": 9,
        "ciudadOMunicipio": "9",
        "entidadFederativa": "9",
        "imagen": 9
    },

    {
        "textoPublicacion": "10",
        "archivoMultimedia": 10
    },
    {
        "tituloPublicacion": "10",
        "textoPublicacion": "10",
        "tipoDeBusqueda": 10,
        "generoMusical": 10,
        "instrumentos": 10,
        "codigoPostal": 10,
        "ciudadOMunicipio": "10",
        "entidadFederativa": "10",
        "imagen": 10
    }
]
