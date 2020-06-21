"use strict"


exports.homePage = async (req, res, next) => {
    res.render('index', {title: 'Index', body: 'Hello World'})
}