let clientes =
JSON.parse(
localStorage.getItem("clientes")
)
|| [];



mostrarClientes();



function crearCliente(){


let razon =
document.getElementById("razon").value;


let rfc =
document.getElementById("rfc").value;


let correo =
document.getElementById("correo").value;


let telefono =
document.getElementById("telefono").value;



let cliente={


id:Date.now(),


razon:razon,


rfc:rfc.toUpperCase(),


correo:correo,


telefono:telefono,


password:
"123456",


documentos:[],


historial:[

"Cliente creado"

]


};



clientes.push(cliente);



localStorage.setItem(

"clientes",

JSON.stringify(clientes)

);



alert(
"Cliente creado correctamente\n\nUsuario: "+
cliente.rfc+
"\nContraseña: 123456"

);



mostrarClientes();


}



function mostrarClientes(){


let lista =
document.getElementById(
"listaClientes"
);



if(!lista)
return;



lista.innerHTML="";



clientes.forEach(cliente=>{


lista.innerHTML += `


<div class="cliente-card">


<h3>
${cliente.razon}
</h3>


<span class="rfc">

${cliente.rfc}

</span>



<p>
Correo:
${cliente.correo}
</p>



<p>

Acceso Cliente:

<br>

Usuario:
${cliente.rfc}

<br>

Password:
123456

</p>



</div>


`;


});


}




function buscarCliente(){



let texto =
document
.getElementById("buscador")
.value
.toLowerCase();



let filtrados =
clientes.filter(c=>


c.razon
.toLowerCase()
.includes(texto)

||

c.rfc
.toLowerCase()
.includes(texto)



);



let lista =
document.getElementById(
"listaClientes"
);



lista.innerHTML="";



filtrados.forEach(cliente=>{


lista.innerHTML += `


<div class="cliente-card">


<h3>
${cliente.razon}
</h3>


<span class="rfc">
${cliente.rfc}
</span>



</div>


`;


});


}
