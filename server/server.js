const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo.js');
const {Users} = require('./models/users.js');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    createTodo(req.body, (err, response) => {
        (err) ? res.status(400).send(err) : res.status(200).send(response);
    });
});

function createTodo(request, cb) {
    let properties = {};
    (request.text) ? properties.text = request.text : null;
    (request.completed) ? properties.completed = request.completed : null;
    (request.completedAt) ? properties.completedAt = request.completedAt : null;

    new Todo(properties).save().then(data => cb(null, data)).catch(err => cb(err));
};

function addUsers(request, cb) {
    let properties = {};
    (request.name) ? properties.name = request.name : null;
    (request.email) ? properties.email = request.email : null;

    new Users(properties).save().then(data => cb(data)).catch(err => cb(err));
};

app.listen(4000, () => console.log('Server has started'));
