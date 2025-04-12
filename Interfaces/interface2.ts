interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
}

let direccion: Direccion = {
    calle: "Calle Prueba",
    numero: 22,
    ciudad: "Madrid"
}

console.log(direccion)

//Read only
interface Persona {
    readonly nombre: string;
    readonly edad: number;
    readonly isDev: boolean;
}

let personaRead: Persona = {
    nombre: "Admin",
    edad: 55,
    isDev: true
}

console.log("Persona: ", personaRead);

//Da error
//personaRead.nombre = "Prueba";

//Interfaz extendida
interface Empleado extends Persona {
    readonly puesto: string;
}

let empleadoRead: Empleado = {
    nombre: "Admin",
    edad: 55,
    isDev: true,
    puesto: "Programador"
}

console.log("Empleado: ", empleadoRead);