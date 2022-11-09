const mongoose = require('mongoose');

const connect = (uri) => {
    try{
        mongoose.connect(uri || process.env.MONGO_URI || "mongodb://localhost/27017");
        console.log("Connected to MongoDB");
    }
    catch(e){
        console.log(e.message);
    }
    
}

module.exports = connect;