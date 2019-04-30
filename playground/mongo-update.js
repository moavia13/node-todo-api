//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db )=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server.');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID("5cc7e229280494ef6c3d97ca")
// },{
//   $set: {
//     completed: true
//   }
// },{
//   returnOriginal: false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5cc74913109eba57983b292d")
},{
  $set: {
    name: 'Moavia'
  }, $inc: {
    age: 1
  }
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});
  //db.close();
});
