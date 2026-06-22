function login(){

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if(user === "admin" && pass === "123456"){

        localStorage.setItem("sesion","ok");

        window.location.href = "dashboard.html";

    }else{

        document.getElementById("error").innerText =
        "Usuario o contraseña incorrectos";

    }
}
