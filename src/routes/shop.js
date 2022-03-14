const { Router } = require("express");
const shop = Router();
const { shirts, pants, shoes, dresses, beachWear } = require("../data");

/**
 * 1)
 * Name : Load Shirts Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shirts", function(req, res) {
    
    const mensShirtsCatalogue = shirts.filter(shirt => shirt.gender === "m");
    //console.log(mensShirtsCatalogue);
    return res.send({ status:"ok", msg: "Men's shirts found", mensShirtsCatalogue });
    
})


/**
 * 2)
 * Name : Load Pants Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/pants", function(req, res) {
    
    const mensPantsCatalogue = pants.filter(item => item.gender === "m");
    return res.send({ status:"ok", msg: "Men's pants found", mensPantsCatalogue });
    
})


/**
 * 2)
 * Name : Load Pants Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shoes", function(req, res) {
    
    const mensShoesCatalogue = shoes.filter(item => item.gender === "m");
    return res.send({ status:"ok", msg: "Men's shoes found", mensShoesCatalogue });
    
})




/**
 * X)
 * Name : Load Clothes Women
 * Method : GET
 * Route : /women
 */




/**
 * X)
 * Name : Load Clothes Kids
 * Method : GET
 * Route : /kids
 */


exports.shop = shop;