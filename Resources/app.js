Ti.UI.backgroundColor = '#666';

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
