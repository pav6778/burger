var express = require("express");

var router = express.Router();

var burger = require("../models/burgers.js");

router.get("/", function(req, res){
    burger.all(function(data){
res.render("index", {burger: data})
    })
});
router.post("/index", function(req, res){
    burger.create([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    })
})

module.exports = router;
