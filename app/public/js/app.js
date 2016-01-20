angular.module('esame', ['ngRoute', 'ngFacebook', 'uiGmapgoogle-maps', 'ngCookies'])
.config(function($facebookProvider) {
	$facebookProvider.setAppId('718213938280904'); 
})

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAdaP3JeDl9ySD6xfP04SHad_cjQfsf_VA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})
.run(function($rootScope){
	(function(){     
     if (document.getElementById('facebook-jssdk')) {return;}
     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];
     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';
     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';
     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
}());
});

