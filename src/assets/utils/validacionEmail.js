export function validarEmail(correo) {
  // Se consideran los dominios y extensiones más populares en México para el registro de correos.
  // No se aceptan correos universitarios o empresariales ya que la cuenta debe ser personal.
  if (
    !correo.match(
      /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com|live\.com|yahoo\.com|aol\.com|telmex\.com|prodigy\.net\.mx|infinitum\.com\.mx)$/
    )
  ) {
    return false;
  }
  return true;
}
