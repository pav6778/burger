var orm = require("../config/orm.js");

burger = {
    all: function(cb) {
        
    orm.all("burgers", function(res){
        console.log(res)
        cb(res);
    });
    },
    create: function(cols, vals, cb){
    orm.create("burgers", cols, vals, function(res){
        cb(res)
    })
    
    } 
    
}

module.exports = burger;