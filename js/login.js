function login(){

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();

    if(
        user === "admin@gheztorix.com" &&
        pass === "123456"
    ){

        localStorage.setItem("sesion","ok");
        localStorage.setItem("rol","admin");

        window.location.href = "dashboard.html";

    }else{

        document.getElementById("error").innerText =
        "Usuario o contraseña incorrectos";

    }
}
