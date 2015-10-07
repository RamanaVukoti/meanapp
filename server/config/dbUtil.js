var mongoose = require('mongoose');
var env = require("./config");
var dbUtils={};
dbUtils.getConnection = function() {

   var db= mongoose.connect(env.dbUrl, function() {
        console.log("connection established")
    });

    return db;
}


module.exports=dbUtils;