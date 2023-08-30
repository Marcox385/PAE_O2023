/* La siguiente ejecución dara un error, dado que la búsqueda de la variable
   se realiza en el contexto externo (contexto léxico) */
// function foo() {
//     var nombre = 'Juan';
//     bar();
// }

// function bar() {
//     console.log(nombre);
// }

// foo();


// Ejecución "correcta" -> Resultado: Pedro
let nombre = 'Pedro';

function foo() {
    var nombre = 'Juan';
    bar();
}

function bar() {
    console.log(nombre);
}

foo();
