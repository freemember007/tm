mvc.view.partial.monthList = (function(){
	
	var monthList = Ti.UI.createView({
		top: 0,
		left: 0,
		width: 50,
		height: 460,
		backgroundColor: '#666'
	});
	
	for(var i = 1; i<13; i++){
		var monthLabel = Ti.UI.createLabel({
			text: i + "月",
			top: 10 + 36 * (i - 1),
			left: 5,
			width: 40,
			height: 30,
			textAlign: "center",
			color: "#fff"
		});
		monthList.add(monthLabel);
	}
	
	return monthList;
	
})();
