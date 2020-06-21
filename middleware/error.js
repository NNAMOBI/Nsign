"use strict"


exports.notFound = async (req, res, next) => {
    res.status(404).send( "your page cannot be found")

}