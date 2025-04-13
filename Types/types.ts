type PersonaType = {
    nombre: string;
    edad: number;
};

type Parcial<T> = {
    [K in keyof T]?: T[K];
};

type PersonaPartial = Parcial<PersonaType>;
// Resultado equivalente a:
// {
//   nombre?: string;
//   edad?: number;
// }

type SoloLectura<T> = {
    readonly [K in keyof T]: T[K];
};

type PersonaSoloLectura = SoloLectura<PersonaType>;
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }

let persona: PersonaSoloLectura = {
    nombre: "Juan",
    edad: 30,
};

console.log(persona.nombre);

//Template literal types
type Variantes = "pequeño" | "mediano" | "grande";
type ClasesCSS = `boton-${Variantes}`;

//let botonPequeño: ClasesCSS = "boton-pequeño";
//let botonMediano: ClasesCSS = "boton-mediano";

//Conditional types
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
    return (typeof valor === "number") as EsNumero<T>;
}

const result1 = esNumero(2);
const result2 = esNumero("Hola");

console.log(result1);
console.log(result2);