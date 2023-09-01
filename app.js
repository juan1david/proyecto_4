function quitarCaracter(cadena, caracter) {
    return cadena.split(caracter).join('');
}

process.stdout.write("ejercicio\n\n");

let nombre = 'Juan david';
let apellido = 'CuellaR romero';

function quitarCaracterNombre(cadena, caracter) {
    return quitarCaracter(cadena, caracter);
}

nombre = quitarCaracterNombre(nombre, ' '); 
let nombreCompleto =
    nombre[0].toUpperCase() +
    nombre.substring(1).toLowerCase() +
    " " +
    apellido.substring(0, 1).toUpperCase() +
    apellido.substring(1).toLowerCase();

console.log(nombreCompleto);

let i = nombreCompleto.length;
while (i > 0) {
    console.log(i + " " + nombreCompleto.substring(0, i));
    i--;
}
