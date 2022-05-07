//construcción del objeto tarea

class Tarea {
    constructor(nombre, prioridad, responsable) {
        this.nombre = nombre.toUpperCase();
        this.prioridad  = parseFloat(prioridad);
        this.responsable = responsable.toUpperCase();
        this.realizada = false;
    }
}

//construcción del obejto persona contacto

class ContactoPersona {
    constructor(nombre, email, mensaje) {
        this.nombre = nombre.toUpperCase();
        this.email  = email.toUpperCase();
        this.mensaje = mensaje;
    }
}


/*Creación de variables si el localStorege está vacio en esa clave,
sino la variable toma los valores del localStorange*/

var localT = JSON.parse(localStorage.getItem('task')); //variable que almacena la clave task del localStorage, se usa solo para i

if (localT =! []){
    tareasPendientes = localStorage.getItem('task')
}else{
    var tareasPendientes = [];
}

