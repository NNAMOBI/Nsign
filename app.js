"use strict"

const express = require('express')
const app = express();
const PORT = 3500;
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs');
app.use(logger.log)
app.use(express.static(__dirname + '/static'));
app.use(cookieParser())


app.get('/Home', (req, res, next) => {
res.send("Hello World")
})

app.get('/error', function(req, res, next){
    next(new Error('A contrived error'));
    });







app.use(errorHandler.notFound)

app.listen(PORT, err => {
    if(err)
    console.log('There is an error in connection')
    console.log(`your server is running of port ${PORT}`)
})