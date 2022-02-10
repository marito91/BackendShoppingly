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
    console.log(mensShirtsCatalogue);
    return res.send({ status:"ok", msg: "Men's shirts found", mensShirtsCatalogue });
    

/*    
    shirts.find({}, (error, garment) => {
        if (error) {
            return res.send({ status:"Error", msg: "Couldn't find any shirts" })
        } else {
            const mensShirtCatalogue = garment.map(g => g);
            console.log(mensShirtCatalogue)
        }
    }) */
})




/**
 * 2)
 * Name : Load Clothes Women
 * Method : GET
 * Route : /women
 */




/**
 * 3)
 * Name : Load Clothes Kids
 * Method : GET
 * Route : /kids
 */


exports.shop = shop;