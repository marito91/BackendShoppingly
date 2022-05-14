const { Router } = require("express");
const orders = Router();
const { ordersModel } = require("../models/ordersModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");


function createGuideNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 1)
 * Name : Create new orders
 * Method : POST
 * Route : /new_order
 */

 orders.post("/new_order", function(req, res) {    
    const { order } = req.body;
    console.log(order)
    /**
     * email : "",
     * date : "",
     * firstName : "",
     * lastName : "",
     * phone : "",
     * country : "",
     * city : "",
     * postalCode : "",
     * address : "",
     * apt : "",
     * message : "",
     * content : [],
     * offers : false,
     * express : false,
     * tracking :false,
     * status : "",
     * guide : "",
     * payment : false
     */



    // New object to create date
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    const defDate = year + "-" + month + "-" + date// + " " + hours + ":" + minutes + ":" + seconds
    //console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

    const trackingNumber = JSON.stringify(createGuideNumber(1, 2000000000))

    const specs = order.message === "" ? "none" : order.message

    const newOrder = new ordersModel({
        name : order.firstName + " " + order.lastName,
        products : order.content,
        date : defDate,
        email : order.email,
        phone : order.phone,
        address : order.address + ", " + order.apt + ", " + order.city + ", " + order.country,
        message : specs,
        express : order.express,
        guide : trackingNumber,
        status : "Order created"
    });

    newOrder.save(function (error) {
        if (error) {
            console.log(error)
            return res.send({ status: "error", msg: "Couldn't create new order"});
        } else {
            res.send({ status: "ok", msg: `Thank you for your order! Your tracking number is: ${trackingNumber}`, url:"/"})
        }
    });
    /*
    ordersModel.findOne({email: order.email}, function (error, oldUser) {
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
    })*/

    
});



/**
 * 2)
 * Name : Get user's most recent orders
 * Method : GET
 * Route : /recent_orders
 */

 orders.get("/recent_orders/:email", function(req, res) {    
    //const { userData } = req.body;

    const userData = req.params.email;
    //let orders = [];
  
    ordersModel.find({email: userData}, function (error, orders) {
        if (error) {
            return res.send({ status: "error", msg: "Couldn't connect to database" });
        } else {
            if (orders !== null && orders !== undefined) {
                console.log(orders)
                //orders.push(order)
                return res.send({ status: "ok", msg: `We found the orders for the user ${userData}.`, orders });
            } else {
                return res.send({ status: "error", msg: `We didn't find the orders for the user ${userData}.` });
            }
        }
    })   
});


exports.orders = orders;