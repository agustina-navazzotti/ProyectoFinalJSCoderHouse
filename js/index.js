const forms = document.getElementById('formulario');
const lista = document.getElementById('lista-tareas');
const template = document.getElementById('template-tarea').content;
const fragment = document.createDocumentFragment();

let tareasPendientes = {}

forms.addEventListener('submit', e => {
    e.preventDefault();
    nuevaTarea(e);
    msgTaskAdd();
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('task')){
        tareasPendientes = JSON.parse(localStorage.getItem('task'));
    }
    agregarTarea();
})

lista.addEventListener('click', e => {
    if (e.target.classList.contains('fa-paw')){
        tareasPendientes[e.target.dataset.id].realizada = true;
        msgTaskComplete ();
        agregarTarea();
    }

    if (e.target.classList.contains('fa-broom')){
        delete tareasPendientes[e.target.dataset.id];
        agregarTarea();
        msgTaskClean ();
    }

    e.stopPropagation();
})

const nuevaTarea = e => {
    const texto = document.getElementById('tarea').value
    const tarea = {
        id: makeRandomId(3),
        tex: texto,
        realizada: false
    }
    tareasPendientes[tarea.id] = tarea;
    forms.reset();
    agregarTarea();
}


const agregarTarea = () => {

    localStorage.setItem('task', JSON.stringify(tareasPendientes));

    if(Object.values(tareasPendientes).length === 0){
         lista.innerHTML = `
            <div class="type-h1 mt-4">😺</div>
	 		<div class= "text-center type-regular type-h2 c-blanco">¡Día libre!</div>
 		    <div class= "text-center type-thin type-5 c-blanco mt-3">Juegá con tu michi, mirá una peli o llamá a tu amigx ❤️</div>
        `
         return;
     }

    lista.innerHTML = ''
    Object.values(tareasPendientes).forEach(tarea =>{
        const plantilla = template.cloneNode(true);
        plantilla.querySelector('p').textContent = tarea.tex;
        
        if (tarea.realizada){
            plantilla.querySelector('.ficha').classList.replace('fichaB', 'fichaTrue');
            plantilla.querySelectorAll('.fa-solid')[0].classList.replace('colorIconfts', 'colorIcon');
        }
        
        plantilla.querySelectorAll('.fa-solid')[0].dataset.id = tarea.id;
        plantilla.querySelectorAll('.fa-solid')[1].dataset.id = tarea.id;
        fragment.appendChild(plantilla);
    })
    lista.appendChild(fragment);
}

const makeRandomId= (length) => {
    let result = ''
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

function msgTaskAdd (){
    Swal.fire({
        icon: 'success',
        title: '¡MIAU!',
        text: 'Tu tarea se cargó correctamente',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<h3>😿</h3>',
        iconColor:'#FFFFFF',
        backdrop: `rgba(255, 255, 255, 0.27)`
      });
}

function msgTaskComplete (){
    Swal.fire({
        title:'¡Qué rico!',
        text: 'Completaste tu tarea correctamente y alimentaste a tu michi virtual',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<h3>🍣</h3>',
        iconColor:'#FFFFFF',
        backdrop: `rgba(255, 255, 255, 0.27)`
      });
}

function msgTaskClean (){
    Swal.fire({
        title:'No es fundamental',
        text: 'Eliminaste una tarea que mucho no muy interesante... Tu michi juega',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<h3>🧶</h3>',
        iconColor:'#FFFFFF',
        backdrop: `rgba(255, 255, 255, 0.27)`
      });
}