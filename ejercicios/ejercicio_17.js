const operacion = (n1,n2, callback) => callback(n1, n2);
const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
console.log(operacion(1, 2, sumar));
console.log(operacion(5, 6, multiplicar));