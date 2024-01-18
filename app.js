// Función que elimina todas las ocurrencias de un caracter en una cadena.
function quitarCaracter(cadena, caracter) {
    return cadena.split(caracter).join('');
}

// Imprime un mensaje en la consola.
process.stdout.write("ejercicio\n\n");

// Inicializa las variables 'nombre' y 'apellido'.
let nombre = 'Juan david';
let apellido = 'CuellaR romero';

// Función que utiliza 'quitarCaracter' para eliminar espacios en blanco de una cadena.
function quitarCaracterNombre(cadena, caracter) {
    return quitarCaracter(cadena, caracter);
}

// Modifica la variable 'nombre' eliminando espacios en blanco.
nombre = quitarCaracterNombre(nombre, ' '); 

// Construye un 'nombreCompleto' formateado con la primera letra en mayúscula para el nombre y
// la primera letra en mayúscula para el primer apellido y el resto en minúscula.
let nombreCompleto =
    nombre[0].toUpperCase() +
    nombre.substring(1).toLowerCase() +
    " " +
    apellido.substring(0, 1).toUpperCase() +
    apellido.substring(1).toLowerCase();

// Imprime el 'nombreCompleto'.
console.log(nombreCompleto);

// Inicia un bucle while que imprime subcadenas decrecientes de 'nombreCompleto'.
let i = nombreCompleto.length;
while (i > 0) {
    console.log(i + " " + nombreCompleto.substring(0, i));
    i--;
}
