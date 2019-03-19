var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5

var upload = multer() // for parsing multipart/form-data

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  next();
});

app.get('/:gameName/version', function(req, res) {
  console.log("GET /" + req.params.gameName + "/version")

  res.send('0.4.8')
})

app.post('/:gameName/save', function(req, res) {
  console.log("POST /" + req.params.gameName + "/save")

  // TODO: Salvar e responder com o id do documento
  //    get documento
  //    update documento
  //    return documento

  res.json(req.body)
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
