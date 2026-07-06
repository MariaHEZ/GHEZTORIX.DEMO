console.log("clientes.js cargado");

let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

function guardarClientes(){
    localStorage.setItem("clientes", JSON.stringify(clientes));
}

function mostrarClientes(){

    const contenedor = document.getElementById("listaClientes");
    if(!contenedor) return;

    contenedor.innerHTML = "";

    clientes.forEach((c) => {

        const div = document.createElement("div");
        div.style.padding = "10px";
        div.style.border = "1px solid #ccc";
        div.style.margin = "5px";

        div.innerHTML = `
            <b>${c.razon || ""}</b><br>
            RFC: ${c.rfc || ""}<br>
            ${c.correo || ""}
        `;

        contenedor.appendChild(div);
    });
}

// Esperar a que cargue el DOM (IMPORTANTE)
document.addEventListener("DOMContentLoaded", function(){

    mostrarClientes();

    const form = document.getElementById("formCliente");

    if(!form){
        console.warn("No existe formCliente en esta página");
        return;
    }

    form.addEventListener("submit", function(e){

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

        form.reset();

        alert("Cliente guardado correctamente");

    });

});
