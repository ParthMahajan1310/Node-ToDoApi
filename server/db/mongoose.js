const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/TodoApp');
//mongoose.createConnection('mongodb://localhost/Users');

module.exports = {mongoose};