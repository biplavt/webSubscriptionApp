var webAppModel = require('./../model/webApp.model');

function gRolesByEmail(req, res) {
    
    webAppModel.getRolesByEmail(req.params.email).then(function(result) {
        
        if (typeof result[0] != 'undefined') {

            var resultArray = [];
            result.forEach(function(data) {
                resultArray.push(data.role);
            })

            res.status(200).send(resultArray);

        } else {
            
            res.status(200).send([]);
        
        }

    }).catch(function(error) {
        res.status(400).send(error);
    })
}

module.exports = {
    gRolesByEmail
}