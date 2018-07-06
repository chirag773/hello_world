var express           = require('express');
var app               = express();
var bodyParser        = require("body-parser");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';




app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.render("index")
})

// app.listen(3000, function() {
//   console.log('Example app listening on port 3000!');
// });


app.listen(server_port, server_ip_address, function () {

    console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );

});