
document.querySelectorAll(".contacto").forEach(contacto => {

  contacto.addEventListener("click", function() {
    const nombre = this.getAttribute("data-nombre");
    document.getElementById("nombreContactoSelect").textContent = nombre;

  });

});

document.getElementById("usuarioPerfil").onclick = function() {

  window.location.href = "/src/profile/profile.html";

}

document.getElementById("logOutButton").onclick = function() {

  window.location.href = "/src/login/index.html";

}

