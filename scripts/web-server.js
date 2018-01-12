var express = require('express');
const stringify = require('json-stringify-safe')
var path = require('path');
var events = require('./eventsController');
//var Event = require('./Event');
var User = require('./User');
var app = express();
var rootPath = path.normalize(__dirname + '/../');//root of app
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));



app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);


app.post('/data/event/:id', events.save);

//When there is not a defined route, it will send index.html (html5 routing)
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });


/*
app.get('/data/event', function (req, res) {
    try{
        var events = Event.find({}
        )
    res.send(events)}
    catch (error){
        console.error(error)
        res.sendStatus(500)
    }
});
*/


app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

mongoose.connect('mongodb://tributesalsa_admin:admin@ds239177.mlab.com:39177/tributesalsa_db', {useMongoClient: true})

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//app.listen(8000);
//console.log('Listening on port ' + 8000 + '...');