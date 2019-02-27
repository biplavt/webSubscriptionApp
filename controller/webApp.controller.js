var webAppModel=require('./../model/webApp.model');

function gRolesByEmail(req,res){
	webAppModel.getRolesByEmail(req.params.email).then(function(result){

		if(typeof result != 'undefined'){
			res.status(200).send(result);
		}

	}).catch(function(error){
		res.status(400).send(error);
	})
}

module.exports={
	gRolesByEmail
}