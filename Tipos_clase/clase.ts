export class Persona {
    public nombre: string; //Public: accesible desde cualquier parte
    public edad: number; //Protected: accesible desde la clase y sus subclases
    private isDev: boolean; //Private: accesible solo desde la clase

    constructor(nombre: string, edad: number, isDev: boolean){
        this.nombre = nombre;
        this.edad = edad;
        this.isDev = isDev;
    }

    public saludar(): string{

        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }

    public obtenerEdad(): number {
        return this.edad;
    }

    private esDev(): boolean {
        return this.isDev;
    }
}