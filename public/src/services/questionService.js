angular.module('recruite.service', ['ngResource']).factory('Rest', function ($resource) {
    return $resource('api/questions', {}, {
        query:  {method: 'GET', isArray: true},
        get:    {method: 'GET'},
        remove: {method: 'DELETE'},
        edit:   {method: 'PUT'},
        add:    {method: 'POST'}
    });
});
