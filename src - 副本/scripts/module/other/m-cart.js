var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/cart.html' );

common.randerBody(html);

$(function(){
	deScroll = new IScroll('.deScoll',{
		click: true
	});
	$('.clearing span').eq(1).on('tap', function(){
		window.location.href = './login.html';
	});
	$('.goclearing').on('tap', function(){
		window.location.href = './login.html';
	});

	
});