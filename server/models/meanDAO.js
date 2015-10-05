var mongoose=require('mongoose');

module.exports.UserSchemaStructure=mongoose.model('registrationdb',{
uname:String,
pwd:String,
name:String,
email:String

});