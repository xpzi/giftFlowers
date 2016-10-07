var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/regist.html' );

common.randerBody(html);
    
$(function(){
	var picSwiper = new Swiper('.swiper-container');
	
	deScroll = new IScroll('.deScoll',{
		click: true  
	});
	$('.reg li').on('tap', function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		picSwiper.slideTo( $(this).index() , 0 , null);
	});


});