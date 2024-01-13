const express = require("express");
const morgan = require('morgan');
const route = require('./routes/routes');
const loginroute = require('./routes/loginroutes');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
require('./db/db');

const app = new express();
app.use(morgan('dev'));
app.use(express.json());

app.use(cors())

//Routes
app.use('/emp', route);
app.use('/user', loginroute);

app.use(express.static(path.join(__dirname,'./build'))); 
app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname ,'./build/index.html')); 
}); 

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
