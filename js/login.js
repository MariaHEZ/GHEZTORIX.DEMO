const role =
document.getElementById("role");


const loginUsuario =
document.getElementById("loginUsuario");


const loginCliente =
document.getElementById("loginCliente");



role.addEventListener("change",()=>{


if(role.value==="usuario"){

loginUsuario.style.display="block";

loginCliente.style.display="none";

}


else if(role.value==="cliente"){


loginCliente.style.display="block";

loginUsuario.style.display="none";


}


else{


loginUsuario.style.display="none";

loginCliente.style.display="none";


}


});





document
.getElementById("loginForm")
.addEventListener("submit",function(e){


e.preventDefault();



let tipo =
role.value;



if(tipo==="usuario"){


let correo =
document.getElementById("email").value;


let password =
document.getElementById("passwordUsuario").value;



if(
correo==="admin@gheztorix.com" &&
password==="12345"

){


localStorage.setItem(
"usuarioActivo",
correo
);


location.href="dashboard_usuario.html";


}

else{


mensajeLogin.innerHTML=
"❌ Datos incorrectos";


}



}





if(tipo==="cliente"){


let rfc =
document.getElementById("rfc").value.toUpperCase();


let password =
document.getElementById("passwordCliente").value;



if(
rfc==="CHE890512HJ4" &&
password==="12345"

){


localStorage.setItem(
"clienteActivo",
rfc
);


location.href=
"dashboard_cliente.html";


}


else{


mensajeLogin.innerHTML=
"❌ RFC o contraseña incorrectos";


}



}



});
