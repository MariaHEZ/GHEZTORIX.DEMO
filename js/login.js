function loginAdmin(){


let usuario =
document.getElementById("usuario").value;


let password =
document.getElementById("password").value;



if(
usuario==="admin" &&
password==="12345"
){


localStorage.setItem(
"tipo",
"administrador"
);


window.location.href=
"dashboard.html";


}

else{


alert(
"Usuario o contraseña incorrectos"
);


}


}
