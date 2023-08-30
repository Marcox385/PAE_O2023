const express = require('express');
// const nombre = require('./users');
const juan = require('./users'); // Comportamiento de singleton
const pedro = require('./users'); // Comportamiento de singleton
require('./clients');

juan.nombre = 'Juan'; // Se sobreescribirá por ...
pedro.nombre = 'Pedro'; // Pedro (porque se importa instancia en vez de clase)

console.log(juan.nombre);

const app = express();
const port = 3000;

// console.log(nombre); // Sin export desde el módulo de usuarios, esta línea generará un error

// Ruta raíz y lo que se hará cuando se reciba una petición get sobre esta ruta
// req para petición, res para respuesta
app.get('', (req, res) => {
    console.log('Petición recibida a index');
    // res.send('API works!'); // Funcionamiento normal
    // res.status(401).send('No estás logueado'); // Falta de credenciales
    res.sendStatus(401); // Falta de credenciales implícita
    // Ya que hay respuesta, no se puede hacer otro send
    // res.send('Huh!'); // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
})

// Espeficiar puerto de la aplicación y lo que hará ya que esté lista para escuchar
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
