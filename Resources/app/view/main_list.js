mvc.view.mainList = (function(){
	
	var left = 40;
	var right = 150;
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#666',
		width: 510,
		left: -left
	});
	
	var tableView = Titanium.UI.createTableView({
		bottom: 44,
		width: 320,
		left: left,
		backgroundColor: '#f0f0f0',
		separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	var headerRow = Ti.UI.createTableViewRow();
	headerRow.add(mvc.view.partial.mainTop);
	
	function init(){
		reload();
		win.add(mvc.view.partial.settings);
		win.add(mvc.view.partial.monthList);
		win.add(mvc.view.partial.mainBottom);
		win.add(tableView);
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
	
	var slide = false;
	
	function toggleMonthList(){
		if(slide){
			win.animate({left:-left});
			slide = false;
		}else{
			win.animate({left:0});
			slide = true;
		}
	}
	
	function toggleSettings(){
		if(!slide){
			win.animate({left:-left-right});
			slide = true;
		}else{
			win.animate({left:-left});
			slide = false;
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
