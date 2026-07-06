console.log("clientes.js cargado");
// Obtener clientes guardados o crear lista vacía
let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

// Mostrar clientes en consola
console.log("Clientes cargados:", clientes);
