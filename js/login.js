let tipoPortal="";



function seleccionarPortal(tipo){

tipoPortal=tipo;

mostrarFormulario();

}



function mostrarFormulario(){


let formulario =
document.getElementById("loginForm");



if(tipoPortal==="admin"){


formulario.innerHTML=`

<h2>
Portal Administrativo
</h2>


<input 
id="correo"
placeholder="Correo electrónico">


<input 
id="password"
type="password"
placeholder="Contraseña">


<button onclick="ingresar()">

Entrar

</button>

`;

}



if(tipoPortal==="cliente"){


formulario.innerHTML=`

<h2>
Portal Cliente
</h2>


<input 
id="rfc"
placeholder="RFC">


<input 
id="password"
type="password"
placeholder="Contraseña">


<button onclick="ingresar()">

Entrar

</button>

`;

}


}




function ingresar(){



if(tipoPortal==="admin"){


let correo =
document.getElementById("correo").value;


let password =
document.getElementById("password").value;



let admin =
administradores.find(a=>

a.correo===correo
&&
a.password===password

);



if(admin){


localStorage.setItem(

"usuarioActivo",

JSON.stringify(admin)

);



location.href=
"dashboard-admin.html";


}

else{

alert(
"Correo o contraseña incorrectos"
);

}


}




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



location.href=
"dashboard-cliente.html";


}

else{


alert(
"RFC o contraseña incorrectos"
);


}


}


}
