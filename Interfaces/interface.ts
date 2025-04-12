interface Persona {
    nombre: string;
    edad: number;
    isDev: boolean;
}

let persona: Persona = {
    nombre: "Admin",
    edad: 55,
    isDev: true
};

console.log("Persona: " , persona)

let personas: Persona[] = [
    {nombre: "admin", edad: 34, isDev: true},
    {nombre: "Juan", edad: 23, isDev: false},
    {nombre: "Maria", edad: 34, isDev: true},
]

console.log("Personas:", personas);

interface Sumar {
    (a: number, b: number): number
}

let sumar = (a: number, b: number): number => {
    return a + b;
}

console.log("Resultado de sumar: ", sumar(5,5));