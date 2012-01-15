mvc.view.mainList = (function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#666'
	});
	
	var listView = Ti.UI.createView({
		width: 320,
		height: 460,
		left: 0,
		top: 0
	});
	
	var tableView = Titanium.UI.createTableView({
		bottom: 44,
		width: 320,
		backgroundColor: '#f0f0f0',
		separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	var headerRow = Ti.UI.createTableViewRow();
	headerRow.add(mvc.view.partial.mainTop);
	
	listView.add(tableView);
	listView.add(mvc.view.partial.mainBottom);
	listView.add(mvc.view.publishBlog.content());
	listView.add(mvc.view.publishPhoto.content());
	
	var windowSlideAnimation;
	var left = 50;
	var right = 150;
	var slide = false;
	
	windowSlideAnimation = Ti.UI.createAnimation({
		duration: 150,
		curve: Ti.UI.iOS.ANIMATION_CURVE_EASE_OUT
	});
	
	function init(){
		reload();
		win.add(mvc.view.partial.settings);
		win.add(mvc.view.partial.monthList);
		win.add(listView);
		mvc.currentListView = listView;
		win.open({
			transition: Titanium.UI.iPhone.AnimationStyle.CURL_UP
		});
	}
	
	function reload(){
		var data = mvc.view.partial.blogList.data();
		data.unshift(headerRow);
		tableView.setData(data);
	}
	
	function switchToPhotoListView(){
		var data = mvc.view.partial.photoList.data();
		data.unshift(headerRow);
		tableView.setData(data);
	}
	
	function switchToBlogListView(){
		var data = mvc.view.partial.blogList.data();
		data.unshift(headerRow);
		tableView.setData(data);
	}
	
	function toggleMonthList(){
		if(slide){
			slide = false;
			windowSlideAnimation.left = 0;
			listView.animate(windowSlideAnimation);
		}else{
			slide = true;
			windowSlideAnimation.left = left;
			listView.animate(windowSlideAnimation);
		}
	}
	
	function toggleSettings(){
		if(!slide){
			slide = true;
			windowSlideAnimation.left = 0 - right;
			listView.animate(windowSlideAnimation);
		}else{
			slide = false;
			windowSlideAnimation.left = 0;
			listView.animate(windowSlideAnimation);
		}
	}
	
	return {
		init: init,
		toggleMonthList: toggleMonthList,
		toggleSettings: toggleSettings,
		switchToPhotoListView: switchToPhotoListView,
		switchToBlogListView: switchToBlogListView,
		reload: reload
	};
	
})();
