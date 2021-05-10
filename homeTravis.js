


function bar(){
	document.getElementById('myGraph'+String(id))
	.src="https://cdn.kastatic.org/ka-perseus-graphie/6fc87b09f1fd082b8939b6425bef6a1d5397e532.svg";
}
function pie(){
	document.getElementById('myGraph'+String(id))
	.src="https://chartio.com/assets/25c0ab/tutorials/charts/pie-charts/8f2915ab9024902155c5d27d430831be813de071853c69d778102722a4d0efbf/pie-chart-example-1.png";
}
function donut(){
	document.getElementById('myGraph'+String(id))
	.src="donut.png";
}

function openPage(evt, page){
	var i, tabcontent, tablinks;
	tabcontent=document.getElementsByClassName("tabcontent");
	for (i=0; i<tabcontent.length; i++){
		tabcontent[i].style.display="none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(page).style.display = "block";
	evt.currentTarget.className += " active";
}

var a=1;
var x=2;
var y=1;
var id;
var idPage;
var idGraph;
var count=1;
var graph1=2;
var graph2=2;
var graph3=2;
var graph4=2;
var graph5=2;


$(function(){
	
	//toggle off tabs and graphs at start up
	$("#tab_page1").show();
	$("#tab_pageadd").show();
	for(i=1;i<=5;i++){
		$("#myGraph"+String(i)+"_1").show();
		$("#myBtn"+String(i)+"_1").show();
	}
	
	//add page
	$('#tab_pageadd').on('click', function(){
		$('#tab_page'+String(x)).show();
		$("#tabName").val("Page "+String(x));
		$("#name").show();
		x++;
		if(x==6){
			$("#tab_pageadd").hide();
		}
	});
	//delete page
	$('#deleteTab').on('click', function(){
		if(x>2){
			if(x==6){
				$("#tab_pageadd").show();
			}
			x--;
			$('#tab_page'+String(x)).hide();
			$('#Page'+String(x)).hide();
			$('#Page'+String(x-1)).show();
			$('#tab_page'+String(x-1)).addClass('active');
		}
	});
	
	
	
	//add row to tab infintly
	$("#confirmYes").on('click',function(){
		if($('#tab_page1').hasClass('active')==true){
			if(graph1==(Number(a)+1)){
				if(graph1%2==0){
					$('#myGraph1_'+String(graph1)).show();
					$('#myBtn1_'+String(graph1)).show();
				}
				else{
					$('#Page1').append(addRow(1,graph1));
					$('#myGraph1_'+String(graph1)).show();
					$('#myBtn1_'+String(graph1)).show();
				}
				graph1++;
			}
		}
		else if($('#tab_page2').hasClass('active')==true){
			if(graph2==(Number(a)+1)){
				if(graph2%2==0){
					$('#myGraph2_'+String(graph2)).show();
					$('#myBtn2_'+String(graph2)).show();
				}
				else{
					$('#Page2').append(addRow(2,graph2));
					$('#myGraph2_'+String(graph2)).show();
					$('#myBtn2_'+String(graph2)).show();
				}
				graph2++;
			}
		}
		else if($('#tab_page3').hasClass('active')==true){
			if(graph3==(Number(a)+1)){
				if(graph3%2==0){
					$('#myGraph3_'+String(graph3)).show();
					$('#myBtn3_'+String(graph3)).show();
				}
				else{
					$('#Page3').append(addRow(3,graph3));
					$('#myGraph3_'+String(graph3)).show();
					$('#myBtn3_'+String(graph3)).show();
				}
				graph3++;
			}
		}
		else if($('#tab_page4').hasClass('active')==true){
			if(graph4==(Number(a)+1)){
				if(graph4%2==0){
					$('#myGraph4_'+String(graph4)).show();
					$('#myBtn4_'+String(graph4)).show();
				}
				else{
					$('#Page4').append(addRow(4,graph4));
					$('#myGraph4_'+String(graph4)).show();
					$('#myBtn4_'+String(graph4)).show();
				}
				graph4++;
			}
		}
		else if($('#tab_page5').hasClass('active')==true){
			if(graph5==(Number(a)+1)){
				if(graph5%2==0){
					$('#myGraph5_'+String(graph5)).show();
					$('#myBtn5_'+String(graph5)).show();
				}
				else{
					$('#Page5').append(addRow(5,graph5));
					$('#myGraph5_'+String(graph5)).show();
					$('#myBtn5_'+String(graph5)).show();
				}
				graph5++;
			}
		}
		$("#confirm").hide();
		$("#myModal").hide();
	});
	
	
	//deletes graph
	$("#deleteGraph").on('click',function(){
		if($('#tab_page1').hasClass('active')==true){
			if(graph1>=3){
				graph1--;
				if(graph1%2==0){
					$('#myGraph1_'+String(graph1)).hide();
					$('#myBtn1_'+String(graph1)).hide();
					$('#myGraph1_'+String(graph1-1)).attr("src", "graphPlaceholder.png");	
				}
				else{
					$('#Page1 > div').last().remove();
					$('#myGraph1_'+String(graph1-1)).attr("src", "graphPlaceholder.png");
				}
			}
		}
		else if($('#tab_page2').hasClass('active')==true){
			if(graph2==(Number(a)+1)){
				if(graph2%2==0){
					$('#myGraph2_'+String(graph2)).show();
					$('#myBtn2_'+String(graph2)).show();
				}
				else{
					$('#Page2').append(addRow(2,graph2));
					$('#myGraph2_'+String(graph2)).show();
					$('#myBtn2_'+String(graph2)).show();
				}
				graph2++;
			}
		}
		else if($('#tab_page3').hasClass('active')==true){
			if(graph3==(Number(a)+1)){
				if(graph3%2==0){
					$('#myGraph3_'+String(graph3)).show();
					$('#myBtn3_'+String(graph3)).show();
				}
				else{
					$('#Page3').append(addRow(3,graph3));
					$('#myGraph3_'+String(graph3)).show();
					$('#myBtn3_'+String(graph3)).show();
				}
				graph3++;
			}
		}
		else if($('#tab_page4').hasClass('active')==true){
			if(graph4==(Number(a)+1)){
				if(graph4%2==0){
					$('#myGraph4_'+String(graph4)).show();
					$('#myBtn4_'+String(graph4)).show();
				}
				else{
					$('#Page4').append(addRow(4,graph4));
					$('#myGraph4_'+String(graph4)).show();
					$('#myBtn4_'+String(graph4)).show();
				}
				graph4++;
			}
		}
		else if($('#tab_page5').hasClass('active')==true){
			if(graph5==(Number(a)+1)){
				if(graph5%2==0){
					$('#myGraph5_'+String(graph5)).show();
					$('#myBtn5_'+String(graph5)).show();
				}
				else{
					$('#Page5').append(addRow(5,graph5));
					$('#myGraph5_'+String(graph5)).show();
					$('#myBtn5_'+String(graph5)).show();
				}
				graph5++;
			}
		}
		$("#confirm").hide();
		$("#myModal").hide();
	});
	
	//function that holds what to add when a new row is requested
	function addRow(page, graph){
		markup='<div class="row"><div class="container"><img  id="myGraph'+String(page)+'_'+String(graph)+'" src="graphPlaceholder.png" width="700" height="700" ></img><img src="graphMenu.png" id="myBtn'+String(page)+'_'+String(graph)+'" width="70" height="70" class="placeholder"/></div><div class="container"><img  id="myGraph'+String(page)+'_'+String(graph+1)+'"" src="graphPlaceholder.png" width="700" height="700" ></img><img src="graphMenu.png" id="myBtn'+String(page)+'_'+String(graph+1)+'"" width="70" height="70" class="placeholder"/></div></div>';
		return markup;
	}

	
	//updates the name of the tab
	$('#enter').on('click', function(){
		var name = $("#tabName").val();
		$('#tab_page'+String(x-1)).html(name).addClass('active');
		$("#name").hide();
		$('#Page'+String(x-1)).show();
		
	});	
	
	//Grabs the ID of whatever button is pushed
	$(".tabcontent").on("click",".placeholder",function(){
		id=$(this).attr('id');
		id=id.replace('myBtn','');
		idSplit=id.split('_');
		idPage=idSplit[0];
		a=idSplit[1];

		$("#myModal").show();
	});
	
	
	//hides the modal on x click
	$("#close").on("click", function(){
		$("#confirm").show();
	});
	$("#closeName").on("click", function(){
		$("#name").hide();
	});
	$("#closeConfirm").on("click", function(){
		$("#confirm").hide();
		$("#myModal").hide();
	});
	
});