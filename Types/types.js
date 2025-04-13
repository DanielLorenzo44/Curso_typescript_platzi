// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
var persona = {
    nombre: "Juan",
    edad: 30,
};
console.log(persona.nombre);
function esNumero(valor) {
    return (typeof valor === "number");
}
var result1 = esNumero(2);
var result2 = esNumero("Hola");
console.log(result1);
console.log(result2);
