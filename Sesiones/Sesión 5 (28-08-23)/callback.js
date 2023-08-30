// Callback Hell
traerTortillas((response) => {
    if (response.status === 200) {
        traerRefresco(response.cambio, (responseRefresco) => {
            if (responseRefresco.status === 200) {
                // ...
            }
        })
    }
});
