mvc.view.publishBlog = (function(){

	function show(){
		var win = Titanium.UI.createWindow({
			backgroundColor:'#f4f4f4',
			title:'纪录这一刻'
		});
		
		var textarea = Ti.UI.createTextArea({
			top: 0,
			left: 0,
			width: 320,
			editable:true,
			font:{
				fontSize: 14
			}
		});
		
		var back = Titanium.UI.createButton({
			title:'返回',
			style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		back.addEventListener('click',function(){
			textarea.blur();
			win.close();
		});
		
		var publish = Titanium.UI.createButton({
			title:'发布',
			style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		publish.addEventListener('click',function(){
			textarea.blur();
			win.close();
			util.net.publishText(textarea.value);
		});
		
		win.setLeftNavButton(back);
		win.setRightNavButton(publish);
		
		var scrollView = Ti.UI.createScrollView({
			top: 0,
			left: 0,
			width: 320,
			height: '100%'
		})
		scrollView.add(textarea);
		
		win.add(scrollView);
		win.open({modal:true});
		textarea.focus();
	}
	
	return {
		show: show
	}
	
})();
