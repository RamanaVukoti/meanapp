


var meanControllerServer=require('../../../server/controllers/serverController');

module.exports.routesConfig=function(app){


app.get('/api',meanControllerServer.getList_old);
app.post('/api',meanControllerServer.create_old);
    
    
    
app.post('/api/postData',meanControllerServer.create);
app.get('/api/getData',meanControllerServer.getList);
app.put('/api/findData',meanControllerServer.findUser);
app.delete('/api/deleteData/:title',meanControllerServer.deleteUser);    

}