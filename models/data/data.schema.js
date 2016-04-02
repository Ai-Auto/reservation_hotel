;(function () {
  'use strict'
  var modelName = 'data'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema
  var schema = new Schema({
    name: String,
    surname: String,
    room: Number,
    start: {type: Date, default: Date.now},
    end: {type: Date, default: Date.now}
  })
  module.exports = mongoose.model(modelName, schema)
})()
