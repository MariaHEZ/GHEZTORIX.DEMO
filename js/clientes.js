function loginCliente(){


let rfc =
document.getElementById("rfc").value;


let password =
document.getElementById("password").value;



let clientes =
JSON.parse(
localStorage.getItem("clientes")
) || [];



let cliente =
clientes.find(c=>

c.rfc === rfc &&
c.password === password

);



if(cliente){


localStorage.setItem(
"clienteActivo",
JSON.stringify(cliente)
);



window.location.href=
"portal-cliente.html";


}

else{


alert(
"Datos incorrectos"
);


}


}
