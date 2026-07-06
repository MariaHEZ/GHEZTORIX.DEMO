document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("user").value;
  const pass = document.getElementById("password").value;

  if (user === "admin@despacho.com" && pass === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
