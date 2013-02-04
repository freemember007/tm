mvc.prop = {
	mainColor: '#f4f4f4',
	fontColor: '#333',
	font: {
		fontSize: 16
	}
}

require("/app/view/startup/startup");
require("/app/view/login/login");

require("/app/view/common/_main_top");
require("/app/view/common/_main_bottom");
require("/app/view/common/_month_list");
require("/app/view/common/_settings");
require("/app/view/common/image_view");
require("/app/view/main_list/_blog_list");
require("/app/view/photo_list/_photo_list");

require("/app/view/publish/publish_photo");
require("/app/view/publish/publish_blog");
require("/app/view/main_list/main_list");

require("/app/controller/login");
require("/app/controller/startup");
require("/app/controller/main_list");
require("/app/controller/photo_list");

mvc.init = mvc.controller.startup.index;
