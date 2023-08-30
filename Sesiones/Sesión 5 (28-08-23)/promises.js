traerTortillas()
    .then(          // Se cumple
        response => {
            return traerRefresco(response.cambio);
        }   
    )
    .then(          // Evita Promise Hell
        responseRefresco => { // responseRefresco == respuesta de traerRefresco
            return traerQueso();
        }
    )
    .then()
    .catch(         // No se cumple (evita if's)
        e => {
            console.log('Ocurrió un error', e)
        }
    );

// Alternativa
function TraerTortillas() {
    return Promise((resolve, reject) => {
        // ...
    })
}
