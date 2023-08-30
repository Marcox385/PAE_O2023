// Resultado de la siguiente ejecución
function foo() {
    console.log(1);
}

function bar() {
    console.log(2);
    foo();
}

setTimeout(() => { // Añadir al stack y ejecutar después de cierto tiempo
    console.log(3);
}, 0);

bar();
