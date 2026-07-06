// Mostrar formulario según el rol

const role = document.getElementById("role");
const loginUsuario = document.getElementById("loginUsuario");
const loginCliente = document.getElementById("loginCliente");

role.addEventListener("change", function () {

    if (role.value === "usuario") {

        loginUsuario.style.display = "block";
        loginCliente.style.display = "none";

    } else if (role.value === "cliente") {

        loginUsuario.style.display = "none";
        loginCliente.style.display = "block";

    } else {

        loginUsuario.style.display = "none";
        loginCliente.style.display = "none";

    }

});
