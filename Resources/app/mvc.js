var _ = require('lib/underscore-min')._;

mvc.prop = {
	mainColor: '#f4f4f4',
	fontColor: '#333',
	font: {
		fontSize: 16
	}
}

require("app/view/startup");
require("app/view/login");

require("app/view/_main_top");
require("app/view/_main_bottom");
require("app/view/_month_list");
require("app/view/_settings");
require("app/view/_blog_list");
require("app/view/_photo_list");

require("app/view/main_list");
require("app/view/publish_blog");

require("app/controller/login");
require("app/controller/startup");
require("app/controller/main_list");
require("app/controller/photo_list");

mvc.init = mvc.controller.startup.index;
