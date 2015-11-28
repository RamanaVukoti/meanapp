var mongoose=require('mongoose');
    Schema = mongoose.Schema;

module.exports.UserSchemaStructure=mongoose.model('registrationdb',new Schema({
uname:String,
pwd:String,
name:String,
email:String

}));