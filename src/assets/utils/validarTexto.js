function validarTexto(texto) {
  // Eliminar espacios en blanco antes y después del texto

  // Verificar que la casilla no se deje vacía
  if (texto == "" || texto == null) {
    // alert("Esta casilla de texto no puede ser dejada vacía");
    return false;
  }

  // Verificar que el tipo de dato sea una cadena de texto
  if (typeof texto !== "string") {
    return false;
  }

  // Verificar que los caracteres utilizados sean letras según la tabla ASCII
  for (var i = 0; i < texto.length; i++) {
    if (
      texto.charCodeAt(i) >= 65 &&
      texto.charCodeAt(i) <= 90 &&
      texto.charCodeAt(i) >= 97 &&
      texto.charCodeAt(i) <= 122
    ) {
      return true;
    } else {
      // alert("Por favor, introduce sólo texto en esta casilla");
    }
  }
  texto = texto.trim();

  // Se trata de un texto sin otros caracteres
  return true;
}
