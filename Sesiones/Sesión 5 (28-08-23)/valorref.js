// Resultado: Pedro, Juan
// let nombre = 'Juan';

// function renombrar(n, nuevo) {
//     n = nuevo;
//     console.log(n);
// }

// renombrar(nombre, 'Pedro');
// console.log(nombre);


// Resultado: Pedro, Pedro
// let persona = { nombre: 'Juan'};

// function renombrarP(p, nuevo) {
//     p.nombre = nuevo;
//     console.log(p.nombre);
// }

// renombrarP(persona, 'Pedro');
// console.log(persona.nombre);


// Clone de objetos
let p = { nombre: 'Juan' };
let c = Object.assign({}, p); // Clonar objeto inicial

console.log(c);


// Método ECMAScript 6 -> Deestructurador (...)
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    email: 'juanperez@iteso.mx'
};

// const { nombre, apellidos } = persona; // Extracción de propiedades puntuales
// const { nombre, ...resto} = persona; // Extracción de propiedades punutuales y restantes
const {...resto} = persona; // Extracción de todas las propiedades
console.log(resto);
resto.nombre = 'Carlos';
console.log(persona); // La persona original se muestra sin modificaciones

// const david = persona; // Incorrecto, se modificaría la persona original
const david = {
    telefono: '12345678',
    ...persona
}
const David = {...persona};
