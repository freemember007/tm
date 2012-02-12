Ti.UI.backgroundColor = '#999';

var mvc = {
	controller: {},
	model: {},
	view: {
		partial: {}
	},
	prop: {}
};

var util = {};
var app = {
	net: {},
	sys: {}
};

var _ = require('vendor/underscore-min')._;
require("/lib/util");
require("/app/mvc");

mvc.init();
