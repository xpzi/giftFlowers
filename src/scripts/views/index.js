var str=require('../tpls/index.html');
var common=require('../utils/common.util.js');

common.renderBody($('body'),str);

var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,
  pagination : '.swiper-pagination',
  paginationClickable :true
});

$('.logo').on('tap',function(){
  location.href = 'index.html';
});
$('.icon li:first-child').on('tap',function(){
  location.href = '';
});
$('.icon li:nth-child(2)').on('tap',function(){
  location.href = '';
});
$('.icon li:last-child').on('tap',function(){
  location.href = '';
});
$('.no1').on('tap',function(){
  location.href = './freshFlowers.html';
});
$('.no2').on('tap',function(){
  location.href = './cake.html';
});
$('.no3').on('tap',function(){
  location.href = './foreverFlowers.html';
});
$('.no4').on('tap',function(){
  location.href = './gift.html';
});
$('.no5').on('tap',function(){
  location.href = '';
});

      
$(function(){
	var huaScroll = new IScroll('.container',{});
    
	setTimeout(function(){
		huaScroll.refresh();		
	},500);
      $('.button a').eq(2).on('tap', function(e) {
            huaScroll.scrollTo(0, 0, 200);
            e.preventDefalut;
        })
})  