// Declaro un array para almacenar pacientes
let pacientes = [];

// Variable para llevar un registro del número de turno actual
let numeroDeTurnoActual = 0;

// Función para mostrar el menú y realizar la acción seleccionada
const mostrarMenu = () => {
    let opcion = prompt("Seleccione una opción:\n1. Agregar paciente\n2. Buscar paciente por turno o nombre \n3. Eliminar paciente por nombre o turno \n4. Mostrar lista de pacientes");

    if (opcion === "1") {
        // Agregar un paciente
        ingresarPaciente();
    } else if (opcion === "2") {
        // Realizar la búsqueda
        buscarPaciente();
    } else if (opcion === "3") {
        eliminarPaciente();
    }    
    else if (opcion === "4"){
        mostrarListaPacientes();
    }
    else {
        alert("Opción no válida. Por favor, seleccione 1, 2, 3 o 4.");
        mostrarMenu(); // Vuelve a mostrar el menú si la opción no es válida
    }
};

// Función para ingresar un paciente
const ingresarPaciente = () => {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let edad = prompt("Ingrese la edad del paciente:");
    let numeroDeTurno = numeroDeTurnoActual.toString().padStart(4, '0');
    numeroDeTurnoActual++;

    let paciente = {
        nombre: nombre,
        edad: edad,
        numeroDeTurno: numeroDeTurno
    };

    alert(`El nombre del paciente es: ${paciente.nombre}
Edad: ${paciente.edad}
y su turno es: ${paciente.numeroDeTurno}
    `)

    pacientes.push(paciente);
    mostrarMenu(); // Vuelve al menú después de agregar el paciente
};

// Función para buscar un paciente por turno o nombre
const buscarPaciente = () => {
    let opcionBusqueda = prompt("Seleccione una opción de búsqueda:\n1. Buscar por número de turno\n2. Buscar por nombre");

    if (opcionBusqueda === "1") {
        let numeroTurno = prompt("Ingrese el número de turno a buscar:");
        // Realiza la búsqueda por número de turno
        const pacienteEncontrado = pacientes.find(paciente => paciente.numeroDeTurno === numeroTurno);
        if (pacienteEncontrado) {
            alert(`Paciente encontrado:\nNombre: ${pacienteEncontrado.nombre}\nEdad: ${pacienteEncontrado.edad}`);
        } else {
            alert("Paciente no encontrado.");
        }
    } else if (opcionBusqueda === "2") {
        let nombre = prompt("Ingrese el nombre del paciente a buscar:");
        // Realiza la búsqueda por nombre
        const pacientesEncontrados = pacientes.filter(paciente => paciente.nombre === nombre);
        if (pacientesEncontrados.length > 0) {
            alert("Pacientes encontrados:");
            pacientesEncontrados.forEach(paciente => {
                alert(`Nombre: ${paciente.nombre}\nEdad: ${paciente.edad}\nNúmero de Turno: ${paciente.numeroDeTurno}`);
            });
        } else {
            alert("Paciente no encontrado.");
        }
    } else {
        alert("Opción no válida. Por favor, seleccione 1 o 2.");
        buscarPaciente(); // Vuelve a mostrar el menú de búsqueda si la opción no es válida
    }

    mostrarMenu(); // Vuelve al menú después de realizar la búsqueda
};


const eliminarPaciente = () => {
    let numeroTurnoEliminar = prompt("Ingrese el número de turno del paciente a eliminar:");

    // Buscar el índice del paciente en el array por su número de turno
    let indicePaciente = pacientes.findIndex(paciente => paciente.numeroDeTurno === numeroTurnoEliminar);

    if (indicePaciente !== -1) {
        // Si se encuentra el paciente, eliminarlo del array
        let pacienteEliminado = pacientes.splice(indicePaciente, 1)[0];
        alert(`Se ha eliminado al paciente:
    Nombre: ${pacienteEliminado.nombre}
    Edad: ${pacienteEliminado.edad}
    Turno: ${pacienteEliminado.numeroDeTurno}`);
    } else {
        alert(`No se encontró ningún paciente con el número de turno ${numeroTurnoEliminar}`);
    }

    mostrarMenu(); // Vuelve al menú después de eliminar el paciente
};

const mostrarListaPacientes = () => {
    if (pacientes.length === 0) {
        alert("No hay pacientes en la lista.");
        mostrarMenu();
        return;
    }

    let listaPacientes = "Lista de pacientes:\n";
    pacientes.forEach((paciente, indice) => {
        listaPacientes += `Paciente ${indice + 1}:
Nombre: ${paciente.nombre}
Edad: ${paciente.edad}
Turno: ${paciente.numeroDeTurno}\n\n`;
    });

    alert(listaPacientes);
    mostrarMenu();
};

// Inicia el proceso mostrando el menú
mostrarMenu();
