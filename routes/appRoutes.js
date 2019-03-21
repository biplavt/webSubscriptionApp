var express = require('express');
var router = express.Router();
var path = require('path');

var viewPath = __dirname + '/../public/';

var webtoken = require('./../security/webtoken.js');
var webAppController=require('./../controller/webApp.controller');

router.get('/', function(req, res) {
    res.sendFile(path.resolve(viewPath + 'home.html'));
})


//authentication
router.use(function(req, res, next) {
    var login = webtoken.token(req.header('x-auth')).then(function(result) {
    	
        if (result=='true') {
            // console.log('authenticated!');
            next();
        }
    }).catch(function(error){
    	res.status(400).send('Invalid token');
    });
})


router.route('/v1/WA/rolesByEmail/:email').get(webAppController.gRolesByEmail);

module.exports= router;