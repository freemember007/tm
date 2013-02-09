var Ani = require("/lib/ani");

mvc.view.publishPhoto = (function(){
	
	var imgSrc, imgDst;
	
	var imgView;
	
	function show(imgs, isCamera){
		var win = Titanium.UI.createWindow({
			backgroundColor:'#f4f4f4',
			title:'纪录这一刻',
			barColor:'gray'
		});
		
		imgView = Ti.UI.createImageView({
			left: 100,
			top: 10,
			width: imgs.thumb.width,
			height: imgs.thumb.height,
			image: imgs.thumb.src
		});
		
		var flexSpace = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var send = Ti.UI.createButton({
			title: '发布',
			width: 50,
			right: 5,
			font: {
				fontSize: 14
			},
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		var textField = Ti.UI.createTextField({
			width: 250,
			height: 28,
			left: 0,
			top: 2,
			borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
		});
		var input = Ti.UI.createTextField({
			left: 10,
			width: 300,
			height: 50,
			bottom: 0,
			font:{
				fontSize: 14
			},
			keyboardToolbar:[flexSpace, textField, flexSpace, send, flexSpace],
			keyboardToolbarColor: '#999',	
			keyboardToolbarHeight: 'auto',
			//visible: false
		});
		
		var scrollView = Ti.UI.createView({
			top: 0,
			left: 0,
			width: 320,
			height: 'auto',
        	//verticalBounce:true
		})

		scrollView.add(imgView);
		scrollView.add(input);
		
		var back = Titanium.UI.createButton({
			title:'返回',
			style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		back.addEventListener('click',function(){
			input.blur();
			win.close();
		});
		
		send.addEventListener('click',function(){
			input.blur();
			win.close();
			
			if(isCamera){
				var cameraView = Ti.UI.createImageView({
					image: imgs.img.src
				})
	 			var d = new Date();
	 			var nu = d.getYear() + "_" + d.getYear() + "_" + d.getMonth() + "_" + d.getDay() + "_" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds();
		    	var fileName = "/timenote_randomimage_" + nu + ".png";
		        var filename1 = Titanium.Filesystem.applicationDataDirectory + fileName;
		        var f = Titanium.Filesystem.getFile(filename1);
		        f.write(cameraView.toBlob());
		        Ti.Media.saveToPhotoGallery(f);
			}
			
			util.net.send('api/uploadPhoto', {photo:imgs.img.src, content:textField.value, id:Titanium.App.Properties.getString("userid")}, function(res){
				var data = JSON.parse(res);
				mvc.view.partial.blogList.addBlog(data.item);
				mvc.view.mainList.reload();
			})
		});
		
		win.setLeftNavButton(back);
		
		win.add(scrollView);
		win.open({modal:true});
		setTimeout(function(){
			input.focus();
			setTimeout(function(){
				textField.focus();
			}, 300);
		}, 400);
		
	}
	
	return {
		show: show
	}
	
})();
