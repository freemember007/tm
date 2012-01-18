var Ani = require("/lib/ani");

mvc.view.publishPhoto = (function(){
	
	var imgSrc, imgDst;
	
	var imgView = Ti.UI.createImageView({
		left: 100,
		top: 10,
		width: 'auto',
		height: 'auto'
	});

	function computeImageSize(img){
		imgSrc = img;
		imgView.setImage(imgSrc);
		
		var w = imgView.size.width;
		var h = imgView.size.height;
		
		imgView.width = 120;
		imgView.height = h*(120/w);
		
		var dstImgView = Ti.UI.createImageView({
			left: 0,
			top: 0,
			image: imgSrc
		});
		dstImgView.width = 800;
		dstImgView.height = h*(800/w);
		
		imgDst = dstImgView.toImage();
	}
	
	function show(img){
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
		computeImageSize(img);
		
		var scrollView = Ti.UI.createScrollView({
			top: imgView.height + 20,
			left: 0,
			width: 320,
			height: '100%'
		})

		scrollView.add(textarea);
		
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
			util.net.send('api/uploadPhoto', {photo:imgDst, content:textarea.value, id:Titanium.App.Properties.getString("userid")}, function(){
				var data = JSON.parse(this.responseText);
				mvc.view.partial.blogList.addBlog(data.item);
				mvc.view.mainList.reload();
			})
		});
		
		win.setLeftNavButton(back);
		win.setRightNavButton(publish);
		
		win.add(imgView);
		win.add(scrollView);
		win.open({modal:true});
		textarea.focus();
	}
	
	return {
		show: show
	}
	
})();
