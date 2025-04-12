"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado("Daniel", 27, true, "Desarrollador mid");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("Nombre:", empleado.nombre);
