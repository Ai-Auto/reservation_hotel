/* global angular alert moment*/
angular.module('todoApp', [])
  .controller('appController', function ($http, $interval) {
    var app = this
    app.title = 'Hotel booking'
    get()
    $interval(function () {
      get()
    }, 3000)
    app.add = function (input) {
      getTime(input)
    }
    function getTime (input) {
      $http.get('/api/data')
        .then(function success (response) {
          if (response.data.length === 0) {
            console.log('000')
            save(input)
          }
          if (app.time(input.start) === app.time(response.data.start)) {
            console.log(app.time(input.start) === app.time(response.data.start))
            console.log('เงื่อนไขที่วันซ้ำ')
          }
          if (app.time(input.start) !== app.time(response.data.start)) {
            console.log(app.time(input.start) !== app.time(response.data.start))
            console.log('เงื่อนไขที่วันไม่ซ้ำ')
            save(input)
          }
        })
    }
    function save (data) {
      $http.post('/api/data', data)
        .then(function success (response) {
          console.log(response)
          get()
        })
    }
    function get () {
      $http.get('/api/data')
        .then(function success (response) {
          app.getData = response.data
        })
    }
    app.time = function (time) {
      return moment(time).format('MMMM Do YYYY')
    }
    app.delete = function (id, index) {
      $http.delete('/api/data/' + id)
        .success(function (data) {
          alert('delete')
          app.getData.splice(index, 1)
          get()
        })
    }
  })
