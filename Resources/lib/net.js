app.net = (function(){
	
	var sitePath = 'http://116.255.187.252/';
		
	function send(url, data, callback){
		var networkType = Ti.Network.getNetworkType();
		if(networkType == Ti.Network.NETWORK_NONE){
			alert(L("nonetwork"));
			return;
		}
		var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function(e){
        	if (this.status != 200) {
		        alert(e);
		        alert(this.status);
		    }else{
        		callback(this.responseText);
		    }
        };
        xhr.onerror = function(e){
	        alert(e.error);
        };
        xhr.open('POST',sitePath + url);
        xhr.send(data);
	}
	
	return {
		send: send
	}
	
})();
