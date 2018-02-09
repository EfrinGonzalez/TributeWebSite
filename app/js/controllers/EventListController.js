'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, eventData) {
        $scope.sortType = 'date '; // set the default sort type
        $scope.events = eventData.getAllEvents();
       // $scope.events = eventData.event;
    }
);