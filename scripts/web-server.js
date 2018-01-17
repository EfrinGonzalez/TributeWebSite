var express = require('express');
const stringify = require('json-stringify-safe')
var path = require('path');
var events = require('./eventsController');
var List = require('./List.js');
var User = require('./User.js')
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
app.post('/data/event/:id', events.delete);

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
mongoose.connect('mongodb://tributesalsa_admin:admin@ds239177.mlab.com:39177/tributesalsa_db', { useMongoClient: true }, (err) => {
    if(!err)
        console.log('connected to Salsa dura mongo')
})

app.get('/hello', function (req, res) {
    res.send('Hello World!');
});

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

app.get('/list', (req,res) => {
    try {
        List.find({}, function(err, list) {
            if(err) {
                res.send(err);
                return;
            }
            res.json(list);
        });
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})


/*
mongoose.connect('mongodb://tributesalsa_admin:admin@ds239177.mlab.com:39177/tributesalsa_db', {useMongoClient: true})
*/
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//app.listen(8000);
//console.log('Listening on port ' + 8000 + '...');