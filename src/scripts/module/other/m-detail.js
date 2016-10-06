var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/detail.html' );

common.randerBody(html);  


var picSwiper = new Swiper('.swiper-container', {
	pagination : '.swiper-pagination',
	paginationType : 'custom',
	paginationCustomRender: function (swiper, current, total) {
		return current + '/' + total;
	}
});

//加入购物车直接 跳转到购物车 页面
$('.addcart span').eq(1).on('tap' , function(){
	window.location.href = './cart.html';
});

//跳转到商品全部信息页面
$('.details').on('tap' , function(){
	window.location.href = './alldetail.html?0';
});
$('#pictext>span').on('tap' , function(){
	window.location.href = './alldetail.html?0';
});
$('#comment .more a').on('tap' , function(){
	window.location.href = './alldetail.html?1';
});
$('#show').on('tap' , function(){
	window.location.href = './alldetail.html?2';
});
$('#story').on('tap' , function(){
	window.location.href = './alldetail.html?3';
});


window.onload = function(){
	var deScroll = new IScroll('.deScoll');
} 