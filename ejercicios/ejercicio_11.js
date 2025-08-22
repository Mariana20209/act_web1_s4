function par(numero) {
    return numero % 2 === 0; 
}

console.log(par(par(2))); // true//
console.log(par(par(5))); // false