$(function() {
  $('#flicker1').flicker();
  $('#flicker2').flicker();
  $('#owl1').owlCarousel({
		items:3,
		nav:true,
		margin:0,
		slideBy:3,
		responsive:{
			480:{
				items:2
			},
			960:{
				items:3
			}
		}
	});
	$('#owl-table').owlCarousel({
		items:4
	});
	  $('.owl-carousel').owlCarousel({
		items:4,
		nav:true,
		margin:0,
		slideBy:4,
		responsive:{
			480:{
				items:2
			},
			960:{
				items:4
			}
		}
	});
	
	// 百度地图API功能
	var map = new BMap.Map("map-con");            // 创建Map实例
	map.setMapStyle({style:"grayscale"});
	map.centerAndZoom("上海",20);
	map.addControl(new BMap.NavigationControl());
	var local = new BMap.LocalSearch(map, {
		renderOptions: {map: map, panel: "map-result"}
	});
	local.search("宜芝多");
	
	$(".map-tab a").click(function(e) {
        $(".map-tab a").removeClass("active");
		$(this).addClass("active");
		var city=$(this).html();
		var newMap = new BMap.Map("map-con");            // 创建Map实例
		newMap.setMapStyle({style:"grayscale"});
		newMap.centerAndZoom(city, 20);
		newMap.addControl(new BMap.NavigationControl());
		var newLocal = new BMap.LocalSearch(newMap, {
			renderOptions: {map: newMap, panel: "map-result"}
		});
		newLocal.search("宜芝多");
		$(".map-tab").fadeOut();
    });
	
	$(".btn-top").click(function(e) {
        $(document.body).stop(true,false).animate({"scrollTop":0},500);
    });
	
	$(".menu-link a,.href-anchor a").click(function(e) {
        var relId=$(this).attr("href");
		var scrollTop=$(relId).offset().top;
		$(document.body).stop(true,false).animate({"scrollTop":scrollTop},500);
		
    });
	
	//test
	$(".owl-li-p").click(function(e) {
        $(".cover").fadeIn();
    });
	
	
});
$(window).load(function(e) {
    
});
   