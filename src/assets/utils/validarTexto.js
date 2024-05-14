
function validarTexto(texto) {
  // inicializa variable para determinar si es texto
  isText = false;
  // Verificar que la casilla no se deje vacía
  if (texto == "" || texto == null) {
    // se omite todo y regresa false
    return false;
  }

  // Verificar que el tipo de dato sea una cadena de texto
  if (typeof texto !== "string") {
    // se omite todo y regresa false
    return false;
  }

  // Verificar que los caracteres utilizados sean letras según la tabla ASCII
  for (let i = 0; i < texto.length; i++) {
    if (
      (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) ||
      (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)
    ) {
      // se actualiza la variable
      isText = true;
    } else {
      // se actualiza la variable
      isText = false;
    }
  }
  // elimina espacios innecesarios
  texto = texto.trim();

  // regresa el valor booleano de la variable
  return isText;
}

