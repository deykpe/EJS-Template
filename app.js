const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res){
var today = new Date();
var currentDay = today.getDay()
if(currentDay === 5 || currentDad === 0){
    res.write('<h1>Weekend!</h1>');
} else {
    res.write('<h1>studying day!</h1>');
    res.write('<p>studying day!</p>');
    res.send();
}
});

app.listen(3000, function(){
    console.log('port running on 3000')
});

