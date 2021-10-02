const { config } = require('dotenv');
const mongoose  = require('mongoose');
const connectDatabase = () =>{
    mongoose.connect("Mongo_Urı = mongodb+srv://chgunay:udemy123@chgunay.8nvku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log("MongoDb Connection succes");

    })
    .catch(err => {
        console.error(err); 
    })

};

module.exports = connectDatabase; 