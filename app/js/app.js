'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });
        $routeProvider.when('/home',
            {
                templateUrl: 'templates/LimitedEventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/calendar',
            {
                templateUrl: 'templates/FullEventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/about',
            {
                templateUrl:'templates/About.html'
            });
        $routeProvider.when('/gallery',
            {
                templateUrl:'templates/Gallery.html'
            });
        $routeProvider.when('/contact',
            {
                templateUrl:'templates/Contact.html'
            });
        $routeProvider.when('/blog',
            {
                templateUrl:'templates/Blog.html'
            });
        $routeProvider.when('/colaborators',
            {
                templateUrl:'templates/Colaborators.html'
            });
        $routeProvider.otherwise({redirectTo: '/home'});
        $locationProvider.html5Mode(true);

    });
