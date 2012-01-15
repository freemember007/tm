var slide_it_left = Titanium.UI.createAnimation();

var open_window_slide = function(win, direction, duration){
	if(direction == "right"){
		win.setTop(0);
		win.setLeft(-320);
	}else if(direction == "left"){
		win.setTop(0);
		win.setLeft(320);
	}else if(direction == "top"){
		win.setTop(480);
		win.setLeft(0);
	}else if(direction == "bottom"){
		win.setTop(-480);
		win.setLeft(0);
	}
	slide_it_left.left = 0;
	slide_it_left.top = 0;
	slide_it_left.duration = 300;
	win.open(slide_it_left);
};

var close_window_slide = function(win, direction, duration){
	alert("close");
	if(direction == "right"){
		slide_it_left.setTop(0);
		slide_it_left.setLeft(320);
	}else if(direction == "left"){
		slide_it_left.setTop(0);
		slide_it_left.setLeft(-320);
	}else if(direction == "top"){
		slide_it_left.setTop(-460);
		slide_it_left.setLeft(0);
	}else if(direction == "bottom"){
		slide_it_left.setTop(460);
		slide_it_left.setLeft(0);
	}
	slide_it_left.duration = 300;
	win.close(slide_it_left);
}

var open_view_slide = function(win, direction, duration){
	win.show();
	if(direction == "right"){
		win.setTop(0);
		win.setLeft(-320);
	}else if(direction == "left"){
		win.setTop(0);
		win.setLeft(320);
	}else if(direction == "top"){
		win.setTop(480);
		win.setLeft(0);
	}else if(direction == "bottom"){
		win.setTop(-480);
		win.setLeft(0);
	}
	slide_it_left.left = 0;
	slide_it_left.top = 0;
	slide_it_left.duration = 300;
	win.animate(slide_it_left);
};

var close_view_slide = function(win, direction, duration){
	if(direction == "right"){
		slide_it_left.setTop(0);
		slide_it_left.setLeft(320);
	}else if(direction == "left"){
		slide_it_left.setTop(0);
		slide_it_left.setLeft(-320);
	}else if(direction == "top"){
		slide_it_left.setTop(-460);
		slide_it_left.setLeft(0);
	}else if(direction == "bottom"){
		slide_it_left.setTop(460);
		slide_it_left.setLeft(0);
	}
	slide_it_left.duration = 300;
	win.animate(slide_it_left, function(){
		win.hide();
	});
}

exports.open_window_slide = open_window_slide;
exports.close_window_slide = close_window_slide;
exports.open_view_slide = open_view_slide;
exports.close_view_slide = close_view_slide;