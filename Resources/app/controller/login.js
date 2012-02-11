mvc.controller.login = (function(){
	
	var index = function(){
		mvc.view.login.init();
	}
	
	var logout = function(){
		mvc.view.login.close();
	}
	
	return {
		index: index,
		logout: logout
	};
	
})();
