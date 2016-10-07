var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/cart.html' );

common.randerBody(html);


var cartList = store('cart');
if(cartList ){
	cartList = JSON.parse( cartList ) ;
	updataList();
}

function updataList(  ){
	$('#splist').html( template('splistTpl' , {list:cartList}));
	updataPri(0);
}

function updataPri(isCart, id){
	if(isCart){
		for(var i =0; i< cartList.length; i++){
			console.log(cartList[i].id+"---------"+ id);
			if( cartList[i].id == id){
				if( !(cartList[i].sum <= 1 &&  isCart < 0)){
					cartList[i].sum += isCart;
					store( 'cart' ,  JSON.stringify(cartList) );
				}
				break;
			}
		}
	}
	var totalPri = 0;
	for( var  i=0; i< cartList.length; i++ ){
		
		totalPri += (cartList[i].price*cartList[i].sum);
	}
	$('.total i').html("￥"+ totalPri);
	return totalPri;
}

function delCart(id){
	for(var i =0; i< cartList.length; i++){
		if( cartList[i].id == id){
			cartList.splice(i, 1);
			store( 'cart' ,  JSON.stringify(cartList) );
			break;
		}
	}
	updataList();
}


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
	
	$('.sub').on('tap', function(){
		var sum = $(this).parent().find('.sum').eq(0);
		var val = parseInt(sum.val() );
		if( val > 1 ){
			val--;
		}
		sum.val(val);
		updataPri(-1 ,sum.attr('data-id') );
	}); 
	$('.add').on('tap', function(){
		var sum = $(this).parent().find('.sum').eq(0);
		var val = parseInt(sum.val() );
		sum.val(++val);
		updataPri(1 ,sum.attr('data-id') );
	});
	
	$('.del').on('tap', function(){
		var sum = $(this).parent().find('.sum').eq(0);
		delCart(sum.attr('data-id') );
	});

});