console.log("clientes.js cargado");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formCliente");

    if (!form) return; // evita errores en otras páginas

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const nuevoCliente = {
            id: Date.now(),
            razon: document.getElementById("razon").value,
            rfc: document.getElementById("rfc").value.toUpperCase(),
            cp: document.getElementById("cp").value,
            regimen: document.getElementById("regimen").value,
            actividad: document.getElementById("actividad").value,
            correo: document.getElementById("correo").value,
            telefono: document.getElementById("telefono").value,
            password: document.getElementById("password").value
        };

        clientes.push(nuevoCliente);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        alert("Cliente guardado correctamente");

        window.location.href = "clientes.html";
    });

});
