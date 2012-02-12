/**
 * @author Lizhe
 */

var field = function(top, title, passwordMask){
	
	var field_view = Ti.UI.createView({
		top: top,
		left: 10,
		width: 300,
		height: 40,
		borderRadius: 2,
		borderColor: '#DDD',
		backgroundColor: '#FFF'
	});
	
	var text_field = Titanium.UI.createTextField({
		color: '#666',
		height: 40,
		top: 0,
		left: 55,
		width: 235,
		passwordMask: passwordMask,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_NONE,
		keyboardType : Titanium.UI.KEYBOARD_EMAIL
	});
	var label = Ti.UI.createLabel({
		text: title,
		top: -1,
		left: 10,
		height: 40,
		width: 60,
		color: mvc.prop.fontColor,
		font: mvc.prop.font
	});
	
	field_view.add(label);
	field_view.add(text_field);
	
	function value(){
		return text_field.value;
	}
	
	return {
		view: field_view,
		value: value,
		field: text_field
	}
}

exports.labelField = field;
