function TimeMonthModel(date){
	
	this.date = date;
	
	this.Days = function(){
		
	}
	
	this.addDay = function(){
		
	}
	
	this.deleteDay = function(){
		
	}
	
	this.getDay = function(){
		
	}
	
	this.updateDay = function(){
		
	}
	
}

mvc.model.TimeMonth = (function(){
	
	function create(date){
		return new TimeMonthModel(date)
	}
	
	function get(date){
		//
	}
	
	return {
		create: create,
		get: get
	};
	
})();
