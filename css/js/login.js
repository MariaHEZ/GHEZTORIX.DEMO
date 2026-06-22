const usuarios = [
    {usuario:"admin", password:"123456", rol:"admin"},
    {usuario:"cliente1", password:"123456", rol:"cliente"}
];

function login(){

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let rol = document.getElementById("rol").value;

    let acceso = usuarios.find(u =>
        u.usuario === usuario &&
        u.password === password &&
        u.rol === rol
    );

    if(acceso){

        localStorage.setItem("sesion", JSON.stringify(acceso));

        if(acceso.rol === "admin"){
            window.location.href="dashboard.html";
        }else{
            window.location.href="cliente.html";
        }

    }else{
        document.getElementById("error").innerText =
        "Credenciales incorrectas";
    }
}
