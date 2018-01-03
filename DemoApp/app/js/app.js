'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/AdminEventList.html',
                controller: 'EventListController'
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
                templateUrl:'templates/About.html',
                //controller: 'EditEventController'
            });
        $routeProvider.when('/gallery',
            {
                templateUrl:'templates/Gallery.html',
                //controller: 'EditEventController'
            });
        $routeProvider.when('/contact',
            {
                templateUrl:'templates/Contact.html',
                //controller: 'EditEventController'
            });
        $routeProvider.when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            })
        //$routeProvider.otherwise({redirectTo: '/events'});
        $routeProvider.otherwise({redirectTo: '/home'});
        $locationProvider.html5Mode(true);

    });
