function validarFormulario() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var edad = document.getElementById("edad");
    var mensaje = document.getElementById("mensaje");

    if (nombre.value.length > 30) {
      nombre.classList.add("error");
      return false;
    } else {
      nombre.classList.remove("error");
    }

    if (email.value.length > 20 || (email.value && !email.value.includes('@'))) {
      email.classList.add("error");
      return false;
    } else {
      email.classList.remove("error");
    }

    if (edad.value < 18 || edad.value >= 100) {
      edad.classList.add("error");
      return false;
    } else {
      edad.classList.remove("error");
    }

    if (mensaje.value.length > 200) {
      mensaje.classList.add("error");
      return false;
    } else {
      mensaje.classList.remove("error");
    }

    
    var nombreMostrado = document.getElementById("nombreMostrado");
    var emailMostrado = document.getElementById("emailMostrado");
    var edadMostrada = document.getElementById("edadMostrada");
    var mensajeMostrado = document.getElementById("mensajeMostrado");

    nombreMostrado.textContent = nombre.value;
    emailMostrado.textContent = email.value;
    edadMostrada.textContent = edad.value;
    mensajeMostrado.textContent = mensaje.value;

    
    document.getElementById("form").classList.add("hidden");
    document.getElementById("datosIngresados").classList.remove("hidden");
    document.getElementById("mensajeEnviado").classList.remove("hidden");

    
    return false;
  }
  function ocultarMensaje() {
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("mensaje").value = "";
      
        
        document.getElementById("form").classList.remove("hidden");
      
        
        document.getElementById("datosIngresados").classList.add("hidden");
        document.getElementById("mensajeEnviado").classList.add("hidden");
    
    }