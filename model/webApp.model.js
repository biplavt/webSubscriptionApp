var mySqlConfig=require('./../configuration/prodDatabase.config.js');
var makeConnection=require('./utility/utilityModel.js');


function getRolesByEmail(email){

	var ourQuery=`SELECT B.userId,C.role, C.roleID 
		FROM HawsWA.Users_TB A 
		LEFT JOIN
		    HawsWA.Users_Role_TB B
		    ON A.userId = B.userId
		LEFT JOIN
			HawsWA.Roles_TB C
		    ON B.roleId=C.roleID
		WHERE A.email='${email}' `;
	
	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);

}

module.exports={
	getRolesByEmail
}