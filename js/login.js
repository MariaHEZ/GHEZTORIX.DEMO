let tipoPortal="";


// seleccionar portal

function seleccionarPortal(tipo, elemento){


tipoPortal=tipo;


document
.querySelectorAll(".portal")
.forEach(card=>{

card.classList.remove("seleccionado");

});


elemento.classList.add("seleccionado");


}



// usuarios demo

const usuariosAdmin=[

{
correo:"admin@ghez torix.com",
password:"123456"
}

];



const clientes=[

{

rfc:"ABC123456789",
password:"123456"

}

];





document
.getElementById("formLogin")
.addEventListener("submit",function(e){


e.preventDefault();



let usuario=
document.getElementById("usuario").value.trim();



let password=
document.getElementById("password").value.trim();



let mensaje=
document.getElementById("mensaje");



if(tipoPortal===""){


mensaje.innerHTML=
"Seleccione un portal";

return;

}




// ADMIN


if(tipoPortal==="admin"){


let acceso=
usuariosAdmin.find(
u=>
u.correo===usuario &&
u.password===password
);



if(acceso){


localStorage.setItem(
"sesion",
"administrador"
);



window.location.href=
"dashboard-admin.html";


}

else{


mensaje.innerHTML=
"Datos incorrectos";

}



}





// CLIENTE


if(tipoPortal==="cliente"){


let acceso=
clientes.find(
c=>
c.rfc===usuario &&
c.password===password
);



if(acceso){


localStorage.setItem(
"sesion",
"cliente"
);



window.location.href=
"dashboard-cliente.html";


}

else{


mensaje.innerHTML=
"RFC o contraseña incorrectos";

}



}



});
