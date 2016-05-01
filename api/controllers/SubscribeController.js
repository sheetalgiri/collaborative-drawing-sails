/**
 * SubscribeController
 *
 * @description :: Server-side logic for managing subscribes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	process:function(req,res){
		if (!req.isSocket)
			return res.send({"success":0});
		else
		{
			sails.sockets.join(req.socket,"whiteboard");
			return res.send({"success":1});
		} 
	}
};

