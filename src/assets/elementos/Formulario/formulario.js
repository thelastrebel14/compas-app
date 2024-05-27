import { validacionEnVivo} from "../../utils/validacionEnVivo.js";
import { validarTexto } from "../../utils/validarTexto.js";
import { validaTelefonosValidacion } from "../../utils/validacionTelefono.js";
import { validarEmail } from "../../utils/validacionEmail.js";

validacionEnVivo("nombre",validarTexto,true);
validacionEnVivo("phoneNum",validaTelefonosValidacion);
validacionEnVivo("e-mail",validarEmail);

const SERVICE_ID = "service_z13d2ji";
const TEMPLATE_ID = "template_3t72cft";
const USER_ID = "LDVp-nlyB1itJ-y4n";

emailjs.init(USER_ID);

class Contactanos 
{
    constructor(nombre, telefono, email, mensaje) 
    {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.mensaje = mensaje;
    }
}

const btnEnviar = document.getElementById("enviar");

btnEnviar.addEventListener("click", (evento) => 
{
    evento.preventDefault();
    validarFormulario();
});

const inputs = document.querySelectorAll("#formulario input, #formulario textarea");
inputs.forEach(input => 
{
    input.addEventListener("input", () => 
    {
        if (document.querySelector(".alert")) 
        {
            if (todosLosCamposLlenos()) 
            {
                eliminarAlerta();
            }
        }
    });
});

function validarFormulario() 
{
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("phoneNum").value;
    const email = document.getElementById("e-mail").value;
    const mensaje = document.getElementById("text").value;

    const nombreValido = validarTexto(nombre);
    const telefonoValido = validaTelefonosValidacion(telefono);
    const emailValido = validarEmail(email);

    if (nombreValido && telefonoValido && emailValido && mensaje.trim() !== "") 
    {
        const contacto = new Contactanos(nombre.trim(), telefono.trim(), email.trim(), mensaje.trim());
        enviarCorreo(contacto);
    } else 
    {
        mostrarAlerta();
    }
}

function todosLosCamposLlenos() 
{
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("phoneNum").value;
    const email = document.getElementById("e-mail").value;
    const mensaje = document.getElementById("text").value;
    return nombre.trim() !== "" && telefono.trim() !== "" && email.trim() !== "" && mensaje.trim() !== "";
}

function mostrarAlerta() 
{
    eliminarAlerta();
    const alerta = document.createElement("div");
    const containerAlert = document.getElementById("alerta");
    alerta.classList.add("alert", "alert-danger");
    alerta.textContent = "Completa los campos";
    alerta.style.textAlign = "center";
    alerta.focus();
    containerAlert.appendChild(alerta);
}

function eliminarAlerta() 
{
    const alerta = document.querySelector(".alert");
    if (alerta) 
    {
        alerta.remove();
    }
}

function enviarCorreo(contacto) 
{
    emailjs.send(SERVICE_ID, TEMPLATE_ID, 
    {
        nombre: contacto.nombre,
        telefono: contacto.telefono,
        email: contacto.email,
        mensaje: contacto.mensaje
    }).then(function(response) 
    {
        console.log("SUCCESS!", response.status, response.text);
        mostrarAlertaExito();
    });
}

function mostrarAlertaExito() 
{
    eliminarAlerta();
    const alerta = document.createElement("div");
    const containerAlert = document.getElementById("alerta");
    alerta.classList.add("alert", "alert-success");
    alerta.textContent = "Mensaje enviado con éxito";
    alerta.style.textAlign = "center";
    containerAlert.appendChild(alerta);
}

