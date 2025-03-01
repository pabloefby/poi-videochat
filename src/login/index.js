
var ocultar = document.getElementById("hideshowForm");
var formularioInicio = document.getElementById("contInicioSesion");
var formularioRegistro = document.getElementById("contRegistro");
hideForm = false;

ocultar.addEventListener("click",function(e){

    if(!hideForm){
        formularioInicio.style.display = "none";
        formularioRegistro.style.display = "flex";
        hideForm = true;
    }else{
        formularioInicio.style.display = "flex";
        formularioRegistro.style.display = "none";
        hideForm = false;
    }

});


