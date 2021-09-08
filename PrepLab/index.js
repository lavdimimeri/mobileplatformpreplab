require('./models/db')
var express = require('express');
var app=express();
const path=require('path');
const exphbs = require('express-handlebars');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

const serverPort=3000;

app.set('views',path.join(__dirname,'/views'));
app.engine('hbs', exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts'}));
app.set('view engine', 'hbs');
const employeeController=require('./controller/employeeController');

app.get('/',function(request,response){
    response.send('index page requested');
    response.end();
})

app.listen(serverPort,()=>{
    console.log("Server running on port: " + serverPort)
})

app.use('/employee',employeeController);