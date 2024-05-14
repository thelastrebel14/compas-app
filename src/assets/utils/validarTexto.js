
function validarTexto(texto) {
  
    // Eliminar espacios en blanco antes y después del texto
      texto = texto.trim();
  
    // Verificar que la casilla no se deje vacía
      if (texto == "" || texto == null) {
        return false;
      }
  
    // Verificar que el tipo de dato sea una cadena de texto
      if(typeof(texto)!=='string') {
          return false;
      }
      
    // Veficar que los caracteres utilizados sean letras según la tabla ASCII  
      for(var i=0;i<texto.length;i++) {
            if(texto.charCodeAt(i) >= 65 && 
            texto.charCodeAt(i) <= 90 && 
            texto.charCodeAt(i) >= 97 &&
            texto.charCodeAt(i) <= 122) {
            }
          }
    
    // Se trata de un texto sin otros caracteres
    return true;
  
  }

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

validacionEnVIvo ("validacionFotoVideo01", validarTexto);














// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()