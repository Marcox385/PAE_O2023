module.exports = {
    login: (req, res) => {
        console.log('Credenciales', req.body);
        res.send('Works!');
    }
}
