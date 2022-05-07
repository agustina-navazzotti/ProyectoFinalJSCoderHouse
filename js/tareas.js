

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
        timer: 3000
      });
    guardarTareas("task", JSON.stringify(tareasPendientes)); 
});


//marcar tarea como realizada

let tareaCompleta = document.getElementById("tareaRealizada");
tareaCompleta.addEventListener("click", () => {
    let tar = (prompt("Escribe la tarea realizada: \n")).toUpperCase();
    let taskSec =JSON.parse(localStorage.getItem('task'));
    let i;
    taskSec.forEach(Tarea =>{
        Tarea.nombre === tar && (i= taskSec.indexOf(Tarea));
        }
    );
    tareasPendientes[i].realizada = true; 
    Swal.fire({
        icon: 'success',
        title: '¡Qué rico!',
        text: 'Completaste tu tarea correctamente y alimentaste a tu michi virtual',
        showConfirmButton: false,
        timer: 3000
      });
    localStorage.setItem("task", JSON.stringify(tareasPendientes));
})

