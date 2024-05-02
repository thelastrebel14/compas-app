//modelo de objetos del formulario

const inicioDeSesion = {
    correo,
    contraseña,
}

const email = document.getElementById("correoInput");
const password = document.getElementById("passwordInput");
const submit = document.getElementById("submitButton");

function iniciarSesion(){
    submit.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "lightgreen"
    })
}


