"use strict"


exports.homePage = async (req, res, next) => {
    res.render('index', {title: 'Index', body: 'Hello World'})
    // res.render('index', {layout: 'layout', title: 'Index', body: 'Hello World'});
}

//We can override the default layout (or set it in the first place) using the render function below

// res.render('index', {layout: 'layout', title: 'Index'}); 

