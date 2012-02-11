mvc.model.item = (function(){
	
	var img, text, date
	
	function create(_text, _img, _date){
		text = _text;
		img = _img;
		date = _date;
	}
	
	return {
		create: create,
		text: text,
		img: img,
		date: date
	};
	
})();
