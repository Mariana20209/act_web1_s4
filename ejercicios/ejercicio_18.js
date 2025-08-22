function correo(cadena) {
    return cadena.includes("@") && cadena.includes(".com")
}

console.log(correo("test@example.com")) // true//
console.log(correo("testexample.com")) // false//
console.log(correo("test@example")) // false//