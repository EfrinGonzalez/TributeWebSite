eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },
        save: function(event) {
          //  event.id = 'sdfhadkj';
        // console.log("size: "+resource.query.getAll);
            return resource. save(event);
        },
        delete: function(eventId) {
            //  event.id = 'sdfhadkj';
             console.log("Event data.js: " + eventId );
            return resource.remove({id:eventId});
             //return resource.delete({id:eventId});
        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});
