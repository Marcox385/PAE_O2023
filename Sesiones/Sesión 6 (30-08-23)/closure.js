function sumar(a) {
    return function (b) {
        return a + b;
    }
}

const suma = sumar(3);

const r1 = suma(2);
const r2 = suma(3);
const r3 = suma(5);

console.log(suma);

console.log(r1);
console.log(r2);
console.log(r3);
