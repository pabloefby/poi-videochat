

var registrarte = document.getElementById("a-registrate");

var formularioInicio = document.getElementById("contInicioSesion");
var formularioRegistro = document.getElementById("contRegistro");
hideForm = false;

registrarte.addEventListener("click",function(e){
        formularioInicio.style.display = "none";
        formularioRegistro.style.display = "flex";
        hideForm = true;
});




