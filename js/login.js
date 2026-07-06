// app.js
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("password").value;

  if ((user === "admin@gheztorix.com" && pass === "admin123") ||
      (user === "CHE890512HJ4" && pass === "cliente123")) {
    alert("Acceso concedido ✅");
    // Aquí podrías redirigir al dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas ❌");
  }
});
