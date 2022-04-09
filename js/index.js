//este programa gestiona tareas

//construcción del objeto tarea

class Tarea {
    constructor(nombre, dificultad) {
        this.nombre  = nombre.toUpperCase();
        this.prioridad  = parseFloat(dificultad);
        this.resposable = resposable.toUpperCase();
        this.realizada = false;
    }

    hacerTarea() {
        this.realizado = true;
    }
}

//declaración de arreglo para almacenar tareas

const tareas = [];

alert("Realizá tu lista de tareas");

var opcion = parseInt(prompt("MENÚ (Elegí una opción para realizar una acción: \n 1. Agregar tarea pendiente \n 2. Marcar tarea como realizada \n 3. Filtrar tareas urgentes y prioritarias \n 4.Mostrar lista de tareas pendientes \n 5. Mostrar tareas que tengan de responsable a \n 6. Imprimir  lista de tareas completa (responsables, prioridad y estado) \n 7. Para salir \n"));

while (opcion != 7){
    switch(opcion){
        case 1:
            //cargar nueva tarea al arreglo "tareas"
            let nom = prompt("Tarea pendiente: \n");
            let prio = prompt("Evalue la prioridad del 1 al 5. 5 equivale a prioridad máxima, 1 a mínima prioridad \n");
            let res = prompt("Asigná un responsable a la tarea \n");
            tareas.push(new Tarea(nom, prio, res));
            break;
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
}