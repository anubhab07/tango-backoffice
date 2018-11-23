// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://makeathon3:<PASSWORD>@cluster0-shard-00-00-6z2yu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", function(err, db) {
  if(!err) {
    console.log("We are connected");
    
    var collection = db.collection('test');
    var doc1 = {'hello':'doc1'};
    var doc2 = {'hello':'doc2'};
    var lotsOfDocs = [{'hello':'doc3'}, {'hello':'doc4'}];

    collection.insert(doc1);

    collection.insert(doc2, {w:1}, function(err, result) {});

    collection.insert(lotsOfDocs, {w:1}, function(err, result) {});
  }
  else{
      console.log("Error Encountered", err);
  }
});