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
    
    const { userInfo } = req.body;
    usersModel.findOne({email: userInfo.email}, function (error, oldUser) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (oldUser !== null && oldUser !== undefined && oldUser.email === userInfo.email) {
                console.log(oldUser)
                return res.send({ status: "ok", msg: `The following email address ${userInfo.email} is already registered in our database.` });
            } else {
                const newUser = new usersModel({
                    first: userInfo.firstName, 
                    last: userInfo.lastName,
                    document: "null",
                    phone: "null",
                    address: "null", 
                    username: "null", 
                    password: "null", 
                    email: userInfo.email,
                    birthdate: userInfo.date,
                    offers: userInfo.offers,
                    newsletter: userInfo.ideas,
                    nation: userInfo.nation
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
 * Name : Sign up new users
 * Method : POST
 * Route : /newUsers
 */

 users.post("/newUsers", function(req, res) {
    
        
    const { userInfo } = req.body;
    /** User information
     *  firstName
     * lastName
     * document
     * email
     * date
     * address
     * phone
     * username
     * password
     * offers
     * ideas
     * nation
     */
    usersModel.findOne({document: userInfo.document}, function (error, oldUser) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (oldUser !== null && oldUser !== undefined && oldUser.document === userInfo.document) {
                console.log(oldUser)
                return res.send({ status: "ok", msg: `The user ${oldUser.first} is already registered in our database.` });
            } else {
                const newUser = new usersModel({
                    first: userInfo.firstName, 
                    last: userInfo.lastName,
                    document: userInfo.document,
                    phone: userInfo.phone,
                    address: userInfo.address, 
                    username: userInfo.username, 
                    password: userInfo.password, 
                    email: userInfo.email,
                    birthdate: userInfo.date,
                    offers: userInfo.offers,
                    newsletter: userInfo.ideas,
                    nation: userInfo.nation
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