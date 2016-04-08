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
      save(input)
    }
    function save (data) {
      $http.post('/api/data', data)
        .then(function success (response) {
          console.log(response)
          get()
          alert('Success')
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
