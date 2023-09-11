// Módulos
const express = require('express');
const router = require('./src/routes');
const path = require('path');

// Servidor
const app = express();
const port = 3000;

// Archivos estáticos
const assetsUrl = path.join(__dirname, 'public');
app.use('/assets', express.static(assetsUrl));

// Rutas e inicialización
// app.use('/api', router); // Ruta definida desde raíz para /api (todas las rutas funcionarán desde ahí)
app.use(router); // Si se omite la ruta deseada, se interpretará como ruta raíz

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
