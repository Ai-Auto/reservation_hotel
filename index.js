var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/Hotel')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
var data = require('./models/data/data.route.js')
app.use('/api/data', data)
app.use(express.static('public'))
var Model = require('./models/data/data.schema.js')
app.delete('/api/data/:id', function (req, res) {
  Model.findById(req.params.id, function (err, Model) {
    Model.remove(function (err) {
      if (!err) {
        console.log('removed')
        return res.send('')
      } else {
        console.log(err)
      }
    })
  })
})
var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('App listening at http://%s:%s', host, port)
})
