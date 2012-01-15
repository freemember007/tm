mvc.view.partial.mainBottom = (function(){
	var bottomView = Ti.UI.createView({
		bottom: 0,
		height: 60,
		width: 320,
		backgroundImage: "/assets/bottom_bg.png",
		zIndex: 1000
	});
	
	var camera = Ti.UI.createLabel({
		left: 144,
		bottom: 0,
		width: 32,
		height: 42,
		backgroundImage: "/assets/camera.png"
	})
	
	var text = Ti.UI.createLabel({
		left: 40,
		bottom: 0,
		width: 25,
		height: 42,
		backgroundImage: "/assets/text.png"
	});
	
	var photo = Ti.UI.createLabel({
		right: 40,
		bottom: 0,
		width: 29,
		height: 42,
		backgroundImage: "/assets/choose_photo.png"
	});
	
	photo.addEventListener('click', function(){
		util.net.uploadPhoto();
	});
	
	camera.addEventListener('click', function(){
		util.net.uploadCameraPhoto();
	});
	
	text.addEventListener('click', function(){
		mvc.view.publish_blog.init();
	});

	bottomView.add(camera);
	bottomView.add(text);
	bottomView.add(photo);
	return bottomView;
})();
