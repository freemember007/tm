mvc.controller.mainList = (function(){
	
	function index(items){
		mvc.view.partial.blogList.setItems(items);
		mvc.view.mainList.init();
	}
	
	return {
		index: index
	};
	
})();
