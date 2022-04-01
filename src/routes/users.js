const { Router } = require("express");
const users = Router();
const { newsletter, userData } = require("../data");
const { usersModel } = require("../models/usersModel");
var ObjectId = require('mongodb').ObjectId;


/**
 * 1)
 * Name : Subscribe newsletter users
 * Method : POST
 * Route : /newsletter
 */

 users.post("/newsletter", function(req, res) {
    
    const { crew } = req.body;
    usersModel.findOne({email: crew.email}, function (error, oldUser) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (oldUser !== null && oldUser !== undefined && oldUser.email === crew.email) {
                console.log(oldUser)
                return res.send({ status: "ok", msg: `The following email address ${crew.email} is already registered in our database.` });
            } else {
                const newUser = new usersModel({
                    first: crew.firstName, 
                    last: crew.lastName,
                    document: "null",
                    phone: "null",
                    address: "null", 
                    username: "null", 
                    password: "null", 
                    email: crew.email,
                    birthdate: crew.date,
                    offers: crew.offers,
                    newsletter: crew.ideas,
                    nation: crew.nation
                });
                newUser.save(function (error) {
                    if (error) {
                        console.log(error)
                        return res.send({ status: "error", msg: "Couldn't register new user to database" });
                    }
                    res.send({ status: "ok", msg: "Thank you for subscribing! Welcome to the club!" });
                });
            }
        }
    })
    
})


/**
 * 2)
 * Name : Subscribe new users
 * Method : POST
 * Route : /newsletter
 */

 users.post("/newUsers", function(req, res) {
    
        
    const { user } = req.body;
    usersModel.findOne({document: user.document}, function (error, oldUser) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (oldUser !== null && oldUser !== undefined && oldUser.document === user.document) {
                console.log(oldUser)
                return res.send({ status: "ok", msg: `The user ${oldUser.first} is already registered in our database.` });
            } else {
                const newUser = new usersModel({
                    first: crew.firstName, 
                    last: crew.lastName,
                    document: "null",
                    phone: "null",
                    address: "null", 
                    username: "null", 
                    password: "null", 
                    email: crew.email,
                    birthdate: crew.date,
                    offers: crew.offers,
                    newsletter: crew.ideas,
                    nation: crew.nation
                });
                newUser.save(function (error) {
                    if (error) {
                        console.log(error)
                        return res.send({ status: "error", msg: "Couldn't register new user to database" });
                    }
                    res.send({ status: "ok", msg: "Thank you for subscribing! Welcome to the club!" });
                });
            }
        }
    })
    
})

exports.users = users;