
document.addEventListener("DOMContentLoaded", function() {
    // Al cargar la página, ocultamos los chats adicionales
    document.getElementById("extra-chats").style.display = "none";

    // Manejar clic en el botón "Ver más"
    document.getElementById("see-more-btn").addEventListener("click", function() {
        document.getElementById("extra-chats").style.display = "block"; // Mostrar los chats adicionales
        this.style.display = "none"; // Ocultar el botón "Ver más"
    });
});
