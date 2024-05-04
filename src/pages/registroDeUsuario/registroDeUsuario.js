//modelo de objetos del formulario

// const registroDeUsuario = {
//     datos: {
//         nombre,
//         edad,
//         genero,
//         contraseña
//     },
//     localizacion:{
//         estado,
//         cuidad,
//         coodigoPostal
//     },
//     tipoUsuario:{
//         isMusico,
//         instrumentosMusicales,
//         generosMusicales,

//         isEscenario,
//         tipoDeEscenario
//     }
// }

const radioSoyMusico = document.getElementById("soyMusico")
const radioSoyEscenario = document.getElementById("soyEscenario")
const musicoInputs = document.getElementById("musicoInputs")
const escenarioInputs = document.getElementById("escenarioInputs")

console.log(radioSoyEscenario.checked);

radioSoyEscenario.addEventListener("click", mostrarInputs = () => {
    if (radioSoyEscenario.checked) {
        escenarioInputs.hidden = false
        musicoInputs.hidden = true
    }
})

radioSoyMusico.addEventListener("click", mostrarInputs = () => {
    if (radioSoyMusico.checked) {
        musicoInputs.hidden = false
        escenarioInputs.hidden = true
    }
})




