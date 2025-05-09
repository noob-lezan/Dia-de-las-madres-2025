
window.onload = function() {
    const name = localStorage.getItem("userName");
    const greeting = document.getElementById("greeting");

    if (name) {
        greeting.textContent = `¡Feliz Día de la Madre, ${name}!`;
    } else {
        greeting.textContent = "¡Feliz Día de la Madre!";
    }
};