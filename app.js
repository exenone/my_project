const express=require('express');
const app=express();

const http = require('http');

const hostname = 'localhost';
const port = 3000;

const dbRouter =require('./src/routes/dbRoutes/dbRouter')


app.use('/Db',dbRouter);
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));
 

app.get('/',function(req,res){
    res.send('welcome!');
  
  });
  
  app.get('/routing',function(req,res){
    res.send('welcome!its routing');
  
  });

 
  app.listen(port, hostname, (err) => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  