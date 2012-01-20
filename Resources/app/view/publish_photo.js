var Ani = require("/lib/ani");

mvc.view.publishPhoto = (function(){
	
	var imgSrc, imgDst;
	
	var imgView;
	
	function show(imgs, isCamera){
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
		
		imgView = Ti.UI.createImageView({
			left: 100,
			top: 10,
			width: imgs.thumb.width,
			height: imgs.thumb.height,
			image: imgs.thumb.src
		});
		
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
			
			util.net.send('api/uploadPhoto', {photo:imgs.img.src, content:textarea.value, id:Titanium.App.Properties.getString("userid")}, function(res){
				var data = JSON.parse(res);
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
