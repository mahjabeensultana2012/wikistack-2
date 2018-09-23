const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const path = require('path');
const layout = require('./views/layout');
const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyPrser.json());

app.get('/', (req,res) => {
  res.send(layout("hello world"));
});

app.listen(3000, function(){
  console.log("I'm listening");
});
