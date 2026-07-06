// ======================================
// GHEZTORIX LOGIN
// PORTAL ADMINISTRADOR / CLIENTE
// ======================================


let tipoSeleccionado = "";



// Seleccionar portal

function seleccionarAcceso(tipo, elemento){


    tipoSeleccionado = tipo;


    // Guardar valor oculto
    document.getElementById("role").value = tipo;



    // quitar selección anterior

    document
    .querySelectorAll(".acceso-card")
    .forEach(card=>{

        card.classList.remove("seleccionado");

    });



    // activar tarjeta seleccionada

    elemento.classList.add("seleccionado");



    // Mostrar formulario correspondiente


    if(tipo==="usuario"){


        document.getElementById("loginUsuario")
        .style.display="block";


        document.getElementById("loginCliente")
        .style.display="none";


    }




    if(tipo==="cliente"){


        document.getElementById("loginUsuario")
        .style.display="none";


        document.getElementById("loginCliente")
        .style.display="block";


    }


}




// LOGIN

document
.getElementById("loginForm")
.addEventListener("submit",function(e){


e.preventDefault();



let mensaje =
document.getElementById("mensajeLogin");





// =============================
// PORTAL ADMINISTRADOR
// =============================


if(tipoSeleccionado==="usuario"){


let correo =
document.getElementById("email").value;


let password =
document.getElementById("passwordUsuario").value;



// LICENCIA ADMINISTRADOR

if(
correo==="admin@gheztorix.com"
&&
password==="123456"
){


localStorage.setItem(
"usuarioActivo",
JSON.stringify({

nombre:"Administrador",

tipo:"usuario"

})

);



window.location.href=
"dashboard_usuario.html";


}

else{


mensaje.innerHTML=
"❌ Licencia administrativa incorrecta";


}



}






// =============================
// PORTAL CLIENTE
// =============================


else if(tipoSeleccionado==="cliente"){



let rfc =
document
.getElementById("rfc")
.value
.toUpperCase();



let password =
document
.getElementById("passwordCliente")
.value;





// Buscar clientes registrados

let clientes =
JSON.parse(
localStorage.getItem("clientes")
)
|| [];





let cliente =
clientes.find(c =>

c.rfc.toUpperCase()===rfc
&&
c.password===password

);





if(cliente){



localStorage.setItem(

"clienteActivo",

JSON.stringify(cliente)

);



window.location.href=
"dashboard_cliente.html";



}

else{


mensaje.innerHTML=
"❌ RFC o contraseña incorrectos";


}



}





else{


mensaje.innerHTML=
"⚠ Selecciona un portal";


}



});
