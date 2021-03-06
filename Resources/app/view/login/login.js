var labelField = require("/lib/named_text_field").labelField;

mvc.view.login = (function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor: mvc.prop.mainColor
	});
	
	var inited = false;
	
	var usernameView = labelField(50, '邮箱', false);
	var passwordView = labelField(100, '密码', true);
	
	var bg_view = Ti.UI.createView({
		top: 0,
		left: 0,
		width: 320,
		height: 460,
		opacity: 0.5,
		backgroundColor: '#999',
		zindex: 1000,
	});
	var actInd = Titanium.UI.createActivityIndicator({
	    bottom: 70,
	    height: 50,
	    width: 50,
	    left: 135,
	    style: Titanium.UI.iPhone.ActivityIndicatorStyle.DARK,
	    zindex: 1001,
	});
	
	function show_loading(){
		win.add(bg_view);
		win.add(actInd);
		actInd.show();
	}
	
	function hide_loading(){
		win.remove(bg_view);
		win.remove(actInd);
	}
	
	function top_view(){
		var top_view = Ti.UI.createView({
			top: 0,
			height: 45,
			width: 320,
			backgroundImage: '/assets/login_top_bg.png'
		});
		
		var login = Ti.UI.createLabel({
			top: 0,
			height: 40,
			width: 40,
			right: 0
		});
		
		login.addEventListener('click', function(){
			show_loading();
			usernameView.field.blur();
			passwordView.field.blur();
			util.net.login(usernameView.value(), passwordView.value(), hide_loading);
		});
		
		top_view.add(login);
		
		return top_view;
	}

	
	function content_view(){
		var contentView = Ti.UI.createView({
			top: 44,
			left: 0,
			width: 320,
			height: 178
		})
		
		var mainTitle = Ti.UI.createLabel({
			text: '请登录您的时光帐户',
			top: 10,
			left: 10,
			width: 240,
			height: 35,
			color: mvc.prop.fontColor,
			font: {fontSize: 18, fontStyle: 'bold'}
		});
		contentView.add(mainTitle);
		
		contentView.add(usernameView.view);
		contentView.add(passwordView.view);
		
		var registerLabel = Ti.UI.createLabel({
			text: '还没有注册？',
			top: 150,
			left: 10,
			height: 25,
			color: mvc.prop.fontColor,
			font: mvc.prop.font
		});
		var registerButton = Ti.UI.createLabel({
			text: '创建一个时光帐户',
			top: 150,
			left: 110,
			height: 25,
			width: 140,
			borderRadius: 6,
			borderColor: '#aaa',
			textAlign: 'center',
			color: mvc.prop.fontColor,
			font: mvc.prop.font
		});
		contentView.add(registerLabel);
		contentView.add(registerButton);
		
		return contentView;
	}
	
	win.add(top_view());
	win.add(content_view());
	
	function init(){
		win.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
		});
	}
	
	function logout(){
		win.open({
			transition: Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
		});
	}
	
	function close(){
		win.close();
	}
	
	function clear(){
		usernameView.field.value = '';
		passwordView.field.value = '';
	};
	
	return {
		init : init,
		logout: logout,
		close: close,
		clear: clear
	};
	
})();
