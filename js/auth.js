function login() {
  const perfil = document.getElementById("perfil").value;
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  const adminUser = "admin@correo.com";
  const adminPass = "12345";

  if (perfil === "usuario") {
    if (usuario === adminUser && password === adminPass) {
      alert("Bienvenido Administrador");
     window.location.href = "panel.html";
    } else {
      alert("Credenciales inválidas para Usuario");
    }
  } else if (perfil === "cliente") {
    if (usuario.length > 0 && password.length > 0) {
      alert("Bienvenido Cliente");
      window.location.href = "cliente.html";
    } else {
      alert("Por favor ingresa tus datos");
    }
  }
}
