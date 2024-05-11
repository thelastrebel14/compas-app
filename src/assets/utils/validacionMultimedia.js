/*
 * Validación de formato multimedia (Moises)
 * 
 * Validaciones a considerar: 
 * - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
 * 
 * // validaNombreValidación() <- Convención para nombrar variables. Usar prefijo valida
*/

function validaImagenValidacion(imagen){
    var archivo = imagen.files[0];
    var tipoPermitido = ["image/jpeg", "image/png"]; // Tipos de archivo permitidos
  
    if (archivo) {
      if (tipoPermitido.includes(archivo.type)) {
        return true; // Válido
      } else {
        return false; // No válido
      }
    } else {
      return false; // No se seleccionó ningún archivo
    }
}
  