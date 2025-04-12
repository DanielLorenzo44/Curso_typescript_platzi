let variableAny: any;
variableAny = "Hello";
//variableAny = 42
//variableAny = true

console.log("Valor " + variableAny);

let variableDesconocida: unknown;

//variableDesconocida = "Hello";
variableDesconocida = 42
// variableDesconocida = true

if(typeof variableDesconocida === "string"){
    console.log("Variable desconocida es un string: " + variableDesconocida)
}

// function throwError(message: string): never {
//     throw new Error(message);
// }

//throwError("Este es un error");

function  logMesage(message: string): void {
    console.log("Log message: "+  message);
}

logMesage("Este es un mensaje de Log");