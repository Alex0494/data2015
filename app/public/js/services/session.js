angular.module('esame')
.service("Session", function(){

	this.logged = null;
	this.data = {
		auth: {
			accessToken: '',
			signedRequest: '',
			expiresIn: '',
		}
	};
	
	this.init = function(resp) {
		this.logged = true;
		this.data.auth.accessToken = resp.authResponse.accessToken;
		this.data.auth.signedRequest = resp.authResponse.signedRequest;
		this.data.auth.expiresIn = resp.authResponse.signedRequest;
		this.data.auth.userid = resp.authResponse.userid;
	};

	this.destroy = function() {
		this.data = {
			auth: {
				accessToken: '',
				signedRequest: '',
				expiresIn: '',
			}			
		};
	};
});