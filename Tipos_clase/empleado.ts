import { Persona } from "./clase";

export class Empleado extends Persona {
    public puesto: string;

    constructor(nombre: string, edad: number, isDev: boolean, puesto: string){
        super(nombre, edad, isDev);
        this.puesto = puesto;
    }

    public saludar(): string {
        return `${super.saludar()}, trabajo como ${this.puesto}`;
    }
    
    public obtenerInfo(): string {
        return `Tengo ${this.obtenerEdad()} años y trabajo como ${this.puesto}`;
    }
}