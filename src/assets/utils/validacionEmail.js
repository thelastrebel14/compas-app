function validarEmail(correo) {
  if (
    !contenidoEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    return false;
  }
  return true;
}

export default validarEmail;
