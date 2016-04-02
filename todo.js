/* global angular moment*/
angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList = this
    todoList.title = 'HOTEL'
    todoList.r1 = []
    todoList.r2 = []
    todoList.r3 = []
    todoList.r4 = []
    todoList.r5 = []
    todoList.r6 = []
    todoList.time = function (time) {
      return moment(time).format('MMMM Do YYYY')
    }
    todoList.sub = function (input) {
      var data = {
        name: input.name,
        surname: input.surname,
        room: input.room,
        start: input.start,
        end: input.end
      }
      // if (data.room === 1) {
      //   check1 (data)
      // }
      check(data.room, data)
    }
    function check (index, data) {
      if (index === 1) {
        todoList.r1.push(data)
      }
      if (index === 2) {
        todoList.r2.push(data)
      }
      if (index === 3) {
        todoList.r3.push(data)
      }
      if (index === 4) {
        todoList.r4.push(data)
      }
      if (index === 5) {
        todoList.r5.push(data)
      }
      if (index === 6) {
        todoList.r6.push(data)
      }
    }
  })
