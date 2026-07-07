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
