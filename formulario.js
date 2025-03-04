const comentar = document.getElementById ("comentar");
const nameInput = document.getElementById ("nameInput");
const mailInput = document.getElementById ("mailInput");
const comentarioInput = document.getElementById ("comentarioInput");
const title = document.getElementById ("title");
const gracias = document.getElementById ("gracias");

comentar.onclick = function () {
    //Ocultar los cambios
    nameInput.style.maxHeight = "0";
    mailInput.style.maxHeight = "0";
    comentarioInput.style.maxHeight = "0";
    //Cambiar el título por agradecimeinto
    title.innerHTML = "¡Gracias por escribir!";
    //Deshabilitar el botón
    comentar.classList.add("disable");
    
//RESTABLECER AUTOMATICAMENTE
    setTimeout(() => {
        
        nameInput.style.maxHeight = "100px"; // Ajusta esto según el estilo original
        mailInput.style.maxHeight = "100px"; // Ajusta esto según el estilo original
        comentarioInput.style.maxHeight = "100px"; // Ajusta esto según el estilo original
        
        nameInput.value = ""; // Limpiar campo nombre
        mailInput.value = ""; // Limpiar campo email
        comentarioInput.value = ""; // Limpiar campo comentario
        
        title.innerHTML = "Contáctenos:";
        comentar.classList.remove("disable");
        // Refrescar la página
        window.location.reload();
    }, 375);
    }