let intentosFallidos = 0;
function password (){
		let passwordCheck = document. getElementById ("Contraseña") .value.trim();
			if (contraseña !== userPasword) {
				alert("La contraseña no coincide. Por favor, inténtelo de nuevo.");
				intentosFallidos++;
				if (intentosFallidos >= 3) {
					bloquearFormulario();
				}
				return false;
			}
			return true;
		}
		
		function bloquearFormulario() {
			var form = document.getElementById("formulario");
			var inputs = form.getElementsByTagName("input");
			for (var i = 0; i < inputs.length; i++) {
				inputs[i].disabled = true;
			}
			alert("Has excedido el número de intentos permitidos. El formulario ha sido bloqueado temporalmente.");
		}
