
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


function saludar() {
  let nombre = document.getElementById("nombreInput").value;
  let edad = parseInt(document.getElementById("edadInput").value);

  let mensaje = "";

  if (nombre === "" || isNaN(edad)) {
    mensaje = "Por favor, completa ambos campos.";
  } else {
    mensaje = `Hola ${nombre}, `;
    mensaje += (edad >= 18) ? "eres mayor de edad." : "eres menor de edad.";
  }

  document.getElementById("mensaje").textContent = mensaje;
}

