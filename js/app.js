// ================= LOGIN / LOGOUT =================

function logout(){
    localStorage.removeItem("sesion");
    localStorage.removeItem("rol");
    window.location.href = "index.html";
}

// ================= NAVEGACIÓN DE SECCIONES =================

function mostrar(id){

    document.querySelectorAll(".seccion").forEach(sec => {
        sec.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");
}

// ================= BASE DE DATOS SIMULADA =================

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// ================= GUARDAR CLIENTE =================

function guardar(){

    const nombre = document.getElementById("nombre").value.trim();
    const rfc = document.getElementById("rfc").value.trim();
    const correo = document.getElementById("correo").value.trim();

    if(!nombre || !rfc || !correo){
        alert("Completa todos los campos");
        return;
    }

    const nuevo = { nombre, rfc, correo };

    clientes.push(nuevo);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    document.getElementById("nombre").value = "";
    document.getElementById("rfc").value = "";
    document.getElementById("correo").value = "";

    alert("Cliente guardado correctamente");

    renderClientes();
}

// ================= MOSTRAR CLIENTES =================

function renderClientes(){

    const tabla = document.getElementById("tablaClientes");
    tabla.innerHTML = "";

    clientes.forEach((c, index) => {

        tabla.innerHTML += `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.rfc}</td>
            <td>${c.correo}</td>
            <td>
                <button onclick="eliminar(${index})">Eliminar</button>
            </td>
        </tr>
        `;
    });
}

// ================= ELIMINAR =================

function eliminar(index){

    clientes.splice(index,1);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    renderClientes();
}

// ================= BUSCAR RFC =================

function buscar(){

    const rfc = document.getElementById("buscarRFC").value.trim();

    const resultado = clientes.find(c => c.rfc === rfc);

    if(resultado){
        document.getElementById("resultado").innerHTML =
        `<p><b>${resultado.nombre}</b> - ${resultado.correo}</p>`;
    }else{
        document.getElementById("resultado").innerHTML =
        "No encontrado";
    }
}

// ================= INICIAR =================

window.onload = function(){
    renderClientes();
};
