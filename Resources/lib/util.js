util.net = (function(){
	
	var sitePath = 'http://localhost:3000/';
	
	function send(url, data, onload){
		var xhr = Titanium.Network.createHTTPClient();
        xhr.onload = onload;
        xhr.onerror = function(){
	        Ti.API.info(e.error);
        };
        xhr.open('POST',sitePath + url);
        xhr.send(data);
	}
	
	function login(email, password, callback){
		send('api/login', {email: 'lnz013@gmail.com', password: 'secret'}, function(){
			var data = JSON.parse(this.responseText);
			if(data.type == "success"){
				Titanium.App.Properties.setString("userid", data.id + '');
				mvc.controller.mainList.index(data.items);
			}else{
				alert("错误的邮箱名或者密码");
			}
		});
	}
	
	function publishText(content){
		send('api/publish_blog', {content: content, id:Titanium.App.Properties.getString("userid")}, function(){
			var data = JSON.parse(this.responseText);
			mvc.view.partial.blogList.addBlog(data.item);
			mvc.view.mainList.reload();
		})
	}
	
	function uploadPhoto(){
		Ti.Media.openPhotoGallery({
			success: function(e){
				mvc.view.publishPhoto.show(e.media);
			}
		});
	}
	
	function uploadCameraPhoto(){
		Ti.Media.showCamera({
			success: function(e){
		        Ti.Media.hideCamera();
				mvc.view.publishPhoto.show(e.media);
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
