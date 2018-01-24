eventsApp.factory('eventData', function($resource) {
   // var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    var resource = $resource('/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
            return resource.save(event);
        },
        delete: function(eventId) {
             console.log("Event data.js: " + eventId );
            return resource.delete({id:eventId});
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});
