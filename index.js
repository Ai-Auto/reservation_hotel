var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/Hotel')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

var data = require('./models/data/data.route.js')
app.use('/', data)

var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
