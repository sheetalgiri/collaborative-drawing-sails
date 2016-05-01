/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	process:function(req,res){
			var params=req.params.all();

			if (params.username)
			{	console.log(params);
				req.session.authenticated=1;
				req.session.user={username:params.username};
				return res.send({"success":1});
			}
			else
				return res.send({"success":0});
	}
};

