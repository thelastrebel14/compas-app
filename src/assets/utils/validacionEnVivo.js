// funccion para validar campos en vivo
export function validacionEnVivo(inputId, callback, evitaEscrituraInvalida = false) {
  let input = document.getElementById(inputId);

  input.oninput = () => {
    let v = input.value;
    let isValid = callback(v);

    if (inputId === "inputPassword") {
      let confirmarPassword = document.getElementById("inputPasswordConfirm");
      if (confirmarPassword.value !== "") {
        if (validaCoincidenciaContrasena(confirmarPassword.value)) {
          confirmarPassword.classList.remove("is-invalid");
          confirmarPassword.classList.add("is-valid");
        } else {
          confirmarPassword.classList.remove("is-valid");
          confirmarPassword.classList.add("is-invalid");
          if (evitaEscrituraInvalida) {
            confirmarPassword.value = v.slice(0, -1); // Si el caracter no es válido, lo elimina del campo
          }
        }
      }
    }

    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      if (evitaEscrituraInvalida) {
        input.value = v.slice(0, -1); // Si el caracter no es válido, lo elimina del campo
      }
    }
  };
}

/*
 Ejemplo de uso 
 validacionEnVivo("inputPassword",  //string del id del input
 validaContraseña);  //callback de una funcion de validacion
                
*/
