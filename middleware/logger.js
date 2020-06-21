"use strict"



exports.log = async (req, res, next) => {
      console.log(req.url)
      next()
}