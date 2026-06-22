function login(){

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // usuarios simulados
    const usuarios = [
        {usuario:"admin", password:"123456", rol:"admin"},
        {usuario:"cliente1", password:"123456", rol:"cliente"}
    ];

    const acceso = usuarios.find(u =>
        u.usuario === usuario && u.password === password
    );

    if(acceso){

        // guardamos usuario completo
        localStorage.setItem("sesion", JSON.stringify(acceso));

        window.location.href = "dashboard.html";

    }else{
        document.getElementById("error").innerText =
        "Usuario o contraseña incorrectos";
    }
}
