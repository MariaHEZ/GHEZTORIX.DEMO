function entrar(tipo){


localStorage.setItem(
"tipoUsuario",
tipo
);


if(tipo==="admin"){


window.location.href="dashboard.html";


}else{


alert(
"Acceso cliente próximamente"
);


}


}
