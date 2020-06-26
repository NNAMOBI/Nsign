"use strict"


exports.homePage = async (req, res, next) => {
    res.cookie('IndexCookie', 'This was set from Index');
// res.render('index', {title: 'Index', cookie: JSON.stringify(req.cookies)});
    res.render('index', {title: 'Index', body: 'Hello World', Header: "MY home page", cookie:
    JSON.stringify(req.cookies), session: JSON.stringify(req.session),signedCookie: JSON.stringify(req.signedCookies)})
    // res.render('index', {layout: 'layout', title: 'Index', body: 'Hello World'});
}

//We can override the default layout (or set it in the first place) using the render function below

// res.render('index', {layout: 'layout', title: 'Index'}); 

