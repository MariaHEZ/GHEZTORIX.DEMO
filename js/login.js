// ======================================
// GHEZTORIX LOGIN
// PORTAL ADMINISTRADOR / CLIENTE
// ======================================


let tipoAcceso = "";


// Seleccionar portal

function seleccionarAcceso(tipo, elemento){


tipoAcceso = tipo;


// quitar selección anterior

document.querySelectorAll(".acceso-card")
.forEach(card=>{
card.classList.remove("seleccionado");
});


// marcar seleccionado

elemento.classList.add("seleccionado");


// ocultar formularios

document.getElementById("loginUsuario").style.display="none";

document.getElementById("loginCliente").style.display="none";



// mostrar formulario correspondiente


if(tipo=="usuario"){

document.getElementById("loginUsuario")
.style.display="block";

document.getElementById("role").value="administrador";

}


if(tipo=="cliente"){

document.getElementById("loginCliente")
.style.display="block";

document.getElementById("role").value="cliente";

}


}



// Validación login

document
.getElementById("loginForm")
.addEventListener("submit",function(e){


e.preventDefault();


let mensaje=document.getElementById("mensajeLogin");



// ADMINISTRADOR

if(tipoAcceso=="usuario"){


let correo =
document.getElementById("email").value;


let password =
document.getElementById("passwordUsuario").value;



// licencia administrativa

if(
correo=="admin@gheztorix.com" &&
password=="123456"
){


localStorage.setItem(
"sesion",
"administrador"
);


window.location.href="dashboard.html";


}

else{


mensaje.innerHTML=
"❌ Licencia administrativa incorrecta";


}



}



// CLIENTE


else if(tipoAcceso=="cliente"){


let rfc =
document.getElementById("rfc").value.toUpperCase();


let password =
document.getElementById("passwordCliente").value;



// licencia cliente ejemplo

if(
rfc=="ABC123456XXX" &&
password=="123456"
){


localStorage.setItem(
"sesion",
"cliente"
);



window.location.href="portal-cliente.html";


}

else{


mensaje.innerHTML=
"❌ RFC o licencia incorrecta";


}


}



else{


mensaje.innerHTML=
"⚠️ Selecciona un portal";


}


});
