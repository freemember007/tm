mvc.view.partial.mainBottom = (function(){
	var bottomView = Ti.UI.createView({
		bottom: 0,
		left: 45,
		height: 59,
		width: 320,
		backgroundImage: "/assets/bottom_bg.png",
		zIndex: 1000
	});
	
	var camera = Ti.UI.createView({
		left: 120,
		bottom: 0,
		width: 80,
		height: 59
	})
	
	var text = Ti.UI.createView({
		left: 40,
		bottom: 0,
		width: 40,
		height: 49
	});
	
	var photo = Ti.UI.createView({
		right: 40,
		bottom: 0,
		width: 40,
		height: 49
	});
	
	photo.addEventListener('click', function(){
		util.net.uploadPhoto();
	});
	
	camera.addEventListener('click', function(){
		util.net.uploadCameraPhoto();
	});
	
	text.addEventListener('click', function(){
		mvc.view.publishBlog.show();
	});

	bottomView.add(camera);
	bottomView.add(text);
	bottomView.add(photo);
	return bottomView;
})();
