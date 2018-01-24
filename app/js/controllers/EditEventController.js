'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $routeParams, $route) {
        //$scope.event = {};
        $scope.event = $route.current.locals.event
        $scope.saveEvent = function(event, newEventForm) {
           // if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function(response) { window.location = 'admin/home';console.log('success', response) })
                    .catch(function(response) { console.log('failure', response)});
           // }

        };

        $scope.cancelEvent = function() {
        window.location = 'admin/home';
        }

    }
);