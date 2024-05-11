/** 
 * Validación de teléfonos (Moises)
 * 
 * Validaciones a considerar: 
 * - Limpiar string de espacios en blanco al inicio y al final (Done)
 * - Lada de tres caracteres (Pendiente, agregar menú desplegable con ladas)
 *      ( https://contigosinfronteras.org/wp-content/uploads/2020/02/tabla_ladas.pdf )
 * - Numero de teléfono MAX 10 caracteres (Done)
 * - Sólo números enteros y positivos (Done)
 * 
  // validaNombreValidación() <- Convención para nombrar variables. Usar prefijo valida
*/

function validaTelefonosValidacion(numeroTelefono){
    let numeroTelefonoValidado = numeroTelefono.split(" ").join(""); // Elimina los espacios
    // Expresión regular para validar números de teléfono
    // \d: Este es un metacarácter Equivale a [0-9].
    // {10}: Indica que el número de teléfono debe tener 10 dígitos, ni más ni menos.
    var patron = /^\d{10}$/; 
    //El Método test(): verificar si una cadena coincide con un patrón específico.
    if (patron.test(numeroTelefonoValidado)) {  
      //return true; // Válido
      return numeroTelefonoValidado;
    } else {
      //return false; // No válido
      return "Numero invalido";
    }
}