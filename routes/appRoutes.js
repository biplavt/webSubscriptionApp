var express = require('express');
var router = express.Router();
var path = require('path');

var viewPath = __dirname + '/../public/';


var webAppController=require('./../controller/webApp.controller');


router.get('/', function(req, res) {
    res.sendFile(path.resolve(viewPath + 'home.html'));
})

router.route('/v1/WA/rolesByEmail/:email').get(webAppController.gRolesByEmail);

module.exports= router;