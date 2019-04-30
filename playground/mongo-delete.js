//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db )=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server.');

// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5cc7e01b280494ef6c3d96f7")
}).then((result)=>{
  console.log(result);
});
  //db.close();
});
