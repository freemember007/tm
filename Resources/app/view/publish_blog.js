var Ani = require("/lib/ani");

mvc.view.publishBlog = (function(){
	
	var win = Ti.UI.createView({
		left: 0,
		top: 460,
		width: 320,
		height: 460,
		backgroundColor: '#fafafa',
		zIndex: 2000
	});
	
	var textarea = Ti.UI.createTextArea({
		top: 0,
		left: 0,
		width: 320,
		editable:true
	});
	
	function top(){
		var topView = Ti.UI.createView({
			top: 0,
			height: 45,
			width: 320,
			backgroundImage: '/assets/publish_text_top_bg.png'
		});
		
		var back = Ti.UI.createLabel({
			top: 0,
			height: 45,
			left: 0,
			width: 60
		})
		
		var publish = Ti.UI.createLabel({
			top: 0,
			height: 45,
			width: 60,
			right: 0
		});
		
		back.addEventListener('click', function(){
			textarea.blur();
			Ani.close_view_slide(win, 'bottom');
		});
		
		publish.addEventListener('click', function(){
			
		});
		
		topView.add(back);
		topView.add(publish);
		return topView;
	}
	
	function content(){
		var scrollView = Ti.UI.createScrollView({
			top: 45,
			left: 0,
			width: 320,
			height: '100%'
		})
		scrollView.add(textarea);
		
		win.add(top());
		win.add(scrollView);
		
		return win;
	}
	
	function init(){
	}
	
	function show(){
		Ani.open_view_slide(win, 'top');
		textarea.focus();
	}
	
	return {
		content: content,
		show: show
	}
	
})();
