const { Router } = require("express");
const shop = Router();
const { shirts, pants, shoes, dresses } = require("../data");

/**
 * 1)
 * Name : Load Shirts Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shirts", function(req, res) {
    
    const mensShirtsCatalogue = shirts.filter(shirt => shirt.gender === "m");
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
 * 3)
 * Name : Load Shoes Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shoes", function(req, res) {
    
    const mensShoesCatalogue = shoes.filter(item => item.gender === "m");
    return res.send({ status:"ok", msg: "Men's shoes found", mensShoesCatalogue });
    
})


/**
 * 4)
 * Name : Load Shirts Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/shirts", function(req, res) {
    
    const womensShirtsCatalogue = shirts.filter(item => item.gender === "f");
    return res.send({ status:"ok", msg: "Women's shirts found", womensShirtsCatalogue });
    
})


/**
 * 5)
 * Name : Load Pants Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/pants", function(req, res) {
    
    const womensPantsCatalogue = pants.filter(item => item.gender === "f");
    return res.send({ status:"ok", msg: "Women's pants found", womensPantsCatalogue });
    
})


/**
 * 6)
 * Name : Load Dresses Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/dresses", function(req, res) {
    
    const womensDressesCatalogue = dresses.filter(item => item.gender === "f");
    return res.send({ status:"ok", msg: "Women's dresses found", womensDressesCatalogue });
    
})


/**
 * 7)
 * Name : Load Shoes Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/shoes", function(req, res) {
    
    const womensShoesCatalogue = shoes.filter(item => item.gender === "f");
    return res.send({ status:"ok", msg: "Women's shoes found", womensShoesCatalogue });
    
})


/**
 * 8)
 * Name : Load Shirts Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/shirts", function(req, res) {
    
    const kidsShirtsCatalogue = shirts.filter(item => item.gender === "k");
    return res.send({ status:"ok", msg: "Kids' shirts found", kidsShirtsCatalogue });
    
})


/**
 * 9)
 * Name : Load Pants Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/pants", function(req, res) {
    
    const kidsPantsCatalogue = pants.filter(item => item.gender === "k");
    return res.send({ status:"ok", msg: "Kids' Pants found", kidsPantsCatalogue });
    
})


/**
 * 10)
 * Name : Load Pants Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/shoes", function(req, res) {
    
    const kidsShoesCatalogue = shoes.filter(item => item.gender === "k");
    return res.send({ status:"ok", msg: "Kids' Shoes found", kidsShoesCatalogue });
    
})


exports.shop = shop;