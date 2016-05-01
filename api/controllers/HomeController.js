/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'homepage':function(req,res){
		if(!req.session.authenticated) 
			res.redirect('/login');
		else
			res.view({layout:'layout'});
	},
	
	'login':function(req,res){
		if(req.session.authenticated) 
			res.redirect('/');
		else
			res.view({layout:'layout'});
	}
	,
	
	logout:function(req,res){
		req.session.authenticated=0;
		req.session.user={}; 
		res.redirect('/login');
	}
};

