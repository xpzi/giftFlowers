var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/alldetail.html' );

common.randerBody(html);

var picSwiper = new Swiper('.swiper-container', {
	noSwiping : true
});


var href = window.location.href;
var index =   parseInt( href.substr( href.indexOf('?') + 1) );
var listIndex = [ '/api/apid/content', '/api/apid/comment' , '/api/apid/show' , '/api/apid/story'];
$('.swiper-slide').eq(index).load( listIndex[index] , iScrollRefresh );

console.log( index );
var deScroll = new IScroll('.deScoll');
window.onload = function(){
	if(!deScoll){
		deScroll = new IScroll('.deScoll');
	}
}
function iScrollRefresh( ){
	if(!deScoll){
		deScroll = new IScroll('.deScoll');
	}else{
		deScroll.refresh();
	}
	
	picSwiper.slideTo(index , 0 , null);
	$('.delist li').eq(index).addClass('active').sibling().remove('active');
}

function iScrollRefresh( ){
	deScroll.refresh();
	picSwiper.slideTo(index , 0 , null);
	$('.delist li').eq(index).addClass('active').sibling().remove('active');
}