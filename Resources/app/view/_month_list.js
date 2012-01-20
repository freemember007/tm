mvc.view.partial.monthList = (function(){
	
	var monthList = Ti.UI.createView({
		top: 0,
		left: 0,
		width: 45,
		height: 460,
		backgroundColor: '#666'
	});
	
	var shadow = Ti.UI.createView({
		top: 0,
		right: 0,
		width: 5,
		height: 460,
		backgroundImage: 'left_shadow.png'
	});
	monthList.add(shadow);
	
	for(var i = 1; i<13; i++){
		var monthLabel = Ti.UI.createLabel({
			text: i + "月",
			top: 40 + 32 * (i - 1),
			right: 9,
			width: 40,
			height: 20,
			textAlign: "right",
			color: "#fff",
			font:{
				fontSize: 14
			}
		});
		monthList.add(monthLabel);
	}
	
	return monthList;
	
})();
