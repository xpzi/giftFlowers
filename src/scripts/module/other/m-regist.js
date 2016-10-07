var common = require('../../utils/common-util.js');
var T = template;
var html = require( '../../tpls/other/regist.html' );

common.randerBody(html);
    
$(function(){
	var picSwiper = new Swiper('.swiper-container');
	
	deScroll = new IScroll('.deScoll',{
		click: true  
	});
	$('.reg li').on('tap', function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		picSwiper.slideTo( $(this).index() , 0 , null);
	});


	/* 验证 */
	$('#phone .haoma input').on('blur', function(){
		var reg = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		$('#phone .haoma + .err' ).remove();
		if( !reg.test( $(this).val() )){
			$('#phone .haoma').after('<span class="err">请输入你要注册的手机号</span>');
		}
	});
	$('#phone .shoujihao input').on('blur' , function(){
		var phone = /\S{6,16}/;
		$('#phone .shoujihao + .err').remove();
		if( !phone.test( $(this).val() ) ){
			$(this).parent( ).after('<span class="err">请设置6-20位字母和数字登录密码</span>');
		}
	});
	$('#phone  input[type=button]').eq(0).on('tap', function(){
		
		var reg = /\d{6}/;//短信验证码
		$('.err').remove();
		if( !reg.test( $('.duanxin input').eq(0).val() ) ){
			$('.duanxin' ).after( '<span class="err">请输入短信验证码</span>' );
		}
		$('#phone .haoma  input').trigger('blur');
		$('#phone .shoujihao input').trigger('blur');
		
		if( $('.err').length == 0 ){
			var user = {
				user: $('.haoma input').eq(0).val(),
				password: $('.shoujihao input').eq(0).val()
			}
			users = store('user');
			if( !users ){
				users = [];
				users.push(user);
			}else{
				users = JSON.parse( users);
				for(var i=0; i< users.length; i++){
					if( users[i].id == user.id  ){
						break;
					}
				}
				if( i ==  users.length ){
					users.push(user );
					store('user' , JSON.stringify(users));
					//注册成功
				}else{
					//用户已注册
				}
			}
		}
	});
	
	
	$('.shoujihao span').on('tap' , function(){
		if( $(this).css('text-align') == 'left' ){
			$(this).css('text-align', 'right');
			$(this).find('i').css('background' , "#ffad0d");
		} else{
			$(this).css('text-align', 'left');
			$(this).find('i').css('background' , "#ccc");
		}		
	});
	
	$('.duanxin span').on('tap', function(){
		var phone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
		if( phone.test( $('.haoma input').eq(0).val()) ){
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
						$(self).siblings('input').val("123849");
					}
				},1000);
			}
		} else{
			$('.err').remove();
			$('.haoma').eq(0).after('<span class="err">请输入你要注册的手机号</span>');
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