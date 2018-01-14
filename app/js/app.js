'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      //Admin panel routes
        $routeProvider.when('/admin-panel',
            {
                templateUrl:'templates/AdminLogin.html',
                //controller: 'EventListController'
            });
        $routeProvider.when('/admin/home',
            {
                templateUrl:'templates/AdminEventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/admin/newEvent',
            {
                templateUrl:'templates/AdminNewEvent.html',
                controller: 'EditEventController'
            });

        //Standar user routes
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
