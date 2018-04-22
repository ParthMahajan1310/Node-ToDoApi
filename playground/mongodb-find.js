const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server.');
    }
    console.log('\nConnected to Mongo Database \n');
    const db = client.db('TodoApp');
    
    db.collection('Todos').find({}).count().then((count) => {
        console.log(count);
    });

    client.close();
});

