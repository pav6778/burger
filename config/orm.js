var connection = require("../config/connection.js")


function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


var orm = {
    all: function(tableInput, cb){
        var queryString = "SELECT burger_name FROM ??";
connection.query(queryString, [tableInput], function(err,result){
    if(err) {
        throw err;
    }

    cb(result);
});
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString)
    connection.query(queryString, vals, function(err, results){
        if(err) {
            throw err
        }
        cb(results)
    })
    }
}


module.exports = orm;


//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`