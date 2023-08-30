// class Persona {} // ECMAScript 6
// Syntactic Sugar
// function Persona() {} // ECMAScript 5

// Continuación
// function Persona(nombre) {
//     return {
//         nombre
//     }
// }

function Persona(nombre) {
    let _nombre = nombre;

    return {
        getNombre: function() {
            return _nombre;
        }
    }
}

const yo = new Persona('Juan');
console.log(yo.getNombre()); // Acceso a atributo privado de clase
