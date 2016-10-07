/* var pageName = [ {
		name: 'index',
		src: '../tpls/other/detail.html',
		js: '../module/other/m-detail.js'
	},{
		name: 'cart',
		src: '../tpls/other/cart.html'
	},{
		name: 'detaillist',
		src: '../tpls/other/cart.html'
	}];
	
for( var i=0 , len = pageName.length , curhref = window.location.href; i < len ; i++){
	if( curhref.indexOf( pageName[i].name ) >= 0 ){
		var html = require( pageName[i].src );
		require(pageName[i].js);
		break;
	}
} */
var curhref = window.location.href;
if( curhref.indexOf('index') >= 0 ){
	require('../module/other/m-detail.js');
} else if( curhref.indexOf('cart') >= 0 ){
	require('../module/other/m-cart.js');
} else if( curhref.indexOf('alldetail') >= 0 ){
	require('../module/other/m-alldetail.js');
} else if( curhref.indexOf('login') >= 0 ){
	require('../module/other/m-login.js');
} else if( curhref.indexOf('regist') >= 0 ){
	require('../module/other/m-regist.js');
} else{
	
}



