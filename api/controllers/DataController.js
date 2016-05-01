/**
 * DataController
 *
 * @description :: Server-side logic for managing data
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	processData:function(req, res)
	 {
    		var finalData={};
    		var error=0;
    		var params=req.params.all();
    		_.map(_.omit(Data.attributes,'id','createdAt','updatedAt'),function(val,key){
    			if(val.required){
    				if(!params[key])
    					error=1;
    				}
    			
			if(!error)
				finalData[key]=params[key];
				
			console.log(finalData.draw);
           	});
    		sails.sockets.broadcast("whiteboard","username",finalData);

    		return res.send([finalData,error]);
  	}
};

