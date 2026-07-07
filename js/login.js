// ======================================
// GHEZTORIX LOGIN
// PORTAL ADMINISTRADOR / CLIENTE
// ======================================


let tipoAcceso = "";


// Selección de portal

function seleccionarAcceso(tipo, elemento){

    // Guardar tipo seleccionado
    document.getElementById("role").value = tipo;


    // quitar selección anterior
    document.querySelectorAll(".acceso-card")
    .forEach(card=>{
        card.classList.remove("seleccionado");
    });


    // marcar seleccionado
    elemento.classList.add("seleccionado");


    // ocultar formularios
    document.getElementById("loginUsuario")
    .style.display="none";

    document.getElementById("loginCliente")
    .style.display="none";


    // mostrar formulario correcto

    if(tipo==="usuario"){

        document.getElementById("loginUsuario")
        .style.display="block";

    }


    if(tipo==="cliente"){

        document.getElementById("loginCliente")
        .style.display="block";

    }

}



// Validación Login

document
.getElementById("loginForm")
.addEventListener("submit",function(e){

e.preventDefault();


let tipo=document.getElementById("role").value;



if(tipo==="usuario"){


let correo=
document.getElementById("email").value;


let password=
document.getElementById("passwordUsuario").value;



// Licencia administrador

if(
correo==="admin@gheztorix.com" &&
password==="123456"
){

window.location.href=
"dashboard_usuario.html";

}

else{

mensaje("Datos incorrectos de administrador");

}



}



if(tipo==="cliente"){


let rfc=
document.getElementById("rfc").value
.toUpperCase();


let password=
document.getElementById("passwordCliente").value;



// Licencia cliente ejemplo

if(
rfc==="CHE890512HJ4" &&
password==="123456"
){

window.location.href=
"dashboard_cliente.html";

}

else{

mensaje("RFC o contraseña incorrectos");

}


}



});




// Mensajes

function mensaje(texto){

document.getElementById("mensajeLogin")
.innerHTML=
texto;

}


});
