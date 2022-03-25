const { Router } = require("express");
const shop = Router();
const { shirts, pants, shoes, dresses } = require("../data");
const { shirtsModel } = require("../models/shirts");
const { pantsModel } = require("../models/pants");
const { dressesModel } = require("../models/dresses");
const { shoesModel } = require("../models/shoes");
const { usersModel } = require("../models/usersModel");
/*
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
*/

/**
 * 1)
 * Name : Load Shirts Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shirts", function(req, res) {

    shirtsModel.find({gender : "m"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shirts on database" });
        } else {
            res.send({ status: "ok", mensShirtsCatalogue: products })
        }
      });
    
})


/**
 * 2)
 * Name : Load Pants Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/pants", function(req, res) {
    
    pantsModel.find({gender : "m"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find pants on database" });
        } else {
            res.send({ status: "ok", mensPantsCatalogue: products })
        }
      });
    
})


/**
 * 3)
 * Name : Load Shoes Men
 * Method : GET
 * Route : /men
 */

shop.get("/men/shoes", function(req, res) {
    
    shoesModel.find({gender : "m"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shoes on database" });
        } else {
            res.send({ status: "ok", mensShoesCatalogue: products })
        }
      });
    
})


/**
 * 4)
 * Name : Load Shirts Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/shirts", function(req, res) {

    shirtsModel.find({gender : "f"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shirts on database" });
        } else {
            res.send({ status: "ok", womensShirtsCatalogue: products })
        }
      });
    
})


/**
 * 5)
 * Name : Load Pants Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/pants", function(req, res) {
    
    pantsModel.find({gender : "f"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find pants on database" });
        } else {
            res.send({ status: "ok", womensPantsCatalogue: products })
        }
      });
    
})


/**
 * 6)
 * Name : Load Dresses Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/dresses", function(req, res) {
    
    dressesModel.find({gender : "f"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find dresses on database" });
        } else {
            res.send({ status: "ok", womensDressesCatalogue: products })
        }
      });
    
})


/**
 * 7)
 * Name : Load Shoes Women
 * Method : GET
 * Route : /men
 */

 shop.get("/women/shoes", function(req, res) {
    
    shoesModel.find({gender : "f"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shoes on database" });
        } else {
            res.send({ status: "ok", womensShoesCatalogue: products })
        }
      });
    
})


/**
 * 8)
 * Name : Load Shirts Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/shirts", function(req, res) {

    shirtsModel.find({gender : "k"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shirts on database" });
        } else {
            res.send({ status: "ok", kidsShirtsCatalogue: products })
        }
      });
    
})


/**
 * 9)
 * Name : Load Pants Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/pants", function(req, res) {
    
    pantsModel.find({gender : "k"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find pants on database" });
        } else {
            res.send({ status: "ok", kidsPantsCatalogue: products })
        }
      });
    
})


/**
 * 10)
 * Name : Load Shoes Kids
 * Method : GET
 * Route : /kids
 */


 shop.get("/kids/shoes", function(req, res) {
    
    shoesModel.find({gender : "k"}, (error, products) => {
        if (error) {
            return res.send({ 
                status: "error", 
                msg: "Couldn't find shoes on database" });
        } else {
            res.send({ status: "ok", kidsShoesCatalogue: products })
        }
      });
    
})


exports.shop = shop;