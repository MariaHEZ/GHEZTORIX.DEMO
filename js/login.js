console.log("login.js cargado correctamente");

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

}); // ← Aquí termina el evento "change"


// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const tipo = document.getElementById("role").value;

    // Usuarios del sistema
    const usuarios = [
        {
            correo: "admin@gheztorix.com",
            password: "12345"
        }
    ];

    // Clientes
    const clientes = [
        {
            rfc: "HEMM010101ABC",
            password: "12345"
        }
    ];

    if (tipo === "usuario") {

        const correo = document.getElementById("email").value.trim();
        const password = document.getElementById("passwordUsuario").value;

        const usuario = usuarios.find(u =>
            u.correo === correo &&
            u.password === password
        );

        if (usuario) {

            alert("Bienvenido Usuario");
            window.location.href = "dashboard_usuario.html";

        } else {

            alert("Correo o contraseña incorrectos");

        }

    } else if (tipo === "cliente") {

        const rfc = document.getElementById("rfc").value.trim().toUpperCase();
        const password = document.getElementById("passwordCliente").value;

        const cliente = clientes.find(c =>
            c.rfc === rfc &&
            c.password === password
        );

        if (cliente) {

            alert("Bienvenido Cliente");
            window.location.href = "dashboard_cliente.html";

        } else {

            alert("RFC o contraseña incorrectos");

        }

    } else {

        alert("Selecciona un tipo de acceso.");

    }

});
