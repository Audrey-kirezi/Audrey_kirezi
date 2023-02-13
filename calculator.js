var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var addition=require('./addition')
var product=require('./multiplication')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
app.get('/addition', function (req, res) {
 
    res.send('The sum is: ' + Number(addition));

})
app.get('/multiplication',(req,res)=>{
    res.send('The product is: '+ Number(product));
})

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
