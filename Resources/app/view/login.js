var labelField = require("/lib/named_text_field").labelField;

mvc.view.login = (function(){
	
	var win = Ti.UI.createWindow({
		backgroundColor: mvc.prop.mainColor
	});
	
	var usernameView = labelField(50, '邮箱', false);
	var passwordView = labelField(100, '密码', true);
	
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
			util.net.login(usernameView.value(), passwordView.value());
			
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
	
	function init(){
		win.add(top_view());
		win.add(content_view());
		
		win.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
		});
	}
	
	function close(){
		win.close({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
	};
	
	return {
		init : init,
		close: close
	};
	
})();
