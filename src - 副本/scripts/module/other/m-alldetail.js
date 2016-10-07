var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/alldetail.html' );

// 加载文档
common.randerBody(html);

// 分页但是不能滑动
var picSwiper = new Swiper('.swiper-container', {
	noSwiping : true
});

// 根据地质栏，首次加载的位置
var href = window.location.href;
var index =   parseInt( href.substr( href.indexOf('?') + 1) );
var listIndex = [ '/api/apid/content', '/api/apid/comment' , '/api/apid/show' , '/api/apid/story'];
$('.swiper-slide').eq(index).load( listIndex[index] , iScrollRefresh );


// iscroll 滑动
var deScroll;
window.onload = function(){
	//由于是异步，所以不能确定到底谁先完成
	if(!deScroll){
		deScroll = new IScroll('.deScoll');
	}
	  
	// 单击按钮的监听方法
	$('.delist li').on('tap', function( e ){
		// alert(123);
		var index = $(this).index();
		picSwiper.slideTo(index , 0 , null);
		$('.delist li').eq(index).addClass('active').siblings().removeClass('active');
		$('.swiper-slide').eq(index).load( listIndex[index] , function(){
			setTimeout(function(){ deScroll.refresh(); },0)
		});
	});
}

//加载完成的回调函数
function iScrollRefresh( ){
	if(!deScroll){
		deScroll = new IScroll('.deScoll');
	}else{
		deScroll.refresh();
	}
	picSwiper.slideTo(index , 0 , null);
	$('.delist li').eq(index).addClass('active').siblings().removeClass('active');
}



// function iScrollRefresh( ){
	// deScroll.refresh();
	// picSwiper.slideTo(index , 0 , null);
	// $('.delist li').eq(index).addClass('active').siblings().remove('active');
// }