console.log("Lista de clientes cargada");

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

const contenedor = document.getElementById("listaClientes");
const buscador = document.getElementById("buscador");

// Renderizar clientes
function mostrarClientes(lista) {

    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No hay clientes registrados</p>";
        return;
    }

    lista.forEach(cliente => {

        contenedor.innerHTML += `
            <div class="cliente-card">
                <h3>${cliente.razon}</h3>
                <p><b>RFC:</b> ${cliente.rfc}</p>
                <p><b>Correo:</b> ${cliente.correo}</p>
                <p><b>Teléfono:</b> ${cliente.telefono}</p>
                <p><b>Régimen:</b> ${cliente.regimen}</p>

                <button onclick="verExpediente(${cliente.id})">
                    📁 Acceder al expediente
                </button>
            </div>
            <hr>
        `;
    });
}

// Búsqueda
buscador.addEventListener("input", function () {

    const texto = this.value.toLowerCase();

    const filtrados = clientes.filter(c =>
        c.razon.toLowerCase().includes(texto) ||
        c.rfc.toLowerCase().includes(texto) ||
        c.correo.toLowerCase().includes(texto)
    );

    mostrarClientes(filtrados);
});

// Expediente
function verExpediente(id) {
    localStorage.setItem("clienteActivo", id);
    window.location.href = "expediente.html";
}

// inicial
mostrarClientes(clientes);
