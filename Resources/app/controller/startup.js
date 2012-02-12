mvc.controller.startup = (function(){
	
	function index(){
		mvc.view.startup.init();
		checkNetwork();
		login();
	}
	
	function checkNetwork(){
		var networkType = Ti.Network.getNetworkType();
		switch(networkType){
			case Ti.Network.NETWORK_NONE:
				alert(L("nonetwork"));
				break;
			case Ti.Network.NETWORK_WIFI:
				break;
			case Ti.Network.NETWORK_MOBILE:
				break;
			case Ti.Network.NETWORK_LAN:
				break;
			case Ti.Network.NETWORK_UNKNOWN:
				break;
		}
	}
	
	function login(){
		var email = Titanium.App.Properties.getString("email");
		var password = Titanium.App.Properties.getString("password");
		util.net.send('api/login', {email: email, password: password}, function(res){
			var data = JSON.parse(res);
			if(data.type == "success"){
				mvc.controller.mainList.index(data.items);
				return true;
			}
			mvc.view.login.init();
		});
	}
	
	return {
		index: index
	};
	
})();
