document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const emailOrRFC = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Licencias genéricas de prueba
  const licencias = {
    usuario: [
      { email: "usuario1@gheztorix.com", password: "usuario123" }
    ],
    cliente: [
      { email: "RFC123456789X", password: "cliente123" }
    ]
  };

  // Validación
  const licenciaValida = licencias[role]?.some(
    lic => lic.email === emailOrRFC && lic.password === password
  );

  if (licenciaValida) {
    if (role === "usuario") {
      window.location.href = "dashboard_usuario.html";
    } else if (role === "cliente") {
      window.location.href = "dashboard_cliente.html";
    }
  } else {
    alert("Licencia inválida. Verifica tus credenciales.");
  }
});
