const mysql=require('mysql');
const connectionParams=require('./../../configuration/prodDatabase.config.js');

var sqlQueryExecution=function(ourQuery,config,values){

	// console.log('config:',config);

	return new Promise (function (resolve, reject){

		var newConnection= mysql.createConnection(config.parameters);

		newConnection.connect(function(err){

			if(err) throw (err);
			// console.log("connected!");

			newConnection.query(ourQuery,values,function(error,result){

				if(err)
					reject(err);
				else{
					// console.log('Result%:',result);
					resolve(result);
				}
			})

			newConnection.end();
		})
	})
}




module.exports={
	sqlQueryExecution
}


