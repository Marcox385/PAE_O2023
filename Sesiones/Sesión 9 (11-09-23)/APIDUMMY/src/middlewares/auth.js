module.exports = (req, res, next) => {
    const query = req.query;
    const secret = process.env.SECRET;
    
    if ('key' in query && query['key'] === secret)
        return next();

    res.status(401).send('Fallo');
}
