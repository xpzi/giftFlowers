var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/detail.html' );
$.ajax({
	url: '/api/spid/9012126.json',
	success: function (res) {
	
		var rander = template.compile(html);
		var newhtml = rander(res);
		
		common.randerBody(newhtml);
		callbackFunc(res);
	}
});  

function callbackFunc(sp){
	var sp = sp;
	var picSwiper = new Swiper('.swiper-container', {
		pagination : '.swiper-pagination',
		paginationType : 'custom',
		paginationCustomRender: function (swiper, current, total) {
			return current + '/' + total;
		}
	});

	setTimeout( function(){
		var deScroll = new IScroll('.deScoll');
	},1000);

	//加入购物车直接 跳转到购物车 页面
	$('.addcart span').eq(1).on('tap' , function(){
		common.addCart( sp );
		window.location.href = './cart.html';
	});

	//跳转到商品全部信息页面
	$('.details').on('tap' , function(){
		window.location.href =  $(this).attr('data-url');
	});
	$('#pictext>span').on('tap' , function(){
		window.location.href =  $(this).attr('data-url');
	});
	$('#show').on('tap' , function(){
		window.location.href =  $(this).attr('data-url');
	});
	$('#story').on('tap' , function(){
		window.location.href =  $(this).attr('data-url');
	});
	        //顶部导航栏
    $('#header ul').on('tap', 'li:last-child', function() {

            $('nav').toggle()
        })
     navload();
    function navload(){
            $('nav ul li').eq(0).on('tap',function(){
        location.href="./index.html"
    })
     $('nav ul li').eq(1).on('tap',function(){
       
    
    })
 $('nav ul li').eq(2).on('tap',function(){
        location.href="./build/other/cart.html"
    })
  $('nav ul li').eq(3).on('tap',function(){
        location.href="./build/other/login.html"
    })
    $("#header ul li").eq(0).on('tap',function(){
        history.back();
    })

    }
	
}
