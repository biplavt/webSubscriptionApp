var express = require('express');
var app = express();

const bodyParser=require('body-parser');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use(require('./routes/appRoutes'),function(req,res,next){
	next();
});



app.listen(PORT, function() {
    console.log(`Server started at ${PORT}...`);
})