mvc.view.partial.blogList = (function(){
	
	function dateLabelView(month, day, top){
		var view = Ti.UI.createView({
			backgroundImage: "/assets/date_bg.png",
			width: 40,
			height: 50,
			left: 5,
			top: 5
		});
		var monthd = Ti.UI.createLabel({
			color:'#f7f7f7',
			font:{fontSize:10, fontWeight:'bold', fontFamily:'Arial'},
			left: 0,
			top: 1,
			height: 20,
			width: 39,
			textAlign: "center",
			text: month + "月"
		});
		var dayd = Ti.UI.createLabel({
			color:'#bcbcbc',
			font:{fontSize:24, fontWeight:'bold', fontFamily:'Arial'},
			left: 0,
			top: 25,
			height: 20,
			width: 39,
			textAlign: "center",
			text: day
		});
		view.add(monthd);
		view.add(dayd);
		return view;
	};
	
	function createRow(img, content){
		var row = Ti.UI.createTableViewRow({
			height: 'auto',
			backgroundColor: '#f0f0f0'
		});
		row.selectedBackgroundColor = '#f0f0f0';
		
		var commentView = Ti.UI.createView({
			left: 56,
			top: 5,
			bottom: 10,
			height: 'auto',
			width: 259,
			backgroundColor: '#f9f9f9',
			borderRadius: 6,
			borderWidth: 2,
			borderColor: '#fff'
		});
		
		var image, comment;
	
		if(img != null){
			image = Ti.UI.createImageView({
				image: img,
				top: 5,
				left: 5,
				height: 249,
				width: 249
			});
			commentView.add(image);
		}
		if(content != null){
			comment = Ti.UI.createLabel({
				color: '#222',
				font: {fontSize: 12, fontWeight: 'normal', fontFamily:'Arial'},
				top: image.height + 10,
				left: 5,
				bottom: 5,
				height: 'auto',
				width: 259,
				text: content,
			});
			commentView.add(comment);
		}
		var arrow = Ti.UI.createView({
			top: 25,
			left: 50,
			height: 13,
			width: 6,
			backgroundImage: "/assets/arrow.png",
			zIndex: 100
		});
		var share = Ti.UI.createLabel({
			backgroundImage: "/assets/share.png",
			width: 16,
			height: 16,
			right: 45,
			bottom: 0
		});
		var del = Ti.UI.createLabel({
			backgroundImage: "/assets/delete.png",
			width: 15,
			height: 15,
			right: 10,
			bottom: 0
		});
		
		//row.height = commentView.height + 45;
		row.add(commentView);
		row.add(arrow);
		//row.add(share);
		//row.add(del);
		return row;
	};
	
	function createTr(img, content, month, day){
		var dateView = dateLabelView(month, day);
		var row = createRow(img, content);
		row.add(dateView);
		//var header = Ti.UI.createView({
		//	height: 60,
		//	width: 320
		//});
		//header.add(dateView);
		
		//var section = Ti.UI.createTableViewSection();
		//section.headerView = header;
		
		//section.add(createRow(img));
		
		return row;
	}
	
	var dataSource = []
	
	function data(){
		var data =[];
		for(var i = 0; i < dataSource.length; i++){
			data.push(createTr(dataSource[i].image.url, dataSource[i].content, 12, 31));
		}
		return data;
	}
	
	function addBlog(img, content){
		data.unshift(createTr(img, content, 12, 31));
	}
	
	return {
		data: data,
		addBlog: addBlog
	};
	
})();
