function login(){

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();

    const admin = "admin@gheztorix.com";
    const clave = "123456";

    if(user === admin && pass === clave){

        localStorage.setItem("sesion","ok");
        localStorage.setItem("rol","admin");

        window.location.href = "dashboard.html";

    }else{
        document.getElementById("error").innerText =
        "Usuario o contraseña incorrectos";
    }
}
