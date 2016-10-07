var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/login.html' );

common.randerBody(html); 
// 分页但是不能滑动
var picSwiper = new Swiper('.swiper-container', {
	noSwiping : true
});
 
$(function(){
	
	$('.switch').eq(0).on('tap', function(){
		picSwiper.slideTo(1 , 0 , null);
	});
	$('.switch').eq(1).on('tap', function(){
		picSwiper.slideTo(0 , 0 , null);
	});
	
	var $input =  $('#loginMain input');
	$input.on('focus' ,function(){
		// $('.err').remove();
	});
	$input.eq(0).on('blur', function(){
		console.log(123);	
		//验证是不是有效的账号
		var phone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/; 
		var emil = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/;
		if( !phone.test($(this).val()) && !emil.test( $(this).val()) ){
			$('.err').remove();
			$(this).after( '<span class="err">请输入正确的邮箱/手机号码</span>' );
		} else{
			$('.err').remove();
		}
	});
	$input.eq(3).on('tap', function(){
		if( !$input.eq(0).val() || !$input.eq(1).val()){
			// $('.err').remove();
			// $input.eq(1).after('<span class="err">请输入用户名和密码</span>');
			return;
		}
		$.ajax({
			url: '/api/userlogin',
			success: function( res ){
				
				var ok = false;
				for(var i =0 ; i < res.length; i++){
					if($input.eq(0).val() == res[i].user){
						if( $input.eq(1).val( ) == res[i].password){
							ok = true;
						}
					}
				}
				if( ok ){
					alert( '登录成功') ;
				} else{
					$('.err').remove();
					$input.eq(1).after('<span class="err">用户名或密码错误！</span>');
				}
				
			},
			error: function(a,b,c){
				console.log( a ,b ,c);
			}
		});
	});
	$input.eq(4).on('tap', function(){
		window.location.href = "./cart.html";
	});
	
	var $back = $('#loginBack input');
	$back.eq(0).on('blur', function(){
		var phone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/; 
//		console.log( phone.test($(this).val())  );
		if( !phone.test($(this).val()) ){
			$('.err').remove();
			$(this).after( '<span class="err">请输入正确的手机号码</span>' );
		} else{
			$('.err').remove();
		}
	});
	$('.mess span').on('tap', function(){
		var phone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if( !phone.test($back.eq(0).val()) ){
			$('.err').remove();
			$back.eq(0).after( '<span class="err">请输入正确的手机号码</span>' );
		} else{
			$('.err').remove();
			var timer ;
			var i = 29;
			var self = this;
			$(self).html( 30+"秒后可再次发送" );
			if(!timer){
				timer = setInterval( function(){
					$(self).html( i+"秒后可再次发送" );
					if(!(--i)){ 
						clearInterval( timer ); 
						$(self).html( '获取验证码' );
						//假装有验证码
						$( '.mess input').val("123849");
					}
				},1000);
			}
		}
	});
	$('#loginBack input[type=button]').eq(0).on('tap', function(){
		var reg = /\d{6}/;
		if (  reg.test( $( '.mess input' ).val() ) ){
			$('.mess').after('<span class="err">请填写短信验证码</span>');
		}else{
			$.ajax({
				url:'/api/userMessage',
				success: function( res ){
					console.log( res );
					alert( "登录成功！");
				}
			});
		}
		
		
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
	
});


