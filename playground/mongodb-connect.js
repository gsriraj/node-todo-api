// const MongoClient = require("mongodb").MongoClient;
// This is same as the one below, the process is called object deconstruction
const { MongoClient, ObjectID } = require("mongodb");

var obj = new ObjectID();
console.log(obj);

var user = { name: "Sriraj", age: 23 };
var { name } = user;
console.log(name);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to mongoDB server");
    }
    console.log("Connected to mongoDB server");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // Insert new Doc in Users collection (name, age, location)
    db.collection("Users").insertOne(
      {
        name: "Sriraj",
        age: 23,
        location: "Bangalore"
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    db.close();
  }
);
