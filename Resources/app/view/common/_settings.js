mvc.view.partial.settings = (function(){
	
	var thumb_button = Ti.UI.createLabel({
		top: 5,
		left: 5,
		width: 140,
		height: 30,
		text: "图片视图"
	});
	
	var list_button = Ti.UI.createLabel({
		top: 40,
		left: 5,
		width: 140,
		height: 30,
		text: "列表视图"
	});
	
	var logout_button = Ti.UI.createLabel({
		top: 75,
		left: 5,
		width: 140,
		height: 30,
		text: "退出"
	});
	
	thumb_button.addEventListener('click', function(){
		mvc.view.mainList.toggleSettings();
		setTimeout(function(){
			mvc.view.mainList.switchToPhotoListView();
		}, 150);
	});
	
	list_button.addEventListener('click', function(){
		mvc.view.mainList.toggleSettings();
		setTimeout(function(){
			mvc.view.mainList.switchToBlogListView();
		}, 150);
	});
	
	logout_button.addEventListener('click', function(){
		mvc.view.mainList.toggleSettings();
		Titanium.App.Properties.setString("userid", '');
		Titanium.App.Properties.setString("email", '');
		Titanium.App.Properties.setString("password", '');
		mvc.view.login.clear();
		setTimeout(function(){
			mvc.view.mainList.close();
		}, 500);
	});
	
	var view_wrapper = Ti.UI.createView({
		top: 0,
		right: 0,
		height: 460,
		width: 150,
		backgroundColor: '#666'
	});
	
	view_wrapper.add(thumb_button);
	view_wrapper.add(list_button);
	view_wrapper.add(logout_button);
	
	return view_wrapper;
	
})();
