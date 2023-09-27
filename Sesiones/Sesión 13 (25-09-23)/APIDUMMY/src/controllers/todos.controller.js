const model = require('./../models/todo');

module.exports = {
    list: (req, res) => {
        console.log('Here!');
        model.find({}).lean().then(response => {
            // res.send(response);
            res.render('todos', {
                title: 'Mis tareas',
                todos: response
            });
        })
    },

    create: (req, res) => {
        /* 
            title
            description
            status ? new
         */
        const todo = req.body;
        // console.log(req.body);
        const result = model.create(todo);
        res.send(result);
    }
}
