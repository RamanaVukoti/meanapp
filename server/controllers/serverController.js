var daoLayer = require("../models/meanDAO");

module.exports.create_old = function(req, resp) {

    console.log(req.body)
    var dao = new daoLayer.UserSchemaStructure(req.body);
    dao.save(function(err, result) {
        var json2 = {
            statusMsg: "Success",
            "respData": result
        }
        resp.json(json2);
    });

}

module.exports.create = function(req, resp) {   
    
    console.log(req.body)
    var dao = new daoLayer.UserSchemaStructure(req.body);
    dao.save(function(err, result) {
        if (err) {
            var respJson = {
                ststsusMsg: "Failure",
                "postedData": result
            }
            
        } else {

            var respJson = {
                statusMsg: "Success",
                "respData": result
            }
        }
        console.log("in server controler");
        console.log(result)
        resp.json(respJson);
    });
}

module.exports.getList_old = function(req, resp) {
    daoLayer.UserSchemaStructure.find(function(err, result) {
        resp.json(result);

    });

}

module.exports.getList = function(req, resp) {
    
    //daoLayer.UserSchemaStructure.find({},function(err, result) { (any syntax is fine)
    
    
    daoLayer.UserSchemaStructure.find({},function(err, result) {
        console.log(result);
       // var resultMo={data:result}
        resp.json(result);

    });

}
/*
module.exports.findUser = function(req, resp) {
    console.log(req.params.title);
    daoLayer.UserSchemaStructure.find({title:req.params.title},function(err, result) {
        console.log(result);
       
        resp.json(result);

    });

}*/



module.exports.findUser = function(req, resp) {
    
    
    
  
    daoLayer.UserSchemaStructure.find( req.body,function(err, result) {
        
        resp.json(result);

    });

}

module.exports.deleteUser = function(req, resp) {
    console.log(req.params.title);
    daoLayer.UserSchemaStructure.remove({title:req.params.title},function(err, result) {
        console.log(result);
       
        resp.json(result);

    });

}
