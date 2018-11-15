const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to mongoDB server");
    }
    console.log("Connected to mongoDB server");

    db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bea5b4eeee8ac189c01a894")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // Increment value and change name
    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bebc1aadb285c0c8af2cb32")
        },
        {
          $set: { name: "Rajeev" }
        },
        {
          $inc: { age: 1 }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    // db.close();
  }
);
