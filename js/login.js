let tipoPortal = "";

// seleccionar portal
function seleccionarPortal(tipo, elemento) {
  tipoPortal = tipo;

  document.querySelectorAll(".portal").forEach(card => {
    card.classList.remove("seleccionado");
  });

  elemento.classList.add("seleccionado");
}

// usuarios demo
const usuariosAdmin = [
  { correo: "admin@gheztorix.com", password: "admin123" },
  { correo: "usuario@gheztorix.com", password: "usuario123" }
];

const usuariosCliente = [
  { rfc: "XAXX010101000", password: "cliente123" },
  { rfc: "ABC123456789", password: "cliente456" }
];

// validar login
document.getElementById("formLogin").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
  const mensaje = document.getElementById("mensaje");

  let acceso = false;

  if (tipoPortal === "admin") {
    acceso = usuariosAdmin.some(u => u.correo === usuario && u.password === password);
    if (acceso) {
      mensaje.textContent = "Acceso concedido como Administrador ✅";
      window.location.href = "dashboard.html"; // redirección
    } else {
      mensaje.textContent = "Correo o contraseña incorrectos ❌";
    }
  } else if (tipoPortal === "cliente") {
    acceso = usuariosCliente.some(u => u.rfc === usuario && u.password === password);
    if (acceso) {
      mensaje.textContent = "Acceso concedido como Cliente ✅";
      window.location.href = "dashboard.html"; // redirección
    } else {
      mensaje.textContent = "RFC o contraseña incorrectos ❌";
    }
  } else {
    mensaje.textContent = "Selecciona un portal antes de ingresar ⚠️";
  }
});
