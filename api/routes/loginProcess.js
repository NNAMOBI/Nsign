

exports.login = async (req, res) => {
    console.log(req.body);
    res.send(req.body.username + ' ' + req.body.password);
    };