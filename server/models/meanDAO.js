var mongoose=require('mongoose');

module.exports.UserSchemaStructure=mongoose.model('user4',{
title:String,
email:String,
});