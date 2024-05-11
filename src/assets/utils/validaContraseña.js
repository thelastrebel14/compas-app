function validaContraseña(password) {
    // Limpiar espacios en blanco al inicio y al final
    password = password.trim();
    
    // Verificar la longitud mínima
    if (password.length < 8) {
        return false;
    }

    // Verificar al menos un número, una mayúscula y un símbolo
    const regexNumero = /\d/;
    const regexMayuscula = /[A-Z]/;
    const regexSimbolo = /[^a-zA-Z0-9]/;

    if (!regexNumero.test(password) || !regexMayuscula.test(password) || !regexSimbolo.test(password)) {
        return false;
    }

    // La contraseña cumple con todas las condiciones
    return true;
}