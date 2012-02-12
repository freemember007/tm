mvc.view.partial.photoList = (function(){
	
	function data(){
		var data =[];
		var imgs =[
			'http://yantai.dzwww.com/xinwen/ytyl/mszw/200609/W020060930360470477361.jpg',
		];
	
		for (var c=0; c<12; c++){
			var header = Ti.UI.createView({
				height: 30,
				backgroundColor: '#333',
				opacity: 0.8
			});
			
			var headerLabel = Ti.UI.createLabel({
				font: {fontSize:18,fontWeight:'bold'},
				text: (c + 1) + '月',
				color: '#eee',
				textAlign: 'center',
				top: 0,
				left: 0,
				width: 320,
				height: 30
			});
			header.add(headerLabel);
		
			var section = Ti.UI.createTableViewSection();
			section.headerView = header;
			
			var tr = Ti.UI.createTableViewRow({
				height: 'auto'
			});
			for(var i = 0; i < 4; i++){
				for(var j = 0; j < 3; j++){
					var img_view = Ti.UI.createImageView({
						left: 80 * i,
						top: 80 * j,
						width: 80,
						height: 80,
						image: imgs[0]
					})
					tr.add(img_view);
				}
			}
			section.add(tr);
			data.push(section);
		}
		return data;
	}

	
	function reload(){
		
	}
	
	return {
		data: data,
		reload: reload
	}
		
})();
