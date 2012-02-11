util.net = (function(){
	
	var sitePath = 'http://116.255.187.252/';
	
	var jpgcompressor = require('com.sideshowcoder.jpgcompressor');
	Ti.API.info('module is => ' + jpgcompressor);
	
	jpgcompressor.setCompressSize(102400);
	jpgcompressor.setWorstCompressQuality(0.65);
		
	function send(url, data, onload){
		var networkType = Ti.Network.getNetworkType();
		if(networkType == Ti.Network.NETWORK_NONE){
			alert('无可用网络!');
			return;
		}
		var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = function(e){
        	if (this.status != 200) {
		        alert(e);
		        alert(this.status);
		    }else{
        		onload(this.responseText);
		    }
        };
        xhr.onerror = function(e){
	        alert(e.error);
        };
        xhr.open('POST',sitePath + url);
        xhr.send(data);
	}
	
	function login(email, password, callback){
		send('api/login', {email: email, password: password}, function(res){
			var data = JSON.parse(res);
			if(data.type == "success"){
				Titanium.App.Properties.setString("userid", data.id + '');
				mvc.controller.mainList.index(data.items);
			}else if(data.type == "fail"){
				alert("错误的邮箱名或者密码");
			}else{
				alert('unknown error');
			}
			callback();
		});
	}
	
	function publishText(content){
		send('api/publish_blog', {content: content, id:Titanium.App.Properties.getString("userid")}, function(res){
			var data = JSON.parse(res);
			mvc.view.partial.blogList.addBlog(data.item);
			mvc.view.mainList.reload();
		})
	}
	
	function computeImageSize(img){
		var imageAsTaken = Ti.UI.createImageView({
			image: img,
			width: 'auto',
			height: 'auto'
		});
		Ti.API.info(imageAsTaken.width + " " + imageAsTaken.height);
		
		var w = imageAsTaken.width;
		var h = imageAsTaken.height;
		
		var width = 500;
		var cImage = jpgcompressor.scale(img, width, h*(width/w));
		var img = jpgcompressor.compress(cImage);
		
		var cImage = jpgcompressor.scale(img, 120, h*(120/w));
		var thumb = jpgcompressor.compress(cImage);
		
		return {
			img: {
				src: img,
				width: width,
				height: h*(width/w)
			},
			thumb: {
				src: thumb,
				width: 120,
				height: h*(120/w)
			}
		}

	}
	
	function uploadPhoto(){
		Ti.Media.openPhotoGallery({
			success: function(e){
				mvc.view.publishPhoto.show(computeImageSize(e.media), false);
			},
			error: function(){
				alert("error");
			}
		});
	}
	
	function uploadCameraPhoto(){
		Ti.Media.showCamera({
			success: function(e){
		        Ti.Media.hideCamera();
		        mvc.view.publishPhoto.show(computeImageSize(e.media), true);
			},
			error: function(){
				alert("error");
			},
			autohide:false
		});
	}
	
	return {
		login: login,
		uploadPhoto: uploadPhoto,
		uploadCameraPhoto: uploadCameraPhoto,
		publishText: publishText,
		send: send
	}
	
})();
