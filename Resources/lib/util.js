util.net = (function(){
	
	function send(url, data, onload){
		var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = onload;
        xhr.onerror = function(){
	        Ti.API.info(e.error);
        };
        xhr.open('POST','http://localhost:3000/' + url);
        xhr.send(data);
	}
	
	function login(email, password, callback){
		send('api/login', {email: "lnz013@gmail.com", password: "secret"}, function(){
			var data = JSON.parse(this.responseText);
			if(data.type == "success"){
				data.id = Titanium.App.Properties.setString("userid", data.id + '');
				mvc.controller.mainList.index(data.images);
			}else{
				alert("错误的邮箱名或者密码");
			}
		});
	}
	
	function publishText(content){
		send('api/publish_blog', {content: content, id:Titanium.App.Properties.getString("userid")}, function(){
			var data = JSON.parse(this.responseText);
			mvc.view.partial.blogList.addBlog(null, content);
			mvc.view.mainList.reload();
		})
	}
	
	function uploadPhoto(){
		Ti.Media.openPhotoGallery({
			success: function(e){
				send('api/uploadPhoto', {photo:e.media, id:Titanium.App.Properties.getString("userid")}, function(){
					var data = JSON.parse(this.responseText);
					mvc.view.partial.blogList.addBlog(data.img, null);
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
					mvc.view.partial.blogList.addBlog(data.img, null);
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
