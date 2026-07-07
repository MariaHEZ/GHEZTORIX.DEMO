let tipoPortal = "";


// seleccionar portal

function seleccionarPortal(tipo){


tipoPortal = tipo;


// marcar selección visual

document.querySelectorAll(".acceso-card")
.forEach(card=>{

card.classList.remove("seleccionado");

});


event.currentTarget.classList.add("seleccionado");



mostrarFormulario();


}




function mostrarFormulario(){


let formulario =
document.getElementById("loginForm");



if(tipoPortal==="admin"){


formulario.innerHTML=`

<h3>
Acceso Administrativo
</h3>


<input 
id="correo"
type="email"
placeholder="Correo administrativo">


<input
id="password"
type="password"
placeholder="Contraseña">


<button onclick="ingresar()">
Ingresar
</button>

`;


}




if(tipoPortal==="cliente"){


formulario.innerHTML=`

<h3>
Acceso Cliente
</h3>


<input
id="rfc"
placeholder="RFC">


<input
id="password"
type="password"
placeholder="Contraseña">


<button onclick="ingresar()">
Ingresar
</button>

`;

}



}




function ingresar(){



// ADMIN

if(tipoPortal==="admin"){


let correo =
document.getElementById("correo").value;


let password =
document.getElementById("password").value;



if(
correo==="admin@gheztorix.com"
&&
password==="123456"

){


localStorage.setItem(
"rol",
"admin"
);



window.location.href =
"dashboard-admin.html";


}

else{


alert(
"Correo o contraseña incorrectos"
);


}


}





// CLIENTE

if(tipoPortal==="cliente"){



let rfc =
document.getElementById("rfc").value;


let password =
document.getElementById("password").value;



let clientes =
JSON.parse(
localStorage.getItem("clientes")
)
|| [];



let cliente =
clientes.find(c=>

c.rfc===rfc
&&
c.password===password

);



if(cliente){


localStorage.setItem(
"clienteActivo",
JSON.stringify(cliente)
);



window.location.href =
"dashboard-cliente.html";


}

else{


alert(
"RFC o contraseña incorrectos"
);


}


}



}
