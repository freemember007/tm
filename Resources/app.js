Ti.UI.backgroundColor = '#999';
alert(Titanium.App.Properties.getString("userid"));
var mvc = {
	controller: {},
	model: {},
	view: {
		partial: {}
	},
	prop: {}
};

var util = {};

require("/lib/util")
require("/app/mvc");

mvc.init();
