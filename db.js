const mongoose= require('mongoose');

// const connectionUrl= 'mongodb://localhost:27017/notesDatabase';

require('dotenv').config();
// const connectionUrl= process.env.connectionUrl;

mongoose.connect(process.env.ConnectionUrl);

const db= mongoose.connection;

db.on('connected', ()=> console.log('Connected to mongodb Server'))

db.on('disconnected', ()=> console.log('Disconnected to mongodb Server'))

db.on('error', (err)=> console.log('Error: '+err.msg))

module.exports= db;