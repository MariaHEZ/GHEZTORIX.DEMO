// Cargar estadísticas del dashboard

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];


// Total clientes

document.getElementById("totalClientes").innerHTML =
clientes.length;



// Últimos clientes registrados

let contenedor =
document.getElementById("ultimosClientes");


if(clientes.length > 0){


contenedor.innerHTML="";


clientes.slice(-3).reverse().forEach(cliente=>{


contenedor.innerHTML += `

<div class="cliente-mini">

<h3>
${cliente.razon || cliente.nombre}
</h3>


<p>
RFC: ${cliente.rfc}
</p>


</div>

`;


});


}
