console.log("Lista de clientes cargada");

// Obtener clientes
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const contenedor = document.getElementById("listaClientes");
const buscador = document.getElementById("buscador");

// 🚨 Validación de elementos
if (!contenedor) {
    console.error("No existe #listaClientes en el HTML");
}

// Renderizar clientes
function mostrarClientes(lista) {

    if (!contenedor) return;

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="vacio">
                <h3>No hay clientes registrados</h3>
            </div>
        `;
        return;
    }

    lista.forEach(cliente => {

        contenedor.innerHTML += `
            <div class="cliente-card">

                <h3>${cliente.razon || "Sin nombre"}</h3>

                <p><b>RFC:</b> ${cliente.rfc}</p>
                <p><b>Correo:</b> ${cliente.correo}</p>
                <p><b>Teléfono:</b> ${cliente.telefono}</p>
                <p><b>Régimen:</b> ${cliente.regimen}</p>

                <div class="acciones">

                    <button onclick="verExpediente(${cliente.id})">
                        📁 Expediente
                    </button>

                    <button onclick="eliminarCliente(${cliente.id})">
                        🗑 Eliminar
                    </button>

                </div>

            </div>
        `;
    });
}

// 🔍 BUSCADOR (seguro)
if (buscador) {
    buscador.addEventListener("input", function () {

        const texto = this.value.toLowerCase();

        const filtrados = clientes.filter(c =>
            (c.razon || "").toLowerCase().includes(texto) ||
            (c.rfc || "").toLowerCase().includes(texto) ||
            (c.correo || "").toLowerCase().includes(texto)
        );

        mostrarClientes(filtrados);
    });
}

// 📁 Expediente
function verExpediente(id) {
    localStorage.setItem("clienteActivo", id);
    window.location.href = "expediente.html";
}

// 🗑 Eliminar cliente
function eliminarCliente(id) {

    clientes = clientes.filter(c => c.id !== id);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrarClientes(clientes);
}

// Inicial
mostrarClientes(clientes);
