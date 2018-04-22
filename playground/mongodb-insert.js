const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) 
        return console.log('Unable to connect to mongo db server.');
    console.log('\nConnected to Mongo Database\n');
    
    const db = client.db('TodoApp');
    let docs = [
        {
            text: 'This is Task 3',
            completed: true
        },
        {
            text: 'This is Task 4',
            completed: true
        },
        {
            text: 'This is Task 5',
            completed: true
        },
        {
            text: 'This is Task 6',
            completed: true
        },
        {
            text: 'This is Task 7',
            completed: true
        },
        {
            text: 'This is Task 8',
            completed: true
        }
    ]
    db.collection('Todos').insert(docs).then( data => console.log('Data Inserted Successfully: ', data))
    .catch(err => console.log('Error Occured:', err));    

    client.close();
});

