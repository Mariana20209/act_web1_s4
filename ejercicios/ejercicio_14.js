function ID() {
    let contador = 0;
    return function() {
        return contador++;
    };
}

const contador1 = ID();
console.log(contador1()); // 0
console.log(contador1()); // 1