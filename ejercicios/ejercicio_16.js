function sumarTodo(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumarTodo(1, 2, 5, 4));