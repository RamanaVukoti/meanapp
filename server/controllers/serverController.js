var daoLayer = require("../models/meanDAO");

module.exports.create = function(req, resp) {

    var dao = new daoLayer.UserSchemaStructure(req.body.data);
    dao.save(function(err, result) {
        var json2 = {
            statusMsg: "Success",
            "respData": result
        }
        resp.json(json2);
    });

}

module.exports.getList = function(req, resp) {
    daoLayer.UserSchemaStructure.find(function(err, result) {
        resp.json(result);

    });

}