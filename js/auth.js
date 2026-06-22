function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  const adminUser = "admin@correo.com";
  const adminPass = "12345";

  if (usuario === adminUser && password === adminPass) {
    alert("Bienvenido Administrador");
    window.location.href = "dashboard.html";
  } else if (usuario.length > 0 && password.length > 0) {
    alert("Acceso como Cliente");
    window.location.href = "cliente.html";
  } else {
    alert("Por favor ingresa tus datos");
  }
}
