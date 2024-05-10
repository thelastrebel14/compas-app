// funccion para validar campos en vivo
function validacionEnVivo(inputId, callback) {
  // recibe el id del input a validar y una funcion que returna true o false
  let input = document.getElementById(inputId); // guarda el input dado el id
  input.oninput = () => {
    // cada cambio que se realiza en el input pasara por la siguiente funcion
    let v = input.value; // guarda el valor de lo que se escribe en el input
    callback(v); // ejecuta la funcion de validacion

    // usando clases de bootstrap para validacion
    if (callback(v)) {
      input.classList.remove("is-invalid"); // se remueve la clase invalid
      input.classList.add("is-valid"); // se añade la clase valid
    } else {
      input.classList.remove("is-valid"); // se remueve la clase valid
      input.classList.add("is-invalid"); // se añade la clase invalid
    }
  };
}

/*
 Ejemplo de uso 
 validacionEnVivo("inputPassword",  //string del id del input
 validaContraseña);  //callback de una funcion de validacion
                
*/
