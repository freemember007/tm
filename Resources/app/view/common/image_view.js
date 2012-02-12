mvc.view.imageView = (function(){
	
	function show(img){
		var win = Ti.UI.createWindow({
			backgroundColor: '#333',
			fullscreen: true
		});
	
		var view = Ti.UI.createImageView({
			left: 0,
			top: 0,
			width: 320,
			height: 460,
			image: img,
			opacity: 0.0
		});
		view.addEventListener('click', function(){
			win.close();
		});
		win.add(view);
		
		win.open({
			fullscreen: true
		});
		view.animate({
			opacity: 1.0,
			duration: 300
		});
	}
	
	return {
		show: show
	}
	
})();
