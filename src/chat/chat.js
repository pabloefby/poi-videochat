
document.querySelectorAll(".contacto").forEach(contacto => {

  contacto.addEventListener("click", function() {
    const nombre = this.getAttribute("data-nombre");
    document.getElementById("nombreContactoSelect").textContent = nombre;

  });

});




