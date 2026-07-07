if (tipoPortal === "admin") {
  acceso = usuariosAdmin.some(u => u.correo === usuario && u.password === password);
  if (acceso) {
    window.location.href = "dashboard_admin.html"; // redirección al dashboard de admin
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos ❌";
  }
} else if (tipoPortal === "cliente") {
  acceso = usuariosCliente.some(u => u.rfc === usuario && u.password === password);
  if (acceso) {
    window.location.href = "dashboard_cliente.html"; // redirección al dashboard de cliente
  } else {
    mensaje.textContent = "RFC o contraseña incorrectos ❌";
  }
}
