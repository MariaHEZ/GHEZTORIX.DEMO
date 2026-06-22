let sesion = localStorage.getItem("sesion");

if(!sesion){
    window.location.href = "index.html";
}

sesion = JSON.parse(sesion);

// mostrar rol
document.getElementById("rol").innerText =
"Rol: " + sesion.rol;

// ADMIN O CLIENTE
if(sesion.rol === "admin"){
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("clientePanel").style.display = "none";
}else{
    document.getElementById("adminPanel").style.display = "none";
    document.getElementById("clientePanel").style.display = "block";
}

function logout(){
    localStorage.removeItem("sesion");
    window.location.href = "index.html";
}
