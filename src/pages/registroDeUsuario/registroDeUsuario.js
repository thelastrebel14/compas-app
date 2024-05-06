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


//selecion de elementos del documento
const radioSoyMusico = document.getElementById("soyMusico")
const radioSoyEscenario = document.getElementById("soyEscenario")
const musicoInputs = document.getElementById("musicoInputs")
const escenarioInputs = document.getElementById("escenarioInputs")

//funcionalidad dinamica para los radio buttons
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


const cp = () => {
    rellenoCodigoPostal()
}
async function rellenoCodigoPostal(){
    try{
        const codigoPostal = document.getElementById("inputCP").value
        const response = await fetch(`https://api.copomex.com/query/info_cp/${codigoPostal}?token=4d481f50-19e7-4e38-8d07-870975872307`);
        if (!response.ok) {
            throw new Error("No se encontro")
        }

        const data = await response.json();
        const opcionEstado = document.getElementById("inputEstado")
        const opcionMunicipio = document.getElementById("inputCiudad")
        
        data.forEach(element => {
            let nuevaOpcionEstado = document.createElement("option")
            let nuevaOpcionMunicipio = document.createElement("option")
            nuevaOpcionEstado.textContent = element.response.estado
            nuevaOpcionMunicipio.textContent = element.response.municipio
            opcionEstado.appendChild(nuevaOpcionEstado)
            opcionMunicipio.appendChild(nuevaOpcionMunicipio)
        });
    }
    catch(error){
        console.error(error)
    }
    
}
