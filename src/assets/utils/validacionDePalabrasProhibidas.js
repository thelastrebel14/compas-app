//Se selecciona el botón que disparará la función (cambiar hacia donde apunta de ser necesario)
var btnSubmit = document.getElementById("enviar");

function prohibirPalabras() {

    //Lista de palabras prohibidas agregadas manualmente, la lista actualmente contiene groserías de México, de España y groserías en Inglés, además de que contiene palabras que se usan en bases de datos para evitar la posibilidad de Inyecciones SQL
    let palabrasProhibidas = 
    [
        // México
        "cola", "culo", "pito", "verga", "nalgas", "pendejo", "pendeja", "estupida", "estupido", "mamon", "mamona", "chinga", "mierda", "caca", "popo", "pipi", "miar", "orina", "excremento", "tonto", "tonta", "baboso", "babosa", "imbecil", "inutil", "pene", "vagina", "pucha", "semen", "esperma", "huevo", "glande", "clitoris", "cabron", "idiota", "masturba", "bastardo", "escroto", "teta", "chichi", "bubi", "seno", "mamar", "puta", "puto",

        //España 
        "polla", "follar",

        //Inglés

        "fuck", "asshole", "wore", "cock", "shit", "wtf", "hell", "flm", "damn", "cunt", "asswipe", "bollocks", "piss", "bitch", "bastard", "dick", "wanker", "bawbag",

        // Queries maliciosos
        "insert into", "delete from", "update where", "delete", "query", "quieries", "truncate", "drop table", "drop database", "value", "select", "database", "create", "alter", "column", "index", "between", "key", "primary", "foreign"
    ];
    let resultado = "";
    let pos = -1

    //Se selecciona el input (cambiar hacia donde apunta de ser necesario)
    let input = document.querySelector(".input").value;

    //uso foreach para recorrer cada elemento del array
    palabrasProhibidas.forEach(function (element) {

        //En caso de existir se asigna la posición en pos
        pos = input.search(element.toString());

        //Si existe
        if (pos != -1) {
            alert("Tu texto contiene palabras que no están permitidas en nuestras normas de convivencia, no fue posible enviar tu información");
            return false;
        }
    });
    
    //En caso de que no exista.
    if (pos === -1 && resultado === "") {
        return true;
    }
    console.log(resultado);
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    prohibirPalabras();
});