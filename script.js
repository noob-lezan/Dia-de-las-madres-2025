document.getElementById("submit").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    
    // Guardar el nombre en el almacenamiento local
    localStorage.setItem("userName", name);

    // Redirigir
    window.location.href = "cake.html";
});
