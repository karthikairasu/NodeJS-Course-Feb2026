// const { MongoClient } = require('mongodb');
import {MongoClient } from 'mongodb';

// const url = 'mongodb://localhost:27017';
const url = `mongodb+srv://karthi:Karthi123456@karthikairasuk.qnvhqm5.mongodb.net/?appName=KarthikairasuK`;
const dbname = "mynodedata";

const client = new MongoClient(url);

try{
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbname);
    const collection = db.collection('users');
    // const result = await collection.insertOne({
    //     name: 'karthi',
    //     pass: 'karthi',
    //     email: 'test@gmail.com',
    //     mobile: '8739879879'
    // })
    // console.log('Record inserted', result);
    const users = await collection.find().toArray();
    console.log(users);
}catch(err){
    console.log(err);
}