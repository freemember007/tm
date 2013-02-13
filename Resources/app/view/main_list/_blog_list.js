	mvc.view.partial.blogList = (function(){
	
	function dateLabelView(month, day, top){
		var view = Ti.UI.createView({
			backgroundColor: "#ccc",
			width: 320,
			height: 30,
			opacity:0.9,
			top: 0
		});
		var monthd = Ti.UI.createLabel({
			color:'#fff',
			font:{fontSize: 16, fontWeight: 'bold', fontFamily:'Arial'},
			left: 45,
			top: 5,
			textAlign: "center",
			text: month + "月"
		});
		var dayd = Ti.UI.createLabel({
			color:'#fff',
			font:{fontFamily:'HelveticaNeue-CondensedBlack', fontSize:24, fontWeight:'bold'},
			left: 10,
			top: 0,
			textAlign: "center",
			text: day
		});
		view.add(monthd);
		view.add(dayd);
		return view;
	};
	
	function createRow(img, content){
		var commentView = Ti.UI.createView({
			left: 10,
			top: 5,
			bottom: 10,
			width: 300,
			height: 'auto',
			layout:'vertical',
			backgroundColor: '#fff',
			//borderRadius: 4,
			//borderWidth: 1,
			//borderColor: '#dcdcdc'
		});
		
		if(img != 'null'){
			image = Ti.UI.createImageView({
				image: img,
				top: 5,
				bottom: 5,
				left: 5,
				width: 290,
				height: 'auto',
			});
			image.addEventListener('click', function(){
				mvc.view.imageView.show(img);
			});
			commentView.add(image);
		}
		if(content != 'null'){
			comment = Ti.UI.createLabel({
				color: '#222',
				font: {fontSize: 14, fontWeight: 'bold'},
				top: 10,
				left: 10,
				bottom: 10,
				height: 30,
				width: 280,
				text: content,
			});
			
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
			//left: 56,
			top: 0,
			height: 'auto',
			width: 320
		});
		commentView.bottom = 25;
		rowView.add(commentView);
		rowView.add(share);
		rowView.add(del);
		
		var row = Ti.UI.createTableViewRow({
			backgroundColor: '#eee',
			selectedBackgroundColor: '#f0f0f0',
			height: rowView.height
		});
		row.add(rowView);
		return row;
	};
	
	var sections = {};
	
	function createTr(img, content, date){
		var row = createRow(img, content);
		
		var section = sections[(date.getMonth() + 1) + "-" + date.getDate()];
		if(section == undefined){
			var header = Ti.UI.createView({
				height: 40,
				width: 320,
			});
			var dateView = dateLabelView(date.getMonth() + 1, date.getDate());
			header.add(dateView);
			
			section = Ti.UI.createTableViewSection();
			section.headerView = header;
			sections[(date.getMonth() + 1) + "-" + date.getDate()]  = section;
		}
		section.add(row);
	}
	
	var dataSource = []
	
	function data(){
		sections = {};
		for(var i = 0; i < dataSource.length; i++){
			createTr(dataSource[i].image, dataSource[i].content, dataSource[i].date);
		}
		data = [];
		for(item in sections){
			data.push(sections[item]);
		}
		return data;
	}
	
	function setItems(items){
		dataSource = [];
		for(var i = 0; i < items.length; i++){
			dataSource.push({image:items[i].image, content:items[i].content, date: new Date(items[i].date)});
		}
	}
	
	function addBlog(item){
		dataSource.unshift({image:item.image, content:item.content, date: new Date(item.date)});
	}
	
	return {
		data: data,
		addBlog: addBlog,
		setItems: setItems
	};
	
})();
