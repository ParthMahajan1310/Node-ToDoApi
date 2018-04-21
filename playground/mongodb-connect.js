const {MongoClient, ObjectID} = require('mongodb');

// Generating objectId using MongoDB native client.
/* let obj = new ObjectID();
console.log(obj); */

// Connecting to local mongo db.
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server.');
    }
    console.log('Connected to Mongo Database');
    const db = client.db('Users');
    
    db.collection('Users').insertOne({
        name: 'Parth Mahajan',
        age: 22,
        location: 'Janakpuri, New Delhi'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert the user record', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });    

    client.close();
});

