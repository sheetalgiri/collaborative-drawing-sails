/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var ent=require('ent');
module.exports = {

	create:function(req,res){
		req.params.all().username=ent.encode(req.params.all().username);
		User.create(req.params.all(),function(error,data){
			console.log(error);
			console.log(data);
		});
	}
	
};

