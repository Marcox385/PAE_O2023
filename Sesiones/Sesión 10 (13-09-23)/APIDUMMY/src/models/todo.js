const {Schema, model} = require('mongoose');

const todoSchema = new Schema({
    title: { type: String},
    description: { type: String},
    status: { type: String, default: 'new' }
});

module.exports = model('tareas', todoSchema);


// let todos = [];

// module.exports = {
//     find: () => {
//         return todos;
//     },

//     create: (todo) => {
//         todo.id = new Date().getTime();
//         todo.createdAt = new Date().getTime();
//         todos.push(todo);
//         return todo;
//     }
// }
