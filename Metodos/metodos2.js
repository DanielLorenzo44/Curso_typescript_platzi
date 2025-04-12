function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "Hola, ".concat(nombre);
    }
}
console.log(saludar("Admin"));
console.log(saludar("Admin", "Buenos días"));
// Parametros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, valor) { return acumulador + valor; }, 0);
}
console.log("El resultado de sumar todos es ".concat(sumarTodos(1, 2, 3, 4, 5)));
//Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "Adios"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Admin"));
console.log(despedir("Admin", "Hasta luego"));
