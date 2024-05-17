//modelo de objetos del formulario

// const inicioDeSesion = {
//   correo,
//   contraseña,
// };

function redirigirMiEscena() {
  window.location.href = "../MiEscena/miEscena.html";
}

const correo = document.getElementById("correoInput");
console.log(correo);
const contraseña = document.getElementById("passwordInput");
console.log(contraseña);
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (correo.value == "" && contraseña.value == "") {
    alert("Por favor llena todos los campos");
  } else {
    if (
      correo.value === localStorage.getItem("usuario") &&
      contraseña.value === localStorage.getItem("contraseña")
    ) {
      redirigirMiEscena();
    } else {
      if (document.querySelector(".alert")) {
        return;
      } else {
        const alerta = document.createElement("div");
        const contenedorAlerta = document.getElementById("contenedorAlerta");
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "Usuario o contraseña incorrectos.";
        alerta.style.textAlign = "center";
        alerta.focus();
        contenedorAlerta.appendChild(alerta);
      }
    }
  }
});
