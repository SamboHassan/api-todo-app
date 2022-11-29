const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'); //download and add body parser

const todoRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //allow us to access req body
app.use('/api/todos', todoRoutes);
app.use(express.static(__dirname + 'public'))
app.use(express.static(__dirname + '/views'));

// app.get('/', function(req, res){
//     res.send("HELLO FROM ROOT ROUTE");
// })

app.get('/', function(req, res){
    res.sendFile("index.html");
})



app.listen(port, () => console.log("App is running on port: " + port))




