/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var Order = require('../models/Order');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get("/", function(req,res,next){
    Order.find(function(err,Orders){
        if(err){
            next(err);
        }
        res.json(Orders);
    });
});

router.get("/:id",function(req,res,next){
    Order.findById(req.params.id, function(err,Order){
        if(err){
            next(err);
        }
        res.json(Order);
    });
});

router.post("/", function(req,res,next){
    Order.create(req.body, function(err,Order){
        if(err){
            next(err);
        }
        res.json(Order);
    });
});

router.put("/:id", function(req,res,next){
    Order.findByIdAndUpdate(req.params.id, req.body, function(err,Order){
        if(err){
            next(err);
        }
        res.json(Order);
    });
});

router.delete("/:id", function(req,res,next){
    Order.findByIdAndDelete(req.params.id, req.body, function(err,Order){
        if(err){
            next(err);
        }
        res.json(Order);
    });
});

module.exports = router;