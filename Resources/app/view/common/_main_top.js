mvc.view.partial.mainTop = (function(){
	
	var topView = Ti.UI.createView({
		top: 0,
		left: 0,
		height: 45,
		width: 320,
		backgroundImage: '/assets/main_top_bg.png'
	});
	
	var avatar = Ti.UI.createLabel({
		top: 0,
		height: 45,
		width: 45,
		right: 0
	});
	
	var sideButton = Ti.UI.createLabel({
		top: 0,
		left: 0,
		height: 40,
		width: 40
	});
	
	var testButton = Ti.UI.createLabel({
		left: 140,
		top: 0,
		height: 45,
		width: 40
	});
	
	sideButton.addEventListener('click', function(){
		mvc.view.mainList.toggleMonthList();
	});
	
	avatar.addEventListener('click', function(){
		mvc.view.mainList.toggleSettings();
	});
	
	topView.add(sideButton);
	topView.add(avatar);
	topView.add(testButton);
	return topView;
	
})();
