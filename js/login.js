function login(){

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(
        (usuario === "admin" && password === "123456") ||
        (usuario === "cliente1" && password === "123456")
    ){

        localStorage.setItem("sesion","ok");

        window.location.href = "dashboard.html";

    }else{

        document.getElementById("error").innerText =
        "Usuario o contraseña incorrectos";
    }
}
