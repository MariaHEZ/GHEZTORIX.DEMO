let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function guardarCliente(){

    let nuevo = {
        id: Date.now(),
        nombre: document.getElementById("nombre").value,
        rfc: document.getElementById("rfc").value,
        correo: document.getElementById("correo").value,
        password: document.getElementById("passwordCliente").value
    };

    clientes.push(nuevo);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrar();
}

function mostrar(){

    let tabla = document.getElementById("tabla");
    tabla.innerHTML = "";

    clientes.forEach(c => {

        tabla.innerHTML += `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.rfc}</td>
            <td>${c.correo}</td>
            <td><button onclick="eliminar(${c.id})">Eliminar</button></td>
        </tr>`;
    });

}

function eliminar(id){

    clientes = clientes.filter(c => c.id !== id);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    mostrar();
}

function logout(){
    localStorage.removeItem("sesion");
    window.location.href="index.html";
}

mostrar();
