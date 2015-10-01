


var express=require('express');
var mongoose=require('mongoose');

var bcrypt=require('bcrypt-node');
var bodyParser=require('body-parser');


app=express();


//connect to DB on server startup
//mongoose.connect("mongodb://localhost:27017/register");

//body pasrerr ( no need )
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//importing server controller( 'node-back-end controller' )- jst like java,, provindig annotation to  spring controller
var meanControllerServer=require('./server/controllers/serverController')


//welcome file
app.get('/index.htm',function(req,resp){
resp.sendFile(__dirname+"/client/views/index.html");
    

});

//REST API calls

app.get('/api',meanControllerServer.getList);
app.post('/api',meanControllerServer.create);




    
    


//static files loading(required files)

app.use('/cssLib',express.static(__dirname+'/client/cssLib'));

app.use('/jsLib',express.static(__dirname+'/client/jsLib'));

app.use('/cssCustom',express.static(__dirname+'/client/cssCustom'));

app.use('/jsCustom',express.static(__dirname+'/client/jsCustom'));

app.use('/images',express.static(__dirname+'/client/images'));



app.listen(1290,function(){

console.log('Mean APP running  on port 1290');
});