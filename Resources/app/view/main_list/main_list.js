mvc.view.mainList = (function(){
	
	var left = 45;
	var right = 150;
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#666',
		width: 515,
		left: -left,
		title:'今年',
		barColor:'gray'
	});
	
	var tableView = Titanium.UI.createTableView({
		bottom: 44,
		width: 320,
		left: left,
		backgroundColor: '#eee',
		separatorStyle: Titanium.UI.iPhone.TableViewSeparatorStyle.NONE
	});
	
	var headerRow = Ti.UI.createTableViewRow();
	//headerRow.add(mvc.view.partial.mainTop);
	
	function init(){
		reload();
		win.open({
			transition: Titanium.UI.iPhone.AnimationStyle.CURL_UP
		,modal:true});
		setTimeout(function(){
			mvc.view.login.close();
			mvc.view.startup.close();
		}, 500);
	}
	
	function close(){
		win.close();
	}
	
	win.add(mvc.view.partial.settings);
	win.add(mvc.view.partial.monthList);
	win.add(mvc.view.partial.mainBottom);
	win.add(tableView);
	
	function reload(){
		var data = mvc.view.partial.blogList.data();
		//data.unshift(headerRow);
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
			tableView.scrollable = true;
		}else{
			tableView.scrollable = false;
			win.animate({left:0});
			slide = true;
		}
	}
	
	function toggleSettings(){
		if(!slide){
			win.animate({left:-left-right});
			slide = true;
			tableView.scrollable = false;
		}else{
			win.animate({left:-left});
			slide = false;
			tableView.scrollable = true;
		}
	}
	
	return {
		init: init,
		close: close,
		toggleMonthList: toggleMonthList,
		toggleSettings: toggleSettings,
		switchToPhotoListView: switchToPhotoListView,
		switchToBlogListView: switchToBlogListView,
		reload: reload
	};
	
})();
