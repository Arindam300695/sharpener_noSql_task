const { MongoClient } = require("mongodb"); // import { MongoClient } from 'mongodb'
require("dotenv").config();

// Connection URL
const url = process.env.db_uri;
const client = new MongoClient(url);
let db;

// Connect to MongoDB
const connect = async () => {
    // Use connect method to connect to the server
    const result = await client.connect();
    console.log("Connected successfully to the database");
    db = result.db();
    return db;
};

const getdb = () => {
    if (db) return db;
    throw "No database found";
};

module.exports = { connect, getdb };
