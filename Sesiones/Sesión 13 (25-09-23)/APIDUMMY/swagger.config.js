const port = process.env.PORT || 3000;
console.log('Using port: ', port);

module.exports = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'TODOS API',
            description: 'API to manage user tasks',
            version: '0.0.1',
            servers: ['http://localhost:3000' + port]
        }
    },
    apis: [
        'src/routes/**/*.js'
    ]
}
