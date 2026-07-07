console.log("Lista de clientes cargada");

// Obtener clientes guardados
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const contenedor = document.getElementById("listaClientes");
const buscador = document.getElementById("buscador");


// Mostrar clientes
function mostrarClientes(lista){

    contenedor.innerHTML = "";


    if(lista.length === 0){

        contenedor.innerHTML = `
        <p style="text-align:center">
        No se encontraron clientes
        </p>
        `;

        return;
    }


    lista.forEach(cliente => {


        contenedor.innerHTML += `

        <div class="cliente-card">

            <h3>${cliente.razon}</h3>

            <p>
            <b>RFC:</b> ${cliente.rfc}
            </p>

            <p>
            <b>Código Postal:</b> ${cliente.cp || "No registrado"}
            </p>

            <p>
            <b>Régimen:</b> ${cliente.regimen || "No registrado"}
            </p>

            <button onclick="abrirCliente(${cliente.id})">
            📁 Ver expediente
            </button>

        </div>

        `;


    });

}



// Buscar por RFC o Razón Social

if(buscador){

buscador.addEventListener("input", function(){


    let texto = this.value.toLowerCase();


    let filtrados = clientes.filter(cliente =>

        (cliente.rfc || "")
        .toLowerCase()
        .includes(texto)

        ||

        (cliente.razon || "")
        .toLowerCase()
        .includes(texto)

    );


    mostrarClientes(filtrados);


});

}
