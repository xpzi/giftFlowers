var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/login.html' );

common.randerBody(html); 
// 分页但是不能滑动
var picSwiper = new Swiper('.swiper-container', {
	noSwiping : true
});
 
$(function(){
	
	$('.switch').eq(0).on('tap', function(){
		picSwiper.slideTo(1 , 0 , null);
	});
	$('.switch').eq(1).on('tap', function(){
		picSwiper.slideTo(0 , 0 , null);
	});
	
});


