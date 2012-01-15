mvc.view.startup = (function(){
	
	var win = Ti.UI.createWindow({
		backgroundImage: '/assets/startup_bg.png'
	});
	
	var actInd = Titanium.UI.createActivityIndicator({
	    bottom: 40,
	    height: 50,
	    width: 50,
	    left: 135,
	    style: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
	});
	
	var init = function(){
		win.add(actInd);
		actInd.show();
		
		win.open();
	}
	
	var close = function(){
		win.close();
	};
	
	return {
		init : init,
		close: close
	};
	
})();
