let names: string[] = ["Admin", "Marce", "Miranda"];
console.log("Nombres: " + names);

let ages: number[] = [42,35,89];
console.log("Edades: " + ages);

let mixto: any[] = ["Admin", 96, 25];
console.log("Mixto: " + mixto);

interface Persona {
    nombre: string;
    edad: number;
    isDev: boolean;
}

let personas: Persona[] = [
    {nombre: "admin", edad: 34, isDev: true},
    {nombre: "Juan", edad: 23, isDev: false},
    {nombre: "Maria", edad: 34, isDev: true},
]

personas.push({nombre: "Pepe", edad: 52, isDev: false});

console.log("Personas:", personas);

//Tupla (No se puede modificar o alterar)
let persona: [string, number, boolean];
persona = ["Admin", 65, true];

console.log("Persona:", persona);

let personasTupla: [string, number, boolean][] = [];

personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);

personasTupla.forEach(persona => {
    console.log("Persona:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});

// Enumeradores
enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log("Dia: " + dia); // Muestra: 6 (índice numérico)
console.log("Dia: " + DiaSemana[dia]); // Muestra: "Domingo" (nombre)