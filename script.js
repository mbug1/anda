// Esperamos que el documento se haya cargado completamente
window.onload = function() {
    // Obtener el botón y el párrafo donde se mostrará el mensaje
    const btnSaludo = document.getElementById("btn-saludo");
    const mensaje = document.getElementById("mensaje");
  
    // Añadir un evento para el clic en el botón
    btnSaludo.onclick = function() {
      mensaje.textContent = "¡Bienvenido a la Asociación de Ajedrez!";
    };
  };  