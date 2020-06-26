"use strict"

exports.login = function chat(req, res,next){
    res.render('login', {title: 'Login', body: "Login app", Header: "My App"});
    };