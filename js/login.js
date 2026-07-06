
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailOrRFC = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Simulación de licencias activas
  const licencias = {
    usuario: ["usuario1@mail.com", "usuario2@mail.com"],
    cliente: ["RFC123456789", "RFC987654321"]
  };

  if (licencias[role] && licencias[role].includes(emailOrRFC)) {
    if (role === "usuario") {
      window.location.href = "dashboard_usuario.html";
    } else if (role === "cliente") {
      window.location.href = "dashboard_cliente.html";
    }
  } else {
    alert("No tienes licencia activa para el rol seleccionado.");
  }
});

