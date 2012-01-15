mvc.controller.startup = (function(){
	
	function index(){
		mvc.view.startup.init();
		checkNetwork();
		setTimeout(function() {
		    mvc.view.login.init();
		}, 2000);
	}
	
	function checkNetwork(){
		var networkType = Ti.Network.getNetworkType();
		switch(networkType){
			case Ti.Network.NETWORK_NONE:
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
	
	return {
		index: index
	};
	
})();
