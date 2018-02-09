eventsApp.factory('eventData', function($resource) {

    //var resource = $resource('/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    var resource = $resource('/event/:id', {id:'@id'});

    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            return resource.save(event);
        },
        /*update: function(eventId) {
            console.log("inside update function");
            return resource.save({eventId});
        },*/
        delete: function(eventId) {
             console.log("Event data.js: " + eventId );
            return resource.delete({id:eventId});
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});
