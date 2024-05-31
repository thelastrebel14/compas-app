//modelo de objetos del formulario

// const inicioDeSesion = {
//   correo,
//   contraseña,
// };

function redirigirMiEscena(userData) {
  // Guardar userData en localstorage
  const usuarioJSON = JSON.stringify(userData);
  localStorage.setItem("usuario", usuarioJSON);
  window.location.href = "../MiEscena/miEscena.html";
}

const correo = document.getElementById("correoInput");
console.log(correo);
const contraseña = document.getElementById("passwordInput");
console.log(contraseña);
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (correo.value == "" || contraseña.value == "") {
    alert("Por favor llena todos los campos");
  } else {
    // Validar ante la base de datos user y contraseña
    const baseUrl = "http://localhost:8081/api/v1/usuario/authenticate";
    const url = `${baseUrl}?email-user=${encodeURIComponent(
      correo.value
    )}&password-user=${encodeURIComponent(contraseña.value)}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          if (document.querySelector(".alert")) {
            return;
          } else {
            const alerta = document.createElement("div");
            const contenedorAlerta =
              document.getElementById("contenedorAlerta");
            alerta.classList.add("alert", "alert-danger");
            alerta.textContent = "Usuario o contraseña incorrectos.";
            alerta.style.textAlign = "center";
            alerta.focus();
            contenedorAlerta.appendChild(alerta);
          }
          throw new Error(
            "El usuario y/o contraseña no coinciden. " + response.statusText
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("User authenticated:", data);
        redirigirMiEscena(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
});
