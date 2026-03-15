let tareasTotales = [];

function crearTarea(descripcion, firmada, materia) {
    return {
        id: tareasTotales.length + 1,
        descripcion,
        firmada,
        materia
    };
}


function mostrarTarea(tarea) {
    return `Descripcion: ${tarea.descripcion}\nFirmada: ${tarea.firmada ? "Si" : "No"}\nMateria: ${tarea.materia}`;
}

// Se llama a la funcion crearTarea la cual te devuelve un objeto y despues se llama a la funcion que muestra la tarea
const tarea = crearTarea("Hacer resumen del capitulo 3", true, "Ciencias");
console.log(mostrarTarea(tarea));


function registrarTareas(nuevaTarea) {
    return [...tareasTotales, nuevaTarea];
}

tareasTotales = registrarTareas(tarea);
console.log(tareasTotales);

function buscarTareaPorID(idRecibido){
    return tareasTotales.find(tareasTotales => tareasTotales.id === idRecibido);
}

function completarTarea(){
    tareasTotales = tareasTotales.map(tarea =>
        tarea.firmada === true ? { ...tarea, firmada: true } : 'la tarea no se ha completada'
    );
    return tareasTotales;
}

function eliminarTarea(idRecibido) {
    tareasTotales = tareasTotales.filter(tarea => tarea.id !== idRecibido);
    return tareasTotales;
}


// Lo que hace la funcion Map es que recorre y si los id son iguales, primero copia la tarea vieja y despues agrega los nuevos datos.
function actualizarTarea(nuevaTarea) {
    tareasTotales = tareasTotales.map(tarea =>
        tarea.id === nuevaTarea.id ? { ...tarea, ...nuevaTarea } : tarea
    );
    return tareasTotales;
}

function actualizarPrioridad(idRecibido, nuevaPrioridad) {
    tareasTotales = tareasTotales.map(tarea =>
        tarea.id === idRecibido ? { ...tarea, prioridad: nuevaPrioridad } : tarea
    );
    return tareasTotales;
} // Map crea un arrary nuevo con los datos anteriores y algo mas pero al igualarlo a tareasTotales, se actualiza el array original.
  // En este caso, se agrega el atributo prioridad a la tarea que tenga el id igual al id recibido.

  


