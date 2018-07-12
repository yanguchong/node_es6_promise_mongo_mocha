module.exports = HelloWorld;

function HelloWorld(){
}

HelloWorld.prototype.getStartupLog = function(){
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = 'local';

    return MongoClient.connect(url, { useNewUrlParser: true } )
        .then(function(client){
            const collection = client.db(dbName).collection('startup_log');
            const collectionData = collection.find({}).toArray();

            client.close();

            throw new Error('test');
            return collectionData;
        })
        .catch(function(err){
            return err;
        })
};