// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
    //     console.log(result)
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').deleteMany({name: 'Shanawar'}).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b296ec4f447e132c6e769be")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2))
    })

    // db.close();
});
