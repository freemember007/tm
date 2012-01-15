util.net = (function(){
	
	function send(url, data, onload){
		var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = onload;
        xhr.onerror = function(){
	        Ti.API.info(e.error);
        };
        xhr.open('POST','http://116.255.187.252/' + url);
        xhr.send(data);
	}
	
	function login(email, password, callback){
		send('api/login', {email: "lnz013@gmail.com", password: "secret"}, function(){
			callback(JSON.parse(this.responseText));
		});
	}
	
	function uploadPhoto(){
		Ti.Media.openPhotoGallery({
			success: function(e){
				send('api/uploadPhoto', {photo:e.media, id:Titanium.App.Properties.getString("userid")}, function(){
					var data = JSON.parse(this.responseText);
					mvc.view.partial.blogList.setImages(data.images);
					mvc.view.mainList.reload();
				})
			}
		});
	}
	
	function uploadCameraPhoto(){
		Ti.Media.showCamera({
			success: function(e){
		        Ti.Media.hideCamera();
				send('api/uploadPhoto', {photo:e.media, id:Titanium.App.Properties.getString("userid")}, function(){
					var data = JSON.parse(this.responseText);
					mvc.view.partial.blogList.setImages(data.images);
					mvc.view.mainList.reload();
				})
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
		uploadCameraPhoto: uploadCameraPhoto
	}
	
})();
