/* global angular alert moment*/
angular.module('todoApp', [])
  .controller('TodoListController', function ($http, $interval) {
    var todoList = this
    todoList.title = 'Hotel booking'
    get()
    $interval(function () {
      get()
    }, 3000)
    todoList.add = function (input) {
      save(input)
    }
    function save (data) {
      $http.post('/api/data', data) // insert object
        .then(function success (response) {
          console.log(response)
          get()
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
    function get () {
      $http.get('/api/data')
        .then(function success (response) {
          todoList.getData = response.data
        }, function error (response) {
          alert(response.data.message)
        })
    }
    todoList.time = function (time) {
      return moment(time).format('MMMM Do YYYY')
    }
    todoList.delete = function (id, index) {
      console.log(id)
      $http.delete('/api/data/' + id)
        .success(function (data) {
          alert('delete')
          todoList.getData.splice(index, 1)
          get()
        })
        .error(function (data) {
          alert('error')
          console.log('Error: ' + data)
        })
    }
  })
