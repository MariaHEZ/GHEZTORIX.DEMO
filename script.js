const USER = "admin@gheztorix.com";
const PASS = "12345";

let clientes = JSON.parse(localStorage.getItem("clientesGZ")) || [];

// LOGIN
function login(){
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  if(usuario === USER && password === PASS){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("panel").classList.remove("hidden");
  } else {
    alert("Datos incorrectos");
  }
}

// MOSTRAR SECCIONES
function mostrar(id){
  document.getElementById("clientes").classList.add("hidden");
  document.getElementById("consultas").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");

  if(id === "clientes") renderClientes();
}

// AGREGAR CLIENTE
function agregarCliente(){

  const nombre = document.getElementById("nombre").value.trim();
  const rfc = document.getElementById("rfc").value.trim();
  const correo = document.getElementById("correo").value.trim();

  if(nombre === "" || rfc === "" || correo === ""){
    alert("Completa todos los campos");
    return;
  }

  clientes.push({nombre, rfc, correo});

  localStorage.setItem("clientesGZ", JSON.stringify(clientes));

  alert("Cliente agregado");

  renderClientes();
}

// MOSTRAR CLIENTES
function renderClientes(){

  let cont = document.getElementById("listaClientes");
  cont.innerHTML = "";

  clientes.forEach((c,i)=>{
    cont.innerHTML += `
      <p>
        <b>${c.nombre}</b> - ${c.rfc} - ${c.correo}
        <button onclick="editar(${i})">Editar</button>
        <button onclick="eliminar(${i})">Eliminar</button>
      </p>
    `;
  });
}

// BUSCAR CLIENTE
function buscarCliente(){

  const rfc = document.getElementById("buscarRFC").value.trim();

  let c = clientes.find(x => x.rfc === rfc);

  document.getElementById("resultado").innerHTML =
    c ? `<p>${c.nombre} - ${c.correo}</p>` : "No encontrado";
}

// EDITAR
function editar(i){

  let nuevoNombre = prompt("Nuevo nombre:", clientes[i].nombre);
  let nuevoCorreo = prompt("Nuevo correo:", clientes[i].correo);

  if(nuevoNombre && nuevoCorreo){
    clientes[i].nombre = nuevoNombre;
    clientes[i].correo = nuevoCorreo;

    localStorage.setItem("clientesGZ", JSON.stringify(clientes));

    renderClientes();
  }
}

// ELIMINAR
function eliminar(i){

  if(confirm("¿Eliminar cliente?")){
    clientes.splice(i,1);

    localStorage.setItem("clientesGZ", JSON.stringify(clientes));

    renderClientes();
  }
}
