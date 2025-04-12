"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, isDev) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDev = isDev;
    }
    Persona.prototype.saludar = function () {
        return "Mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.esDev = function () {
        return this.isDev;
    };
    return Persona;
}());
exports.Persona = Persona;
