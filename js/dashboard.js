let sesion = JSON.parse(localStorage.getItem("sesion"));

// si no hay sesión → fuera
if(!sesion){
    window.location.href = "index.html";
}

// mostrar rol
document.getElementById("rol").innerText = sesion.rol;

// mostrar / ocultar paneles
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
