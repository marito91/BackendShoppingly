const { Router } = require("express");
const users = Router();
const { newsletter, userData } = require("../data");

/**
 * 1)
 * Name : Subscribe newsletter users
 * Method : POST
 * Route : /newsletter
 */

 users.post("/newsletter", function(req, res) {
    
    const { crew } = req.body;
    console.log(crew)
    res.send({estado : "ok", msg : `Subscribed`});
    
})

exports.users = users;