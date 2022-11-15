const mongoose = require('mongoose')
mongoose.set('debug', true);

require("dotenv").config();

const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.p3mkqqt.mongodb.net/?retryWrites=true&w=majority`;


const connectionParams={
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
