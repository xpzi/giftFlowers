var common = require('../utils/common-util.js');
var strDetail = require('../tpls/other/detail.html');
var strDetailList = require('../tpls/other/detail-list.html');
var T = template;

common.randerBody(strDetailList);  

 
var picSwiper = new Swiper('.swiper-container', {
	 
});

window.onload = function(){
	var deScroll = new IScroll('.deScoll');
	deScroll;
}







console.log("首页js");
console.log("hdhi");