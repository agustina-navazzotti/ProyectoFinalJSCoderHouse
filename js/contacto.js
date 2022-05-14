const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_ymeqxtc';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR MENSAJE';
      menEnviado();
    }, (err) => {
      btn.value = 'ENVIAR MENSAJE';
      menNoEnviado();
      //alert(JSON.stringify(err));
    });
});

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
