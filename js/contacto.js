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
    });
});

function menEnviado(){
    Swal.fire({
        icon: 'success',
        title: '¡Genial!',
        text: 'Gracias por tu mensaje',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<i class="bi bi-heart-fill type-h3"></i>',
        iconColor:'#F1A9A0',
        backdrop: `rgba(255, 255, 255, 0.27)`
    });
}

function menNoEnviado(){
    Swal.fire({
        icon: 'success',
        title: '¡Ups!',
        text: 'Tu mensaje no puedo ser enviado',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<i class="bi bi-heartbreak-fill type-h3"></i>',
        iconColor:'#F1A9A0',
        backdrop: `rgba(255, 255, 255, 0.27)`
    });
}
