const express = require('express');
const app = express();                 /* npm i --s ejs */

app.use(express.static(__dirname + '/views'));

app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/projetos', function(req, res){
	res.sendFile(__dirname + '/views/projetos.html');
});