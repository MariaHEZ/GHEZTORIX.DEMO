const USER = "admin@gheztorix.com";
const PASS = "12345";

let clients = JSON.parse(localStorage.getItem("gheztorix_clients")) || [];

/* LOGIN */
function login(){
  const u = document.getElementById("usuario").value.trim();
  const p = document.getElementById("password").value.trim();

  if(u === USER && p === PASS){
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
    render();
  }else{
    alert("Credenciales incorrectas");
  }
}

/* NAV */
function showModule(id){
  document.querySelectorAll(".module").forEach(m => m.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* ADD CLIENT */
function addClient(){

  const name = document.getElementById("nombre").value.trim();
  const rfc = document.getElementById("rfc").value.trim();
  const email = document.getElementById("correo").value.trim();

  if(!name || !rfc || !email){
    alert("Completa todos los campos");
    return;
  }

  clients.push({name, rfc, email});

  localStorage.setItem("gheztorix_clients", JSON.stringify(clients));

  render();
}

/* RENDER TABLE */
function render(){

  document.getElementById("totalClientes").innerText = clients.length;

  let tbody = document.getElementById("tablaClientes");
  tbody.innerHTML = "";

  clients.forEach((c,i)=>{
    tbody.innerHTML += `
      <tr>
        <td>${c.name}</td>
        <td>${c.rfc}</td>
        <td>${c.email}</td>
        <td>
          <button onclick="edit(${i})">Editar</button>
          <button onclick="del(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

/* SEARCH */
function searchClient(){

  const rfc = document.getElementById("buscarRFC").value.trim();

  const c = clients.find(x => x.rfc === rfc);

  document.getElementById("resultado").innerHTML =
    c
    ? `<div class="card">✔ ${c.name} - ${c.email}</div>`
    : "No encontrado";
}

/* EDIT */
function edit(i){
  const n = prompt("Nuevo nombre", clients[i].name);
  const e = prompt("Nuevo correo", clients[i].email);

  if(n && e){
    clients[i].name = n;
    clients[i].email = e;

    localStorage.setItem("gheztorix_clients", JSON.stringify(clients));
    render();
  }
}

/* DELETE */
function del(i){
  if(confirm("¿Eliminar cliente?")){
    clients.splice(i,1);

    localStorage.setItem("gheztorix_clients", JSON.stringify(clients));
    render();
  }
}
