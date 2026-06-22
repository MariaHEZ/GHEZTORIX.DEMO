let sesion = JSON.parse(localStorage.getItem("sesion"));

if(!sesion){
    window.location.href = "index.html";
}

// mostrar rol
document.getElementById("rol").innerText =
"Rol: " + sesion.rol.toUpperCase();

// mostrar panel según rol
if(sesion.rol === "admin"){
    document.getElementById("adminPanel").style.display = "block";
}else{
    document.getElementById("clientePanel").style.display = "block";
}

function logout(){
    localStorage.removeItem("sesion");
    window.location.href = "index.html";
}
