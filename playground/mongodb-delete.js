const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to mongoDB server");
    }
    console.log("Connected to mongoDB server");
    // db.collection("User").deleteMany({ name: "Sriraj" });
    db.collection("Users")
      .findOneAndDelete({
        _id: new ObjectID("5bea64f611ca0662d5c3167f")
      })
      .then(results => {
        console.log(JSON.stringify(results, undefined, 2));
      });
  }
);
