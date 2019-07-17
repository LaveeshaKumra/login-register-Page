var express = require('express');
var routes = require('routes');
var http = require('http');
var url = require('url');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

const cors=require('cors');
app.use( bodyParser.json() );

app.use(cors());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));
var mysql = require('mysql');
var con = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'userdata'
});
app.use(express.json());
app.set('port',process.env.PORT || 4300);

app.post('/check',function(req,res){
	var sql="select * from data where username=? and password=?";
	console.log(req.body.pass);
	con.query(sql,[req.body.name,req.body.pass],function(err,result){
		console.log(result);
		if(result.length>0){
			//console.log(result);
		res.send(result);
		}
		else{
			console.log("login unsuccessful , try again !");
			
			//res.send("a");
		}
	});
});


app.post('/new',function(req,res){
	var sql="insert into data values (?,?,?,?)";
	con.query(sql,[req.body.name,req.body.pass,req.body.add,req.body.mn],function(err,result){
		console.log(sql);
		console.log("done");
	});
});


http.createServer(app).listen(app.get('port'),function(){
	console.log('Express Server listening on Port '+app.get('port'));
});