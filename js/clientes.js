console.log("Lista de clientes cargada");

// Obtener clientes
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Validar elementos del DOM (IMPORTANTE)
const contenedor = document.getElementById("listaClientes");
const buscador = document.getElementById("buscador");

// Evita errores si no existen en la página
if (!contenedor) {
  console.error("No existe #listaClientes en el HTML");
}

function mostrar(lista) {

  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No hay clientes registrados</p>";
    return;
  }

  lista.forEach(c => {

    contenedor.innerHTML += `
      <div class="card-cliente">
        <h3>${c.razon}</h3>
        <p><b>RFC:</b> ${c.rfc}</p>
        <p><b>Correo:</b> ${c.correo}</p>
        <p><b>Tel:</b> ${c.telefono}</p>
      </div>
    `;
  });
}

// BUSCADOR (solo si existe)
if (buscador) {

  buscador.addEventListener("input", () => {

    const texto = buscador.value.toLowerCase();

    const filtrados = clientes.filter(c =>
      c.razon.toLowerCase().includes(texto) ||
      c.rfc.toLowerCase().includes(texto) ||
      c.correo.toLowerCase().includes(texto)
    );

    mostrar(filtrados);
  });

}

// INICIAL
mostrar(clientes);
