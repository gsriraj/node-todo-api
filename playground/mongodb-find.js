const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to mongoDB server");
    }
    console.log("Connected to mongoDB server");

    // db.collection("Todos")
    //   .find({
    //     _id: new ObjectID("5bea5b4eeee8ac189c01a894")
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    db.collection("Todos")
      .find()
      .count()
      .then(
        count => {
          console.log(`Todos count: ${count}`);
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );

    // db.close();
  }
);
