mvc.controller.mainList = (function(){
	
	function index(images){
		mvc.view.partial.blogList.setImages(images);
		mvc.view.mainList.init();
	}
	
	return {
		index: index
	};
	
})();
