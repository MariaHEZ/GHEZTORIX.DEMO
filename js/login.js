const usuarios = [
    {usuario:"admin", email:"admin@gheztorix.com", password:"123456", rol:"admin"},
    {usuario:"cliente1", email:"cliente1@gheztorix.com", password:"123456", rol:"cliente"}
];

// VALIDACIÓN EN TIEMPO REAL
document.getElementById("usuario").addEventListener("input", validar);
document.getElementById("password").addEventListener("input", validar);

function validar(){

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    if(user.length > 0 && pass.length > 0){
        document.getElementById("msg").innerText = "";
    }
}

function login(){

    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("password").value.trim();

    const acceso = usuarios.find(u =>
        (u.usuario === user || u.email === user) &&
        u.password === pass
    );

    if(acceso){

        document.getElementById("loading").style.display = "block";
        document.getElementById("btnLogin").disabled = true;

        setTimeout(() => {

            localStorage.setItem("sesion", JSON.stringify(acceso));

            window.location.href = "dashboard.html";

        }, 1500);

    }else{

        document.getElementById("msg").innerText =
        "Credenciales incorrectas";
    }
}
