/* La siguiente ejecución dará como resultado "undefined"
    -> la variable existe, nunca ha tenido un valor */
// var nombre;
// console.log(nombre);
// var nombre = 'Pedro';

// Scope local (dará error)
function foo() {
    var nombre = 'Juan';
}
foo();
console.log(nombre);
