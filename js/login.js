const usuariosAdmin = [
  { correo: "admin@gheztorix.com", password: "admin123" },
  { correo: "usuario@gheztorix.com", password: "usuario123" }
];

const usuariosCliente = [
  { rfc: "XAXX010101000", password: "cliente123" }
];

function login() {
  const tipoPortal = document.getElementById("tipoPortal").value;
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  let acceso = false;

  if (tipoPortal === "admin") {
    acceso = usuariosAdmin.some(u => u.correo === usuario && u.password === password);
    if (acceso) {
      window.location.href = "dashboard_admin.html";
    } else {
      mensaje.textContent = "Correo o contraseña incorrectos ❌";
    }
  } else if (tipoPortal === "cliente") {
    acceso = usuariosCliente.some(u => u.rfc === usuario && u.password === password);
    if (acceso) {
      window.location.href = "dashboard_cliente.html";
    } else {
      mensaje.textContent = "RFC o contraseña incorrectos ❌";
    }
  }
}
