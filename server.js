var express = require('express');
var app = express();
var cors = require('cors');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());

var originsWhitelist = [
    'http://localhost:4200' //this is my front-end url for development
    //, 'http://www.myproductionurl.com'
];
var corsOptions = {
    origin: function(origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
}
//here is the magic
app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(require('./routes/appRoutes'), function(req, res, next) {
    next();
});



app.listen(PORT, function() {
    console.log(`Server started at ${PORT}...`);
})