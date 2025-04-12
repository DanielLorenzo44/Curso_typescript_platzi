import { Empleado } from "./empleado";

let empleado = new Empleado("Daniel", 27, true, "Desarrollador mid");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre:", empleado.nombre)