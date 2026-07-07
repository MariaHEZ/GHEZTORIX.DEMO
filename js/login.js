
let portal="admin";



function seleccionarPortal(tipo){


portal=tipo;


document
.getElementById("btnAdmin")
.classList.remove("seleccionado");


document
.getElementById("btnCliente")
.classList.remove("seleccionado");



if(tipo==="admin"){


document
.getElementById("btnAdmin")
.classList.add("seleccionado");


document.getElementById("labelUsuario")
.innerHTML="Correo electrónico";


document.getElementById("usuario")
.placeholder="ejemplo@correo.com";


}
else{


document
.getElementById("btnCliente")
.classList.add("seleccionado");


document.getElementById("labelUsuario")
.innerHTML="RFC";


document.getElementById("usuario")
.placeholder="Ingrese RFC";


}


}




function iniciarSesion(event){


event.preventDefault();



let usuario=
document.getElementById("usuario").value;


let password=
document.getElementById("password").value;



// Usuarios de prueba


if(portal==="admin"){



if(
usuario==="admin@gheztorix.com"
&&
password==="123456"

){


window.location.href="dashboard-admin.html";


}

else{


mostrarError();

}


}



else{


if(

usuario==="GHE010101AAA"

&&

password==="123456"

){


window.location.href="dashboard-cliente.html";


}

else{


mostrarError();


}



}



}




function mostrarError(){

document.getElementById("mensaje")
.innerHTML=
"Usuario o contraseña incorrectos";

}
