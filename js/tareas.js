
//almacenar tarea por tarea
const guardarTareas = (c, v) => {localStorage.setItem(c, v)};

//guardarTareas("task", JSON.stringify(tareasPendientes)); 

//añadir nueva tarea
let botonTarea = document.getElementById("btnTask");
botonTarea.addEventListener("click", () => {
    let nom = document.getElementById("tarea").value;
    let prio = document.getElementById("prioridad").value;
    let res = document.getElementById("responsable").value;
    let nueva = new Tarea(nom, prio, res);
    tareasPendientes.push(nueva);
    Swal.fire({
        icon: 'success',
        title: '¡MIAU!',
        text: 'Tu tarea se cargó correctamente',
        showConfirmButton: false,
        timer: 3000,
        color: '#f6f6f6',
        background: '#020202',
        iconHtml:'<i class="bi bi-check-circle-fill type-h3"></i>',
        iconColor:'#F1A9A0',
        backdrop: `rgba(255, 255, 255, 0.27)`
      });
    guardarTareas("task", JSON.stringify(tareasPendientes)); 
});


let tareaCompleta = document.getElementById("tareaRealizada");
tareaCompleta.addEventListener("click", () => {
    let tar = (prompt("Escribe la tarea realizada: \n")).toUpperCase();
    let taskSec =JSON.parse(localStorage.getItem('task'));
    const o = taskSec.findIndex(e => {
      return e.nombre === tar;
    });
    console.log(o);
    if (o > -1){
      taskSec[o].realizada = true;
      mensTareCom();
    }else{
      mensTareNoEn();
    }

    localStorage.setItem("task", JSON.stringify(taskSec));
})

//funciones auxiliares

function mensTareCom() {
  Swal.fire({
    icon: 'success',
    title: '¡Qué rico!',
    text: 'Completaste tu tarea correctamente y alimentaste a tu michi virtual',
    showConfirmButton: false,
    timer: 3000
  });
}

function mensTareNoEn() {
  Swal.fire({
    icon: 'success',
    title: 'Errooor',
    text: 'No encontramos la tarea',
    showConfirmButton: false,
    timer: 3000
  });
}