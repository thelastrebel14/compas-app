function prohibirPalabras() {
    let palabrasProhibidas = 
    [
        // México
        "cola", "culo", "pito", "verga", "nalgas", "pendejo", "estupido", "mamon", "chinga", "mierda", "caca", "popo", "pipi", "miar", "orina", "excremento", "tonto", "baboso", "imbecil", "inutil", "pene", "vagina", "pucha", "semen", "esperma", "coger", "testiculo", "glande", "clitoris", "cabron", "idiota", "masturba", "bastardo", "escroto", "teta", "chichi", "bubi", "seno", "mamar",

        //España 
        "polla", "follar",

        //Inglés

        "fuck", "asshole", "wore", "cock", "shit", "wtf", "hell", "flm", "damn", "cunt", "asswipe", "bollocks", "piss", "bitch", "bastard", "dick", "wanker", "bawbag",

        // Queries maliciosos
        "insert into", "delete from", "update where", "delete", "query", "quieries", "truncate", "drop table", "drop database", "value", "select", "database", "create", "alter", "column", "index", "between", "key", "primary", "foreign"
    ];
    let resultado = "";
    let pos = -1
    let input = document.getElementById("input").value;
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