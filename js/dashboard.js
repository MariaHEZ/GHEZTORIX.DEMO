// Verificar sesión
if(localStorage.getItem("sesion") !== "ok"){
    window.location.href = "index.html";
}

// Cerrar sesión
function logout(){

    localStorage.removeItem("sesion");
    localStorage.removeItem("rol");

    window.location.href = "index.html";
}
