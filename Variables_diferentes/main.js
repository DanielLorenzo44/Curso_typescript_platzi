var variableAny;
variableAny = "Hello";
//variableAny = 42
//variableAny = true
console.log("Valor " + variableAny);
var variableDesconocida;
//variableDesconocida = "Hello";
variableDesconocida = 42;
// variableDesconocida = true
if (typeof variableDesconocida === "string") {
    console.log("Variable desconocida es un string: " + variableDesconocida);
}
// function throwError(message: string): never {
//     throw new Error(message);
// }
//throwError("Este es un error");
function logMesage(message) {
    console.log("Log message: " + message);
}
logMesage("Este es un mensaje de Log");
