// Funciones de flecha

// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función de flecha
// => : Expresión lambda (similar a AWS, donde se almacena la función y nada más)
const _sumar = (a, b) => { return a + b; }
const _sumar2 = (a, b) => a + b;


// Siguiente ejemplo
class Persona {
    nombre = '';

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        // Funciona
        console.log(`Hola, soy ${this.nombre}`);

        // No funciona
        setTimeout(function() {
            console.log(`Hola, soy ${this.nombre}`);
        }, 100);

        // Funciona
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 100);
    }

    saludarV2() {
        // Imitación de arrow function (funciona)
        const self = this;
        setTimeout(function() {
            console.log(`Hola soy ${self.nombre}`);
        }, 100);
    }

    saludarV3() {
        setTimeout(function() {
            console.log(`Hola soy ${this.nombre}`);
        }.bind({nombre: 'Pedro'}), 100);

        setTimeout(function() {
            console.log(`Hola soy ${this.nombre}`);
        }.bind(this), 100);
    }
}

const yo = new Persona('Francisco');
yo.saludar();
yo.saludarV2();
yo.saludarV3();
