
let csrf = async (req, res, next)=> {
    res.locals.token = req.csrfToken();
    next();
    };


let authenticated = async (req, res, next) => {
    res.locals.isAuthenticated = req.session.isAuthenticated
    if(req.session.isAuthenticated)
    res.locals.user = req.session.user
    next()
}

let requireAuthentication = async (req, res, next) => {
    if (req.session.isAuthenticated) {
    next();
    }else {
    res.redirect('/login');
    }
    };

module.exports = {
    csrf,
    authenticated,
    requireAuthentication
}