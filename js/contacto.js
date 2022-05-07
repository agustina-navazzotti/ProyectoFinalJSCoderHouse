function menEnviado(){
    Swal.fire({
        icon: 'success',
        title: '¡Genial!',
        text: 'Gracias por tu mensaje',
        showConfirmButton: false,
        timer: 3000
    });
}

function menNoEnviado(){
    Swal.fire({
        icon: 'success',
        title: '¡Ups!',
        text: 'Tu mensaje no puedo ser enviado',
        showConfirmButton: false,
        timer: 3000
    });
}

let nuevoContacto = document.getElementById("bntContacto");
nuevoContacto.addEventListener("submit", () => {
    let nom = document.getElementById("nombre").value;
    let corr = document.getElementById("correo").value;
    let sug = document.getElementById("sugerencia").value;
    fetch("https://formsubmit.co/ajax/marianavazzotti@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(new Tarea(nom, corr, sug))
    })
    .then(response => response.json())
    .then(menEnviado())
    .catch(menNoEnviado);
});
