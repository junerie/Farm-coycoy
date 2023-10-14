const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
       await client.connect();
       console.log('Connected to MongoDB');
    } catch (err) {
       console.error('Error connecting to MongoDB:', err);
    } finally {
       await client.close();
    }
   }
   
   run().catch(console.dir);