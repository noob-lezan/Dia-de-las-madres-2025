document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    
    // Guardar el nombre en el almacenamiento local
    localStorage.setItem("userName", name);

    // Redirigir a message.html
    window.location.href = "Birthday-cake.html";
});