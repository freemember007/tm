var Ani = require("/lib/ani");

mvc.view.publishPhoto = (function(){
	
	var imgSrc;
	
	var win = Ti.UI.createView({
		left: 0,
		top: 460,
		width: 320,
		height: 460,
		backgroundColor: '#fafafa',
		zIndex: 2000
	});
	
	var imgView = Ti.UI.createImageView({
		left: 100,
		top: 10,
		width: 'auto',
		height: 'auto'
	});
	
	function top(){
		var topView = Ti.UI.createView({
			top: 0,
			height: 44,
			width: 320,
			backgroundImage: '/assets/publish_photo_top_bg.png'
		});
		
		var back = Ti.UI.createLabel({
			top: 0,
			height: 44,
			left: 0,
			width: 60
		})
		
		var publish = Ti.UI.createLabel({
			top: 0,
			height: 44,
			width: 60,
			right: 0
		});
		
		back.addEventListener('click', function(){
			Ani.close_view_slide(win, 'bottom');
		});
		
		publish.addEventListener('click', function(){
			util.net.send('api/uploadPhoto', {photo:imgSrc, id:Titanium.App.Properties.getString("userid")}, function(){
				var data = JSON.parse(this.responseText);
				mvc.view.partial.blogList.addBlog(data.item);
				mvc.view.mainList.reload();
			})
			Ani.close_view_slide(win, 'bottom');
		});
		
		topView.add(back);
		topView.add(publish);
		return topView;
	}
	
	function content(){
		var scrollView = Ti.UI.createScrollView({
			top: 44,
			left: 0,
			width: 320,
			height: '100%'
		})
		scrollView.add(imgView);
		
		win.add(top());
		win.add(scrollView);
		
		return win;
	}
	
	function computeWidthHeight(width, height){
		var fw = 120;
		var r = width / fw;
		var fh = height / r;
	}

	function show(e){
		imgSrc = e.media;
		imgView.setImage(imgSrc);
		
		var w = imgView.size.width;
		var h = imgView.size.height;
		
		Ti.API.info(w + " " + h);
		
		imgView.width = 120;
		imgView.height = h*(120/w);
		
		
		Ani.open_view_slide(win, 'top');
	}
	
	return {
		content: content,
		show: show
	}
	
})();
