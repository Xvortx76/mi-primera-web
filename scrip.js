
alert ("¡bienvenido a mi sitio web !");

function cambiarColorFondo(){
    document.body.style.backgroundColor = "#ffffff";
}



function toggleInformacion() {
  const info = document.getElementById("info");

  if (info.style.display === "none") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}


let clics = 0 

function incrementarContador() {
    clics++;
    document.getElementById("contador").textContent = `has hecho clic ${clics} veces.`;
}