mvc.view.startup = (function(){
	
	var win = Ti.UI.createWindow({
		backgroundImage: '/assets/startup_bg.png'
	});
	
	var inited = false;
	
	var actInd = Titanium.UI.createActivityIndicator({
	    bottom: 70,
	    height: 50,
	    width: 50,
	    left: 135,
	    style: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	});
	
	var init = function(){
		win.add(actInd);
		actInd.show();
		inited = true;
		
		win.open();
	}
	
	var close = function(){
		if(inited){
			win.close();
			inited = false;
		}
	};
	
	return {
		init : init,
		close: close
	};
	
})();
