var names = ["Admin", "Marce", "Miranda"];
console.log("Nombres: " + names);
var ages = [42, 35, 89];
console.log("Edades: " + ages);
var mixto = ["Admin", 96, 25];
console.log("Mixto: " + mixto);
var personas = [
    { nombre: "admin", edad: 34, isDev: true },
    { nombre: "Juan", edad: 23, isDev: false },
    { nombre: "Maria", edad: 34, isDev: true },
];
personas.push({ nombre: "Pepe", edad: 52, isDev: false });
console.log("Personas:", personas);
//Tupla (No se puede modificar o alterar)
var persona;
persona = ["Admin", 65, true];
console.log("Persona:", persona);
var personasTupla = [];
personasTupla.push(["Amin", 39, true]);
personasTupla.push(["Marce", 40, true]);
personasTupla.push(["Miranda", 7, false]);
personasTupla.forEach(function (persona) {
    console.log("Persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre:", nombre);
    console.log("Edad:", edad);
    console.log("Es desarrollador:", esDesarrollador);
});
// Enumeradores
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
var dia = DiaSemana.Domingo;
console.log("Dia: " + dia); // Muestra: 6 (índice numérico)
console.log("Dia: " + DiaSemana[dia]); // Muestra: "Domingo" (nombre)
