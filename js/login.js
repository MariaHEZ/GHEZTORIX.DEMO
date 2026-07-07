function loginAdmin(){


let usuario =alet tipoAcceso="";


function mostrarLogin(tipo){


tipoAcceso = tipo;


let formulario =
document.getElementById("loginForm");



if(tipo==="admin"){


formulario.innerHTML = `


<h3>
Acceso Administrador
</h3>


<input 
id="usuario"
placeholder="Usuario">


<input
id="password"
type="password"
placeholder="Contraseña">


<button onclick="ingresar()">

Ingresar

</button>


`;


}



if(tipo==="cliente"){


formulario.innerHTML = `


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



if(tipoAcceso==="admin"){


let usuario =
document.getElementById("usuario").value;


let password =
document.getElementById("password").value;



if(
usuario==="admin"
&&
password==="12345"

){


localStorage.setItem(
"rol",
"admin"
);



location.href=
"dashboard-admin.html";


}

else{


alert(
"Datos incorrectos"
);


}


}




if(tipoAcceso==="cliente"){


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



localStorage.setItem(
"rol",
"cliente"
);



location.href=
"dashboard-cliente.html";


}

else{


alert(
"Cliente no encontrado"
);


}


}


}
document.getElementById("usuario").value;


let password =
document.getElementById("password").value;



if(
usuario==="admin" &&
password==="12345"
){


localStorage.setItem(
"tipo",
"administrador"
);


window.location.href=
"dashboard.html";


}

else{


alert(
"Usuario o contraseña incorrectos"
);


}


}
