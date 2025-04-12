function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}`;
    }
}
  
console.log(saludar("Admin"));
console.log(saludar("Admin", "Buenos días"));

// Parametros multiples

function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
}
  
console.log(`El resultado de sumar todos es ${sumarTodos(1, 2, 3, 4, 5)}`);

//Valores por defecto
function despedir(nombre: string, despedida: string = "Adios"): string {
    return `${despedida}, ${nombre}!`;
}

console.log(despedir("Admin"));
console.log(despedir("Admin", "Hasta luego"));