angular.module('esame')
.service("Session", function(){

	this.logged = null;
	
	this.create = function(user) {
		this.logged = true;
		this.username = user.name;
		this.userid = user.id;		
	};

	this.destroy = function() {
		this.username = null;
		this.userid = null;
	};

	this.getUser = function() {
		if(this.logged)
			return{username: this.username, userid: this.userid};
	};
});