/*=================================================
                GHEZTORIX
 Sistema Digital para la Gestión de Despachos
=================================================*/

// =============================
// USUARIO ADMINISTRADOR
// =============================

const USUARIO = {
    correo: "admin@gheztorix.com",
    password: "123456"
};

// =============================
// BASE DE DATOS LOCAL
// =============================

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// =============================
// LOGIN
// =============================

function iniciarSesion(){

    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const mensaje = document.getElementById("mensajeLogin");

    if(correo === USUARIO.correo && password === USUARIO.password){

        document.getElementById("loginPage").classList.add("d-none");
        document.getElementById("dashboard").classList.remove("d-none");

        mensaje.innerHTML = "";

        cargarClientes();

        actualizarIndicadores();

    }else{

        mensaje.innerHTML="❌ Correo o contraseña incorrectos.";
        mensaje.style.color="red";

    }

}

// =============================
// CERRAR SESIÓN
// =============================

function cerrarSesion(){

    document.getElementById("dashboard").classList.add("d-none");
    document.getElementById("loginPage").classList.remove("d-none");

    document.getElementById("correo").value="";
    document.getElementById("password").value="";

}

// =============================
// MENÚ
// =============================

function mostrarSeccion(id){

    document.querySelectorAll(".pagina").forEach(sec=>{

        sec.classList.add("d-none");

    });

    document.getElementById(id).classList.remove("d-none");

}

// =============================
// GUARDAR CLIENTE
// =============================

function guardarCliente(){

    let cliente={

        rfc:document.getElementById("rfc").value.trim(),

        razon:document.getElementById("razon").value.trim(),

        correo:document.getElementById("correoCliente").value.trim(),

        telefono:document.getElementById("telefono").value.trim()

    };

    if(cliente.rfc==="" || cliente.razon===""){

        alert("Complete RFC y Razón Social.");

        return;

    }

    clientes.push(cliente);

    localStorage.setItem("clientes",JSON.stringify(clientes));

    limpiarFormulario();

    cargarClientes();

    actualizarIndicadores();

    mostrarSeccion("clientes");

}

// =============================
// LIMPIAR FORMULARIO
// =============================

function limpiarFormulario(){

    document.getElementById("rfc").value="";
    document.getElementById("razon").value="";
    document.getElementById("correoCliente").value="";
    document.getElementById("telefono").value="";

}

// =============================
// MOSTRAR CLIENTES
// =============================

function cargarClientes(){

    let tabla=document.getElementById("tablaClientes");

    tabla.innerHTML="";

    clientes.forEach((cliente,index)=>{

        tabla.innerHTML+=`

        <tr>

        <td>${cliente.rfc}</td>

        <td>${cliente.razon}</td>

        <td>${cliente.correo}</td>

        <td>${cliente.telefono}</td>

      <td>


<button class="btn btn-primary btn-sm me-2"

onclick="abrirExpediente(${index})">

<i class="bi bi-folder2-open"></i>

Expediente

</button>


<button class="btn btn-warning btn-sm me-2"

onclick="editarCliente(${index})">

Editar

</button>


<button class="btn btn-danger btn-sm"

onclick="eliminarCliente(${index})">

Eliminar

</button>


</td>
 </tr>

        `;

    });

}


// =============================
// BUSCADOR
// =============================

document.addEventListener("DOMContentLoaded",()=>{

    const buscador=document.getElementById("buscarCliente");

    buscador.addEventListener("keyup",function(){

        let texto=this.value.toLowerCase();

        let filas=document.querySelectorAll("#tablaClientes tr");

        filas.forEach(fila=>{

            let contenido=fila.textContent.toLowerCase();

            fila.style.display=contenido.includes(texto)?"":"none";

        });

    });

});

// =============================
// INDICADORES
// =============================

function actualizarIndicadores(){

    document.getElementById("totalClientes").innerHTML=clientes.length;

}

// =============================
// ABRIR EXPEDIENTE CLIENTE
// =============================

function abrirExpediente(index){

    const cliente = clientes[index];


    mostrarSeccion("expediente");


    document.getElementById("expNombre").innerHTML =
    cliente.razon;


    document.getElementById("expRFC").innerHTML =
    cliente.rfc;


    document.getElementById("expCorreo").innerHTML =
    cliente.correo;


    document.getElementById("expTelefono").innerHTML =
    cliente.telefono;

}
