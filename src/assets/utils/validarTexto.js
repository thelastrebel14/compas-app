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