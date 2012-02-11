function TimeDayModel(date){
	
	this.date = date;
	
	this.items = function(){
		
	}
	
	this.addItem = function(){
		
	}
	
	this.deleteItem = function(){
		
	}
	
	this.getItem = function(){
		
	}
	
	this.updateItem = function(){
		
	}
	
}

mvc.model.TimeDay = (function(){
	
	var date;
	
	function create(date){
		return new TimeDayModel(date)
	}
	
	function get(date){
		//
	}
	
	return {
		create: create,
		get: get
	};
	
})();
