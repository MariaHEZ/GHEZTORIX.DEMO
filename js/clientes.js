console.log("clientes.js cargado");

// Obtener clientes
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Guardar en localStorage
function guardarClientes(){
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

// Mostrar clientes en pantalla
function mostrarClientes(){

    const contenedor = document.getElementById("listaClientes");

    if(!contenedor) return;

    contenedor.innerHTML = "";

    clientes.forEach((c, index) => {

        contenedor.innerHTML += `
            <div style="padding:10px;border:1px solid #ccc;margin:5px;">
                <b>${c.razon}</b><br>
                RFC: ${c.rfc}<br>
                ${c.correo}
            </div>
        `;
    });

}

mostrarClientes();

// Guardar cliente nuevo
document.getElementById("formCliente").addEventListener("submit", function(e){

    e.preventDefault();

    const nuevoCliente = {
        razon: document.getElementById("razon").value,
        rfc: document.getElementById("rfc").value.toUpperCase(),
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        password: document.getElementById("password").value
    };

    clientes.push(nuevoCliente);

    guardarClientes();

    mostrarClientes();

    this.reset();

    alert("Cliente guardado correctamente");

});
