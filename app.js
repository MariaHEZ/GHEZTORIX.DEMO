let clientes =
JSON.parse(localStorage.getItem("clientes")) || [];


let comentarios =
JSON.parse(localStorage.getItem("comentarios")) || [];




// LOGIN

function entrar(){


let u =
document.getElementById("usuario").value;


let p =
document.getElementById("password").value;



if(u=="admin" && p=="12345"){


document.getElementById("login")
.style.display="none";


document.getElementById("dashboard")
.classList.remove("hidden");


}else{


alert("Datos incorrectos");


}


}



// SALIR

function salir(){

location.reload();

}





// ABRIR MODULO

function abrir(id){


document
.querySelectorAll(".modulo")
.forEach(x=>x.classList.add("hidden"));


document
.getElementById(id)
.classList.remove("hidden");


mostrarClientes();


}





// GUARDAR CLIENTE


function guardarCliente(){


let cliente={

razon:razon.value,

rfc:rfc.value,

correo:correo.value,

actividad:actividad.value

};



clientes.push(cliente);



localStorage.setItem(
"clientes",
JSON.stringify(clientes)
);



alert("Cliente registrado");


}





// MOSTRAR CLIENTES


function mostrarClientes(){


lista.innerHTML="";


clientes.forEach((c,i)=>{


lista.innerHTML += `

<tr>

<td>
${c.razon}
</td>


<td>
${c.rfc}
</td>


<td>
<button onclick="editar(${i})">
Editar
</button>


<button onclick="eliminar(${i})">
Eliminar
</button>

</td>


</tr>


`;

});


cantidad.innerHTML=clientes.length;


}





// EDITAR

function editar(i){


clientes[i].razon =
prompt(
"Nueva razón social",
clientes[i].razon
);



localStorage.setItem(
"clientes",
JSON.stringify(clientes)
);


mostrarClientes();

}






// ELIMINAR


function eliminar(i){


if(confirm("Eliminar cliente?")){


clientes.splice(i,1);


localStorage.setItem(
"clientes",
JSON.stringify(clientes)
);



mostrarClientes();


}


}





// REPORTES


function generarReporte(){


reporte.innerHTML =
"Reporte generado correctamente";


}





// COMENTARIOS


function agregarComentario(){


let m =
mensaje.value;



comentarios.push(m);



localStorage.setItem(
"comentarios",
JSON.stringify(comentarios)
);



mostrarComentarios();


}



function mostrarComentarios(){


comentarios.innerHTML="";


comentarios.forEach((c,i)=>{


comentarios.innerHTML += `

<p>

${c}

<button onclick="borrarComentario(${i})">
X
</button>

</p>

`;

});


}



function borrarComentario(i){


comentarios.splice(i,1);


localStorage.setItem(
"comentarios",
JSON.stringify(comentarios)
);


mostrarComentarios();


}
