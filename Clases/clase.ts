export class Persona {
    nombre: string;
    edad: number;
    isDev: boolean;

    constructor(nombre: string, edad: number, isDev: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.isDev = isDev;
    }

    saludar(): string{
        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}