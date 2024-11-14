function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function mostrarRespuesta(respuestaId, botonId){
    document.getElementById(respuestaId).style.display ="block";
    document.getElementById(botonId).style.display="none"
}