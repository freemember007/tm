mvc.controller.startup = (function(){
	
	function index(){
		mvc.view.startup.init();
		checkNetwork();
		mvc.view.login.init();
	}
	
	function checkNetwork(){
		var networkType = Ti.Network.getNetworkType();
		switch(networkType){
			case Ti.Network.NETWORK_NONE:
				alert("当前未联网！");
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
