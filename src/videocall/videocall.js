var video = document.querySelector("#usuario-1");
var video2 = document.querySelector("#usuario-2"); 

var microfonoEncendido = true;
let micButton = document.getElementById("btn-Mic");

var camaraEncendida = true;
let camButton = document.getElementById("btn-Cam");

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream; 
    })
    .catch(function (error) {
      console.error("Error al acceder a la cámara:", error);
      alert("Error al acceder a la cámara.");
    });
} else {
  alert("Tu navegador no soporta getUserMedia");
}


micButton.onclick = function(){
  if(microfonoEncendido){

    microfonoEncendido = false;
    micButton.style.backgroundColor = "#D24735";
    micButton.innerHTML = "<i class='bx bxs-microphone-off'></i>";

  }else{

    microfonoEncendido = true;
    micButton.style.backgroundColor = "#2CBC9F";
    micButton.innerHTML = "<i class='bx bxs-microphone'></i>";

  }

};

camButton.onclick = function(){
  if(camaraEncendida){

    camaraEncendida = false;
    camButton.style.backgroundColor = "#D24735";
    camButton.innerHTML = "<i class='bx bxs-video-off'></i>";

  }else{

    camaraEncendida = true;
    camButton.style.backgroundColor = "#2CBC9F";
    camButton.innerHTML = "<i class='bx bxs-video'></i>";

  }

};


