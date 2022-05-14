const { Router } = require("express");
const users = Router();
const { newsletter, userData } = require("../data");
const { usersModel } = require("../models/usersModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");


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
                    country: "null", 
                    city: "null", 
                    address: "null", 
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
    usersModel.findOne({email: userInfo.email}, function (error, oldUser) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (oldUser !== null && oldUser !== undefined && oldUser.email === userInfo.email) {
                console.log(oldUser)
                return res.send({ status: "ok", msg: `The email ${oldUser.email} is already registered in our database.` });
            } else {
                const newUser = new usersModel({
                    first: userInfo.firstName, 
                    last: userInfo.lastName,
                    document: userInfo.document,
                    phone: userInfo.phone,
                    country: userInfo.country, 
                    city: userInfo.city, 
                    address: userInfo.address,  
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


/**
 * 3)
 * Name : Login users
 * Method : POST
 * Route : /login
 */

 users.post("/login", async function (req, res) {
    // Captures email / password
    const { user } = req.body;
    // Checks if the user exists in DB
    const exists = await usersModel.findOne({ email: user.email });

    if (!exists) {
        return res.status(401).json({ status: "error", msg: `The email ${user.email} does not appear in our database.` })
    }
    // Compares password
    const passOK = await compare(user.password, exists.password);
    if (passOK === true) {
        const token = sign(
            {
                email: exists.email,
                first: exists.first,
                last: exists.last,
                document: exists.document,
                address: exists.address,
                birthdate: exists.birthdate,
                phone: exists.phone,
                city: exists.city,
                country: exists.country
            },
            process.env.JWT_SECRET_KEY
        )
        return res.status(200).json({ status: "ok", msg: "Logged in", token, url:"/account" });
    }
    return res.status(401).json({ status: "error", msg: "ERROR: Wrong Credentials. 2" });
});

exports.users = users;