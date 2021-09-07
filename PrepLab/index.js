var express = require('express');
var app=express();

const serverPort=3000;

app.get('/',function(request,response){
    response.send('index page requested');
    response.end();
})

app.listen(serverPort,()=>{
    console.log("Server running on port: " + serverPort)
})