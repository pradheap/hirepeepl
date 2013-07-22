angular.module('recruite', ['recruite.service']).
    config(function($routeProvider) {
    console.log("Configuring app.js");
    $routeProvider.
    when('/questions', {templateUrl: 'partials/questionList.html', controller: 'QuestionsCtrl'}).
    otherwise({redirectTo: '/questions'});
})


