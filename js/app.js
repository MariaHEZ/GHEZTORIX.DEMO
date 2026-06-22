// =======================
// LOGIN
// =======================
function login(){

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("password").value;

    const usuarios = [
        {u:"admin@gheztorix.com", p:"123456", rol:"admin"},
        {u:"cliente1", p:"123456", rol:"cliente"}
    ];

    const ok = usuarios.find(x => x.u === user && x.p === pass);

    if(ok){

        localStorage.setItem("rol", ok.rol);
        localStorage.setItem("sesion", "ok");

        window.location.href = "dashboard.html";

    }else{
        document.getElementById("error").innerText =
        "Datos incorrectos";
    }
}

// =======================
// LOGOUT
// =======================
function logout(){
    localStorage.clear();
    window.location.href = "index.html";
}

// =======================
// DATOS
// =======================
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// =======================
// GUARDAR CLIENTE
// =======================
function guardar(){

    let c = {
        nombre:document.getElementById("nombre").value,
        rfc:document.getElementById("rfc").value,
        correo:document.getElementById("correo").value
    };

    clientes.push(c);
    localStorage.setItem("clientes", JSON.stringify(clientes));

    alert("Cliente guardado");

    render();
}

// =======================
// MOSTRAR CLIENTES
// =======================
function render(){

    let tabla = document.getElementById("tablaClientes");
    if(!tabla) return;

    tabla.innerHTML = "";

    clientes.forEach(c => {
        tabla.innerHTML += `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.rfc}</td>
            <td>${c.correo}</td>
        </tr>`;
    });
}

// =======================
// BUSCAR RFC
// =======================
function buscar(){

    let rfc = document.getElementById("buscarRFC").value;

    let c = clientes.find(x => x.rfc === rfc);

    document.getElementById("resultado").innerHTML =
    c ? `<p>${c.nombre} - ${c.correo}</p>` : "No encontrado";
}

// =======================
// NAVEGACIÓN
// =======================
function mostrar(id){

    document.querySelectorAll(".seccion")
    .forEach(s => s.classList.add("oculto"));

    document.getElementById(id).classList.remove("oculto");
}

// init
render();
