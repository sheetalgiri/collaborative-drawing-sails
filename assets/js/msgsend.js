var username;
if(document.getElementById('checkuser'))
	username=document.getElementById('checkuser').value;

function login(){
	var to_send={username:document.getElementById('uname').value};
	var myxhr = new XMLHttpRequest();
	myxhr.onload=function(){
		if(JSON.parse(myxhr.responseText).success)
			window.location='/';
		else
			alert("login failed!");
	}
	myxhr.open ("post", "/auth", true);
	myxhr.send (JSON.stringify(to_send));
}

var hasSocket=0;
function sendmsg(draw){
  if(hasSocket){
  	  var myxhr = new XMLHttpRequest();
	  var data={};
	  data.username=username;
	  data.draw=draw;
	  //myxhr.onload = function(){ alert (myxhr.responseText); }
	  myxhr.open ("post", "/data", true);
	  myxhr.send (JSON.stringify(data));
   }
}

if(username){
	var data={username:username};
	io.socket.get('/subscribe', data, function (data, jwres){
	  if(data && data.success){
	  	console.log("successful!");
	  	hasSocket=1;
		io.socket.on("username", function (msg) {
	  		console.log(msg);
	  		draw_it(msg.draw);
		});
	  }
	});
}
	



