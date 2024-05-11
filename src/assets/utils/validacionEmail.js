const contenidoEmail = document.getElementById("submitButton");
const errorEmail = document.getElementById("error--email");
function validarEmail()
{
    if (!contenidoEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
    {
        errorEmail.innerHTML = "Por favor introduzca un correo valido";
        errorEmail.style.color = "red";
        contenidoEmail.focus.style.borderColor = "red";
        return false;
    }
    errorEmail.innerHTML = "";
    contenidoEmail.style.borderColor = "green";
    return true;
}