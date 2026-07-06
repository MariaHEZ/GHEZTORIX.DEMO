let clientes = JSON.parse(localStorage.getItem("clientes")) || [];


// Total clientes

document.getElementById("totalClientes").innerHTML = clientes.length;



// Mostrar últimos clientes

let lista = document.getElementById("ultimosClientes");


if(clientes.length > 0){

lista.innerHTML="";


clientes.slice(-3).reverse().forEach(cliente=>{


lista.innerHTML += `

<div class="cliente-mini">

<h3>
${cliente.razon || "Cliente sin nombre"}
</h3>

<p>
RFC: ${cliente.rfc}
</p>


</div>

`;


});


}
