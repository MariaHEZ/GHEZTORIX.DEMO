document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  const role = document.getElementById("role").value;

  if(role === "usuario"){
    window.location.href = "dashboard_usuario.html";
  } else if(role === "cliente"){
    window.location.href = "dashboard_cliente.html";
  } else {
    alert("Selecciona un rol válido");
  }
});
