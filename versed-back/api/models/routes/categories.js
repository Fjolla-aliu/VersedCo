/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var Category = require('../models/Category');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get("/", function(req,res,next){
    Category.find(function(err,Categoris){
        if(err){
            next(err);
        }
        res.json(Categoris);
    });
});

router.get("/:id",function(req,res,next){
    Category.findById(req.params.id, function(err,Category){
        if(err){
            next(err);
        }
        res.json(Category);
    });
});

router.post("/", function(req,res,next){
    Category.create(req.body, function(err,Category){
        if(err){
            next(err);
        }
        res.json(Category);
    });
});

router.put("/:id", function(req,res,next){
    Category.findByIdAndUpdate(req.params.id, req.body, function(err,Category){
        if(err){
            next(err);
        }
        res.json(Category);
    });
});

router.delete("/:id", function(req,res,next){
    Category.findByIdAndDelete(req.params.id, req.body, function(err,Category){
        if(err){
            next(err);
        }
        res.json(Category);
    });
});

module.exports = router;