angular.module('esame')
.service("Session", function(){

	this.logged = null;	
	this.data = {
		auth: {
			accessToken: '',
			signedRequest: '',
			expiresIn: '',
			userid: ''
		}
	};
	
	this.init = function(resp) {
		this.logged = true;
		this.data.auth.accessToken = resp.authResponse.accessToken;
		this.data.auth.signedRequest = resp.authResponse.signedRequest;
		this.data.auth.expiresIn = resp.authResponse.signedRequest;		
		this.data.auth.userid = resp.authResponse.userID;
		$cookies.put('userAuth', this.data);
		console.log("session data from session")	
		console.log(this.data);
		console.log("session data from cookies")
		console.log(JSON.stringify($cookies.get('userAuth')));
	};

	this.getSession = function() {				
		if($cookies.get('userAuth')) {			
			return($cookies.get('userAuth'));
		} else {
			return undefined;
		}
	}

	this.destroy = function() {
		this.data = {
			auth: {
				accessToken: '',
				signedRequest: '',
				expiresIn: '',
				userid: ''
			}			
		};
	};
});