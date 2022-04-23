//construcción del objeto tarea

class Tarea {
    constructor(nombre, prioridad, responsable) {
        this.nombre = nombre.toUpperCase();
        this.prioridad  = parseFloat(prioridad);
        this.responsable = responsable.toUpperCase();
        this.realizada = false;
    }

    hacerTarea() {
        this.realizado = true;
    }
}

//declaración de arreglo para almacenar tareas pendientes

var tareasPendientes = [];

//añadir nueva tarea
let botonTarea = document.getElementById("btnTask");
botonTarea.addEventListener("click", () => {
    let nom = document.getElementById("tarea").value;
    let prio = document.getElementById("prioridad").value;
    let res = document.getElementById("responsable").value;
    tareasPendientes.push(new Tarea(nom, prio, res));
    alert(`Tarea asignada: \n Nombre: ${nom} \n Prioridad: ${prio} \n Responsable: ${res}`);
    localStorage.setItem("task", JSON.stringify(tareasPendientes));
})

//marcar tarea como realizada

let tareaCompleta = document.getElementById("tareaRealizada");
tareaCompleta.addEventListener("click", () => {
    let tar = prompt("Escribe la tarea realizada: \n");
    let i = localStorage.getItem(JSON.parse(tareasPendientes).indexOf(tar.toUpperCase));
    tareasPendientes[i].hacerTarea();
    alert(`Tarea completa`);
    localStorage.setItem("task", JSON.stringify(tareas));
})

/* var opcion = parseInt(prompt("MENÚ (Elegí una opción para realizar una acción: \n 1. Agregar tarea pendiente \n 2. Marcar tarea como realizada \n 3. Filtrar tareas urgentes y prioritarias \n 4.Mostrar lista de tareas pendientes \n 5. Mostrar tareas que tengan de responsable a \n 6. Imprimir  lista de tareas completa (responsables, prioridad y estado) \n 7. Para salir \n"));

while (opcion != 7){
    switch(opcion){
        case 1:
            //cargar nueva tarea al arreglo "tareas"
            
        case 2:
            let tar = prompt("Escribe la tarea realizada: \n");
            let i = tareas.indexOf(tar.toUpperCase);
            tareas[i].hacerTarea();
            break;
        case 3:
            //filtra las tareas de mayor prioridad y las muestra con un alert
            alert(tareas.filter((el) => el.prioridad >= 4));
            break;
        case 4:
            //filtra las tareas pendientes y las muestra con un alert
            alert(tareas.filter((el) => el.realizada === False));
            break;
        case 5:
            //Filtra las tareas segun responsable
            let resp = prompt("Escribí el nombre de la persona de la que queres saber sus tareas asignadas: \n");
            alert(tareas.filter((el) => el.resposable === resp.toUpperCase));
            break;
        case 6:
            //Imprime en un alert la lista de tareas completa
            alert(tareas.join("\n"));
        default:
            alert("Volvé a ingresar una opción");
            break;
    }
    opcion = parseInt(prompt("MENÚ (Elegí una opción para realizar una acción: \n 1. Agregar tarea pendiente \n 2. Marcar tarea como realizada \n 3. Filtrar tareas urgentes y prioritarias \n 4.Mostrar lista de tareas pendientes \n 5. Mostrar tareas que tengan de responsable a \n 6. Para salir \n"));
}*/