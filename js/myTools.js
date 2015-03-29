function LoadTableGame(state){
	// if(state=="all"){
		// alert("start search!!");
		$.getJSON("http://140.130.35.62:8080/csie40025146/RCC/game.json",function(data){
			var tablegamelist=data.tablegame;
			var length=tablegamelist.length;

			var rows=0;
			if(state=="all"){
				if(length<5){
					rows=1;
				}else{
					if(length%4==0)rows=Math.floor(length/4);
					else rows=Math.floor(length/4+1);
				}	
			}else if(state=="home"){
				if(length<5){
					rows=1;
				}else{
					rows=2;
				}
			}
			
			var i=length-1;
			for(var r=rows;r>0;r--){
				$("#content").append("<div class='row' id='r"+r+"'>");
				var m=0;
				if(i>4)	m=4;
				else m=i+1;
		
				for(m;m>0;m--){
					$("#r"+r).append("<div class='3u'><article class='box style2'>"
						+"<a href='#' class='image featured' ><img src='images/TableGames/"+tablegamelist[i].img+"' alt=''  /></a>"
						+"<h3><a href='#'>"+tablegamelist[i].name+"</a></h3>"
						+"<p>"
						+"遊戲種類:"+tablegamelist[i].class+"<br>"
						+"遊戲人數:"+tablegamelist[i].people+"<br>"
						+"遊戲時間:"+tablegamelist[i].gametime+"分鐘<br>"
						+"卡片大小:"+tablegamelist[i].cardsize+"<br>"
						+"建議售價:"+tablegamelist[i].sale+"元<br>"
						+"</p>"
						+"</article></div>");
					i--;
				}
				$("#content").append("</div>");

			}
			console.log("length="+length);
			console.log("rows="+rows);
		});
	// }
}