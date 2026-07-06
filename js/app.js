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

// Cargar clientes en dashboard
if (document.getElementById("clientes")) {
  fetch("data/clientes.json")
    .then(res => res.json())
    .then(data => {
      const cont = document.getElementById("clientes");
      cont.innerHTML = "<h3>Clientes</h3><ul>" +
        data.map(c => `<li>${c.nombre} - ${c.rfc} - ${c.estado}</li>`).join("") +
        "</ul>";
    });
}
