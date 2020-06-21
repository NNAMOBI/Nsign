'use strict'

exports.chat = function chat(req, res, next){
    res.render('chat', {title: 'Chat', body: "My chat app"});
    };