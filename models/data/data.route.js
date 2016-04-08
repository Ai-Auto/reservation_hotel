;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Model = require('./data.schema.js')

  router.get('/api/data', function (req, res, next) {
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })
  router.post('/api/data', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })
  router.post('/api/del', function (req, res, next) {
    console.log(req.body._id)
    Model.remove({_id: req.body._id}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })

  module.exports = router
})()
