const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = process.env.MONGO_URL;   

let _db;

const mongoConnect = (callback) => {
MongoClient.connect(MONGO_URL).then(client =>{
  console.log("connected to mongodb");
  _db = client.db("airbnb");
  callback();
  
}).catch(err => {
  console.log('Error While connecting to Mongo', err);
});
}

const getDB = () => {
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}

exports.mongoConnect = mongoConnect; 
exports.getDB = getDB;