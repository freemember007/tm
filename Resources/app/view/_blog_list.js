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
			color:'#fff',
			font:{fontSize: 10, fontWeight: 'bold', fontFamily:'Arial'},
			left: 0,
			top: 1,
			height: 20,
			width: 39,
			textAlign: "center",
			text: month + "月"
		});
		var dayd = Ti.UI.createLabel({
			color:'#bbb',
			font:{fontFamily:'HelveticaNeue-CondensedBlack', fontSize:24, fontWeight:'bold'},
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
		var commentView = Ti.UI.createView({
			left: 0,
			top: 5,
			bottom: 10,
			width: 255,
			height: 'auto',
			backgroundColor: '#f9f9f9',
			borderRadius: 4,
			borderWidth: 1,
			borderColor: '#dcdcdc'
		});
		
		var image, comment;
		if(img != 'null'){
			image = Ti.UI.createImageView({
				image: img,
				top: 5,
				bottom: 5,
				left: 5,
				height: 245,
				width: 245
			});
			image.addEventListener('click', function(){
				mvc.view.imageView.show(img);
			});
			commentView.add(image);
		}
		if(content != 'null'){
			var top = 10, bottom = 10;
			if(img != 'null'){
				top = image.height + 15;
			}
			comment = Ti.UI.createLabel({
				color: '#222',
				font: {fontSize: 14, fontWeight: 'bold'},
				top: top,
				left: 10,
				bottom: 10,
				height: 'auto',
				width: 235,
				text: content,
			});
			if(img != 'null'){
				image.bottom = comment.height + 10;
			}
			commentView.add(comment);
		}
		var arrow = Ti.UI.createView({
			top: 25,
			left: -6,
			height: 13,
			width: 6,
			backgroundImage: "/assets/arrow.png",
			zIndex: 100
		});
		var share = Ti.UI.createView({
			backgroundImage: "/assets/share.png",
			width: 16,
			height: 16,
			right: 45,
			bottom: 5
		});
		var del = Ti.UI.createView({
			backgroundImage: "/assets/delete.png",
			width: 15,
			height: 15,
			right: 10,
			bottom: 5
		});
		
		var rowView = Ti.UI.createView({
			left: 56,
			top: 0,
			height: 'auto',
			width: 255
		});
		commentView.bottom = 25;
		rowView.add(commentView);
		rowView.add(share);
		rowView.add(del);
		
		var row = Ti.UI.createTableViewRow({
			backgroundColor: '#f0f0f0',
			selectedBackgroundColor: '#f0f0f0',
			height: rowView.height
		});
		row.add(rowView);
		return row;
	};
	
	var sections = {};
	
	function createTr(img, content, month, day){
		var row = createRow(img, content);
		
		var section = sections[month + "-" + day];
		if(section == undefined){
			var header = Ti.UI.createView({
				height: 1,
				width: 320
			});
			var dateView = dateLabelView(month, day);
			header.add(dateView);
			
			section = Ti.UI.createTableViewSection();
			section.headerView = header;
			sections[month + "-" + day]  = section;
		}
		section.add(row);
	}
	
	var dataSource = []
	
	function data(){
		sections = {};
		for(var i = 0; i < dataSource.length; i++){
			createTr(dataSource[i].image, dataSource[i].content, dataSource[i].month, dataSource[i].day);
		}
		data = [];
		for(item in sections){
			data.push(sections[item]);
		}
		return data;
	}
	
	function setItems(items){
		for(var i = 0; i < items.length; i++){
			dataSource.push({image:items[i].image, content:items[i].content, month:items[i].month, day:items[i].day});
		}
	}
	
	function addBlog(item){
		dataSource.unshift({image:item.image, content:item.content, month:item.month, day:item.day});
	}
	
	return {
		data: data,
		addBlog: addBlog,
		setItems: setItems
	};
	
})();
