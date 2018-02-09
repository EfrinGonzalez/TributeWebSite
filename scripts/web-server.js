var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;/*This line solves the problem with deprecated and error
DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead: http://mongoosejs.com/docs/promises.html*/
var jwt = require('jwt-simple')

const stringify = require('json-stringify-safe')
var path = require('path');
//var events = require('./eventsController');

var Event = require('./Event.js');
var User = require('./User.js')
var app = express();
var rootPath = path.normalize(__dirname + '/../');//root of app


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static( rootPath + '/app'));


//This endpoint will be use to upload images
//app.get('/data/event/:id', events.get);
//app.get('/data/event', events.getAll);
//app.post('/data/event/:id', events.save);
//app.post('/data/event/:id', events.delete);

//update existing event from DB
/*app.put('/event/:id', (req,res) => {
    console.log("inside server");
    var newEvent = req.body;
    var event = new Event(newEvent);

    try {
        console.log("id:"+req.params.id);
        Event.findOne({ _id: req.params.id }, function(err, event) {
            if(err) {
                console.log("The coming id is:"+id);
                res.send(err);
                return;
            }
            event.save({},function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to create new contact.");
                } else {
                    //res.status(201).json(doc.ops[0]);
                    //res.json(event);
                    console.log('updated in database');
                    res.redirect('/admin/home');
                }
            });


            //res.json(event);
        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
});*/


//Delete in DB (It deletes but does not get back to admin/home)
app.delete('/event/:id', (req,res) => {
    try {
        console.log("id:"+req.params.id);
        //Event.remove({ _id: req.params.id }, function(err, event) {
        Event.remove({ _id: req.params.id }, function(err) {
            if(err) {
                console.log("The coming id is:"+id);
                res.send(err);
                return;
            }
            // res.json(event);//return the whole event data
            console.log('deleted from database');

        //Set HTTP method to GET
            req.method = 'GET'
            //res.redirect('/admin/home');
            res.redirect(req.get('referer'));
            //res.sendFile(rootPath + '/app/templates/AdminEventList.html');


        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
});





//Save new trick event in DB
/*app.post('/event', (req, res) => {
    //var id;
   // console.log("Comming: "+id);
    var newEvent = req.body;
    var event = new Event(newEvent);

    try {
        console.log("id:"+event._id);
        Event.findOne({ _id: req.params.id }, function(err, event) {
            if(err) {
                //console.log("The coming id is:"+id);
                res.send(err);
                return;
            }

            event._id = req.params.id;
            //res.json(event);
            Console.log("Event_id:"+event._id);

        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }



    event.save({},function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new contact.");
        } else {
            //res.status(201).json(doc.ops[0]);
            //res.json(event);
            console.log('saved to database');
            res.redirect('/admin/home');
        }
    });

});*/

app.post('/event', (req, res) => {
    var newEvent = req.body;
    var event = new Event(newEvent);
   // console.log("Event: "+event.toString());

   event.save({},function(err, doc) {
        if (err) {
            handleError(res, err.message, "Failed to create new contact.");
        } else {
            //res.status(201).json(doc.ops[0]);
            //res.json(event);
            console.log('saved to database');
            res.redirect('/admin/home');
        }
    });
});


//Get all events
app.get('/event', (req,res) => {
    try {
        Event.find({}, function(err, event) {
            if(err) {

                res.send(err);
                return;
            }
            res.json(event);
        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
});

//Get one event from DB
app.get('/event/:id', (req,res) => {
    try {
        console.log("id:"+req.params.id);
        Event.findOne({ _id: req.params.id }, function(err, event) {
            if(err) {
                console.log("The coming id is:"+id);
                res.send(err);
                return;
            }
            res.json(event);
        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
});




app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

//Funciton to get users from DB
app.get('/users', (req,res) => {
    try {
        User.find({}, function(err, users) {
            if(err) {
                res.send(err);
                return;
            }
            res.json(users);
        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})



//When there is not a defined route, it will send index.html (html5 routing)
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });


mongoose.connect('mongodb://tributesalsa_admin:admin@ds239177.mlab.com:39177/tributesalsa_db', { useMongoClient: true }, (err) => {
    if(!err)
        console.log('connected to Salsa dura mongo')
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

