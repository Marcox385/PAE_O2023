// SIAF = Self-invoked anonymous function
(function() {
    let nombre = 'Juan'; // Variable contextualizada, no global
})();

// SIAF con parámetros disponible a su inicialización
(function(ventanita) {
    let nombre = 'Juan';
})(window);
