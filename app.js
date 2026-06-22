
// ================================
// BASE DE DATOS LOCAL
// ================================


let clientes =
JSON.parse(localStorage.getItem("clientesGHEZTORIX")) || [];


let comentarios =
JSON.parse(localStorage.getItem("comentariosGHEZTORIX")) || [];




// ================================
// LOGIN
// ================================


function login(){


let usuario =
document.getElementById("usuario").value;


let password =
document.getElementById("password").value;



if(usuario==="admin" && password==="12345"){


document
.getElementById("loginPage")
.classList.add("hidden");


document
.getElementById("dashboard")
.classList.remove("hidden");



actualizarDatos();


}

else{


alert("Usuario o contraseña incorrectos");


}


}





// ================================
// CERRAR SESION
// ================================


function cerrar(){


location.reload();


}







// ================================
// CAMBIO DE MODULOS
// ================================


function mostrar(id){


let pantallas =
document.querySelectorAll(".pantalla");



pantallas.forEach(p=>{

p.classList.add("hidden");

});



document
.getElementById(id)
.classList.remove("hidden");



if(id==="clientes"){

mostrarClientes();

}


}







// ================================
// REGISTRAR CLIENTE
// ================================


function guardarCliente(){


let cliente={


razon:
document.getElementById("razon").value,


rfc:
document.getElementById("rfc").value,


cp:
document.getElementById("cp").value,


regimen:
document.getElementById("regimen").value,


correo:
document.getElementById("correo").value,


actividad:
document.getElementById("actividad").value,


firma:
document.getElementById("firma").value


};





if(cliente.razon==="" ||
cliente.rfc===""){


alert("Completa los datos obligatorios");

return;

}





clientes.push(cliente);



localStorage.setItem(

"clientesGHEZTORIX",

JSON.stringify(clientes)

);




alert("Cliente registrado");



limpiar();


actualizarDatos();



}







function limpiar(){


document
.querySelectorAll("#registro input")
.forEach(x=>x.value="");


}









// ================================
// MOSTRAR CLIENTES
// ================================



function mostrarClientes(){


let tabla =
document.getElementById("tabla");



tabla.innerHTML="";



clientes.forEach((c,index)=>{



tabla.innerHTML += `

<tr>

<td>${c.razon}</td>

<td>${c.rfc}</td>

<td>${c.correo}</td>


<td>


<button onclick="editarCliente(${index})">
Editar
</button>



<button onclick="eliminarCliente(${index})">
Eliminar
</button>


</td>


</tr>

`;



});


}









// ================================
// BUSCAR RFC
// ================================


function buscarCliente(){



let texto =
document.getElementById("buscarRFC").value;



let encontrado =
clientes.find(
c=>c.rfc===texto
);





if(encontrado){


alert(

"Cliente encontrado: "

+ encontrado.razon

);



}

else{


alert("No existe cliente");

}



}









// ================================
// EDITAR
// ================================


function editarCliente(i){


let nuevo =
prompt(

"Nueva razón social",

clientes[i].razon

);



if(nuevo){


clientes[i].razon=nuevo;



guardarCambios();



}

}







// ================================
// ELIMINAR
// ================================


function eliminarCliente(i){



if(confirm("¿Eliminar cliente?")){


clientes.splice(i,1);



guardarCambios();



}


}






function guardarCambios(){


localStorage.setItem(

"clientesGHEZTORIX",

JSON.stringify(clientes)

);



mostrarClientes();


actualizarDatos();



}










// ================================
// DASHBOARD
// ================================


function actualizarDatos(){


document
.getElementById("totalClientes")
.innerHTML=clientes.length;



}









// ================================
// REPORTES
// ================================



function crearReporte(){


document
.getElementById("reporte")
.innerHTML=


`

<h3>Reporte mensual</h3>

<p>
Clientes registrados:
${clientes.length}
</p>


<p>
Sistema funcionando correctamente
</p>

`;



}










// ================================
// CHAT CLIENTES
// ================================



function agregarComentario(){



let mensaje =
document.getElementById("mensaje").value;



if(mensaje==="") return;




comentarios.push(mensaje);



localStorage.setItem(

"comentariosGHEZTORIX",

JSON.stringify(comentarios)

);



mostrarComentarios();



document.getElementById("mensaje").value="";



}





function mostrarComentarios(){


let lista =
document.getElementById("listaComentarios");


lista.innerHTML="";



comentarios.forEach((c,i)=>{



lista.innerHTML += `

<p>

💬 ${c}

<button onclick="borrarComentario(${i})">

Eliminar

</button>


</p>

`;



});


}







function borrarComentario(i){


comentarios.splice(i,1);



localStorage.setItem(

"comentariosGHEZTORIX",

JSON.stringify(comentarios)

);



mostrarComentarios();


}
