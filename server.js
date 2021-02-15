const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;



const option = {
    socketTimeoutMS: 60000,
    keepAlive: true,
    reconnectTries: 60000,
     useNewUrlParser: true ,
     useUnifiedTopology: true
};

// connecting middlewares 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// creating database connection
mongoose.connect('mongodb://127.0.0.1:27017/DiveInn', option).then(function(){
    console.log('connected successfully')
}, function(err) {
    console.log('err handle')
});

var routes = require('./routes/routes.js');
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});