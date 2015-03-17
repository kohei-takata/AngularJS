angular.module('App', ['ngRoute']).controller('MainController', ['$scope', function ($scope) {
 $scope.todos = [];

 $scope.addTodo = function () {
  $scope.todos.push({
   title: Math.random(),
   done: false
  });
 };
}]);
