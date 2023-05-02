/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var Product =  require('../models/Product');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get("/", function(req,res,next){
    Product.find(function(err,products){
        if(err){
            next(err);
        }
        res.json(products);
    });
});

router.get("/:id",function(req,res,next){
    Product.findById(req.params.id, function(err,product){
        if(err){
            next(err);
        }
        res.json(product);
    });
});

router.post("/", function(req,res,next){
    Product.create(req.body, function(err,product){
        if(err){
            next(err);
        }
        res.json(product);
    });
});

router.put("/:id", function(req,res,next){
    Product.findByIdAndUpdate(req.params.id, req.body, function(err,product){
        if(err){
            next(err);
        }
        res.json(product);
    });
});

router.delete("/:id", function(req,res,next){
    Product.findByIdAndDelete(req.params.id, req.body, function(err,product){
        if(err){
            next(err);
        }
        res.json(product);
    });
});

module.exports = router;