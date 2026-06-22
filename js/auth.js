function login() {
  const perfil = document.getElementById("perfil").value;
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();
const ADMIN_USER = "admin";
const ADMIN_PASS = "12345";

let clients = JSON.parse(localStorage.getItem("erp_clients")) || [];

/* LOGIN */
function login(){
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if(u === ADMIN_USER && p === ADMIN_PASS){
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
    render();
  } else {
    alert("Acceso denegado");
  }
}

/* LOGOUT */
function logout(){
  location.reload();
}

/* NAV */
function openModule(id){
  document.querySelectorAll(".module").forEach(m=>m.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

/* ADD CLIENT */
function addClient(){

  let c = {
    razon: razon.value,
    rfc: rfc.value,
    cp: cp.value,
    regimen: regimen.value,
    correo: correo.value,
    pass: passCli.value,
    firma: firma.value,
    actividad: actividad.value,
    documentos: [],
    comentarios: []
  };

  clients.push(c);

  localStorage.setItem("erp_clients", JSON.stringify(clients));

  render();
}

/* RENDER TABLE */
function render(){

  document.getElementById("total").innerText = clients.length;

  let table = document.getElementById("table");
  table.innerHTML = "";

  clients.forEach((c,i)=>{
    table.innerHTML += `
      <tr>
        <td>${c.razon}</td>
        <td>${c.rfc}</td>
        <td>${c.correo}</td>
        <td>
          <button onclick="edit(${i})">Editar</button>
          <button onclick="del(${i})">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

/* SEARCH */
function search(){

  let rfc = searchRfc.value;

  let c = clients.find(x => x.rfc === rfc);

  result.innerHTML = c
    ? `
      <div class="box">
        <h3>${c.razon}</h3>
        <p>RFC: ${c.rfc}</p>
        <p>Correo: ${c.correo}</p>
        <p>Regimen: ${c.regimen}</p>
        <p>Actividad: ${c.actividad}</p>

        <hr>

        <b>Módulos ERP:</b>
        <ul>
          <li>📄 Facturas electrónicas</li>
          <li>📊 Reportes mensuales</li>
          <li>💰 Estados de cuenta</li>
          <li>⬇ Descarga de facturas</li>
          <li>📝 Comentarios internos</li>
        </ul>
      </div>
    `
    : "No encontrado";
}

/* EDIT */
function edit(i){

  let c = clients[i];

  c.razon = prompt("Razón social", c.razon);
  c.correo = prompt("Correo", c.correo);
  c.cp = prompt("CP", c.cp);

  localStorage.setItem("erp_clients", JSON.stringify(clients));

  render();
}

/* DELETE */
function del(i){
  if(confirm("Eliminar cliente?")){
    clients.splice(i,1);

    localStorage.setItem("erp_clients", JSON.stringify(clients));

    render();
  }
}
  const adminUser = "admin@correo.com";
  const adminPass = "12345";

  if (perfil === "usuario") {
    if (usuario === adminUser && password === adminPass) {
      alert("Bienvenido Administrador");
      window.location.href = "panel.html"; // ✅ corregido
    } else {
      alert("Credenciales inválidas para Usuario");
    }
  } else if (perfil === "cliente") {
    if (usuario.length > 0 && password.length > 0) {
      alert("Bienvenido Cliente");
      window.location.href = "cliente.html"; // ✅ ya existe
    } else {
      alert("Por favor ingresa tus datos");
    }
  }
}
