// array was for mocking the Data in the controller
// $http was retrieving the json without a $resource service
//uncommented working is with a $resource REST service
//var QuestionsCtrl = function($scope, Rest) {
  //   $scope.questions = Rest.query();
   //$http.get('/api/questions').success(function(data) {
       //   $scope.questions = data
        //[{"level":"first","language":"PHP"},
        //{"level":"second","language":"JAVA"},
        //{"level":"third","language":"PYTHON"}];
     //});
//};
    var myApp = angular.module('recruite');
     
    myApp.controller('QuestionsCtrl', ['$scope', 'Rest', function ($scope, Rest) {
        $scope.questions = Rest.query();
    }]);
