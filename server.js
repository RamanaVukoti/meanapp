


var express=require('express');
var mongoose=require('mongoose');

var bcrypt=require('bcrypt-node');
var bodyParser=require('body-parser');


app=express();

app.set('port', (process.env.PORT || 5000));




//if u do not specify the all static files then node wil look into the public folder automatically
//(recommendde)
//app.use(express.static(__dirname+"/public"));

//connect to DB on server startup
//local
mongoose.connect("mongodb://localhost:27017/register",function(suc){
    console.log("succesfully connected");
});
 
//remote DB - mngolab
//mongoose.connect("mongodb://RAMANAVUKOTI:RAM$akash143@ds037283.mongolab.com:37283/meandb");



//body pasrerr ( no need )
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//importing server controller( 'node-back-end controller' )- jst like java,, provindig annotation to  spring controller
//var meanControllerServer=require('./server/controllers/serverController')


//welcome file
app.get('/index.htm',function(req,resp){
resp.sendFile(__dirname+"/client/views/index.html");
    

});

app.get('/index2.htm',function(req,resp){
resp.sendFile(__dirname+"/client/views/index2.html");
    

});


app.get('/',function(req,resp){
resp.sendFile(__dirname+"/client/views/index.html");
    

});

//REST API calls

var routeConfig=require('./client/jsCustom/angular/routes');
routeConfig.routesConfig(app);

/*app.get('/api',meanControllerServer.getList2);
app.post('/api',meanControllerServer.create2);
app.post('/api/postData',meanControllerServer.create);
app.get('/api/getData',meanControllerServer.getList);*/




    
    


//static files loading(required files)

app.use('/cssLib',express.static(__dirname+'/client/cssLib'));

app.use('/jsLib',express.static(__dirname+'/client/jsLib'));

app.use('/cssCustom',express.static(__dirname+'/client/cssCustom'));

app.use('/jsCustom',express.static(__dirname+'/client/jsCustom'));

app.use('/images',express.static(__dirname+'/client/images'));

app.use('/json',express.static(__dirname+'/client/json'));



app.listen(app.get('port'),function(){

console.log('Mean APP running  on port ',app.get('port'));
});