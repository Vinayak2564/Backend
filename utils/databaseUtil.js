const mongo = require ('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://huli96167_db_user:<MWvaogc7ZqywPyYw>@cluster0.ygu9jpe.mongodb.net/?appName=Cluster0";   



const mongoConnect = (callback) => {
MongoClient.connect(MONGO_URL).then(client =>{
  console.log(client);
}).catch(err => {
  console.log('Error While connecting to Mongo', err);
});
}

module.exports = mongoConnect; 