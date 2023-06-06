setTimeout(function() {
    var respuesta = confirm("¿Quieres recibir novedades?");
  
    if (respuesta) {
      alert("¡Gracias por suscribirte a nuestras novedades!");
    } else {
      alert("¡Entendido! No te enviaremos nuestras novedades.");
    }
  }, 2000); // Se establece un retraso de 2000 milisegundos (2 segundos)