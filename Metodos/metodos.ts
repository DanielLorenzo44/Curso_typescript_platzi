function imprimeMensaje(message: string): void {
    console.log(message);
}

imprimeMensaje("Soy un mensaje");

function sumar(num1: number, num2: number): number {
    return num1 + num2;
}

let result: number = sumar(5, 10);

console.log(`El resultado es: ${result}`)