const express = require('express'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'templo_zavi'
}, 'single'));
app.set('json spaces', 2);
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
