var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');


var app = express();

// app.use(bodyParser.json())
// app.use(cors(corsOptions))

app.use(express.static(__dirname + '/public'));




//
// var corsOptions = {
//   origin: 'http://localhost:4000'
// }









app.listen(4000, function(){
  console.log('Listening on port ' + 4000);
})
