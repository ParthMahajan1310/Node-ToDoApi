const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server.');
    }
    console.log('\nConnected to Mongo Database \n\n');
    const db = client.db('Users');
    
    db.collection('Users').find({age:22}).count().then((count) => {
        console.log(count);
    })
    client.close();
});

