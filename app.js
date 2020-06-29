"use strict"

const express = require('express')
const app = express();
const PORT = 3500;
const logger = require('./middleware/logger')
const errorHandler = require('./middleware/error')
const cookieParser = require('cookie-parser') //Cookie-parser package 
const rootRoute = require('./api/routes/index')
const chatRoute = require('./api/routes/chat')
const loginRoute = require('./api/routes/login')
const loginPostRoute = require('./api/routes/loginProcess')
// const loginProcessRoute = require('./api/routes/loginProcess')
const partials = require('express-partials')
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()
const bodyParser = require('body-parser')
const csrf = require('csurf')
const util = require('./middleware/utilities')




app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});


app.use(partials());
app.use(logger.log)
app.use(express.static(__dirname + '/static'));//Middleware in Express to server static files
app.use(cookieParser('secret')) //process cookie request from browser & reads the cookies in the session from Index.js
                                     
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store:  new RedisStore({client: redisClient })
    })
    );                           //use session to store sessionID in the cookies,so with the cookies data 
                                 // retrieved after the sessionId ('secret') matches the one is the server
                                 // or redis store

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(csrf())  //built-in middleware that will add the token to the session.
app.use(util.csrf) //utility that will take it from the session and make it available to the template
app.use(util.authenticated)

                                    


app.get('/Home', (req, res, next) => {
res.send("Hello World")
})

app.get('/root', rootRoute.loginProcess)

app.post('/login', loginPostRoute.login)

// app.post('/v1/api/login', loginProcessRoute.loginProcess)

app.get('/chat', util.requireAuthentication, chatRoute.chat)

app.get('/login', loginRoute.login)

app.get('/error', function(req, res, next){
    next(new Error('A contrived error'));
    });







app.use(errorHandler.notFound)

app.listen(PORT, err => {
    if(err)
    console.log('There is an error in connection')
    console.log(`your server is running of port ${PORT}`)
})