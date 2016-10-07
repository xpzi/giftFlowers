/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

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
		__webpack_require__(2);
	} else if( curhref.indexOf('cart') >= 0 ){
		__webpack_require__(5);
	} else if( curhref.indexOf('alldetail') >= 0 ){
		__webpack_require__(7);
	} else if( curhref.indexOf('login') >= 0 ){
		__webpack_require__(9);
	} else if( curhref.indexOf('regist') >= 0 ){
		__webpack_require__(11);
	} else{
		
	}






/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);
	var T = template;
	var html = __webpack_require__( 4 );
	$.ajax({
		url: '/api/spid/9012126',
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
		
	}



/***/ },
/* 3 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	module.exports = {
		randerBody : function( str ){
			$('body').html( str );
		},
		addCart: function( sp ){
			var oldSp = store('cart');
			var cursp = {
					type: sp.type,
					name: sp.name,
					price: sp.price,
					img: sp.imgs[0],
					id: sp.id,
					sum: 1
				}
			if(!oldSp){
				oldSp = [];
				oldSp.push(cursp);
			} else{
				oldSp = JSON.parse( oldSp);
				for(var i =0; i< oldSp.length ; i++){
					if( oldSp[i].id = cursp.id){
						oldSp[i].sum++;
						break;
					}
				}
				if( i == oldSp.length ){
					oldSp.push(cursp);
				}
			}
			store('cart' , JSON.stringify( oldSp) );
		}
		
	}



/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>  等待  </header>		<div class=\"deScoll\">		<div class=\"deScoll-box\">			<section>				<section id=\"slider-pic\">					<div class=\"swiper-container\">						<div class=\"swiper-wrapper\">							{{each imgs as value i}}								<div class=\"swiper-slide\"><img src=\"{{value}}\" alt=\"\" /></div>							{{/each}}						</div>						<div class=\"swiper-pagination\"></div>					</div>					<div class=\"addcart\">						<span>￥{{price}}</span>						<span>加入购物车</span>					</div>					<div class=\"details\" data-url=\"./alldetail.html?{{id}}-0\">						<a href=\"#\">							<p>{{title}}<span>{{state}}</span></p>							<span><i  class=\"iconfont\" >&#xe679;</i> </span>						</a>					</div>				</section>				<div class=\"kongbai\"></div>				<section id=\"app-exclusive\">					<span>APP专享价</span>					<span>可省3元</span>					<span></span>				</section>				<div class=\"kongbai\"></div>				<section id=\"pictext\">					<ul>						<li><span>材料：</span>{{material}}</li>						<li><span>花语：</span>{{says}}</li>						<li><span>配送：</span>{{delivery}}</li>						<li><span>说明：</span>{{explain}}</li>					</ul>										<span data-url=\"./alldetail.html?{{id}}-0\">更多图文详情 <i class=\"iconfont\">&#xe679;</i>	</span>				</section>				<div class=\"kongbai\"></div>				<section class=\"contact\"> 					<a href=\"#\"><i class=\"qq\"></i><span>在线客服</span></a>					<a href=\"#\"><i class=\"tel\"></i><span>400-899-8188</span></a>				</section>				<div class=\"kongbai\"></div>				<section id=\"comment\">					<h3>商品评价</h3>					<ul>						{{each evaluation as value i}}							<li>								<div class=\"t\">									<img src=\"{{value.imgsrc}}\" alt=\"\" />									<span class=\"xin\"><span></span></span>									<span class=\"ip\">{{value.ip}}</span>								</div>								<p>{{value.content}}</p>								<div class=\"b\">									<span><img src=\"http://img02.hua.com/icon/touxiang_m.png?3\"/></span>									<span>{{value.name}}</span>									<span>配送地址：{{value.path}}</span>								</div>							</li>						{{/each}}					</ul>					<div class=\"more\">						<a href=\"./alldetail.html?{{id}}-1\">【查看本商品全部评价】</a>						<a href=\"./alldetail.html?{{id}}-1\">【查看最近所有商品评价181550条】</a>					</div>									</section>								<div class=\"kongbai\"></div>				<section class=\"Story\">					<div id=\"show\"  class=\" title\" data-url=\"./alldetail.html?{{id}}-2\">						<h3><b>订单实拍秀</b><span>（由加盟店配送前拍取）</span></h3>						<i class=\"iconfont\">&#xe679;</i>						</div>					<div class=\"scroll-pai\">						<ul>							{{each show as value i}}							<li>								<img src=\"{{value.imgsrc}}\" alt=\"\" />								<p>订单：{{value.danhao}}</p>								<p>{{value.path}}</p>							</li>							{{/each}}						</ul>					</div>				</section>								<div class=\"kongbai\"></div>				<section class=\"Story\">					<div id=\"story\" class=\"title\" data-url=\"./alldetail.html?{{id}}-3\">						<h3><b>送花故事</b><span>最近共<span>888</span>条</span></h3>						<i class=\"iconfont\">&#xe679;</i>					</div>					<div class=\"list\">						{{each story as value i}}							<div class=\"item\">								<img src=\"{{value.imgsrc}}\" alt=\"\" />								<div class=\"text\">									<h3>{{value.title}}</h3>									<p>{{value.content}}<p>								</div>							</div>						{{/each}}					</div>				</section>								<div class=\"add-cart\">					<a href=\"#\">￥239  加入购物车</a>				</div>				<section class=\"you-like\">					<h3>也许您还喜欢</h3>					<div class=\"scroll-youlike\">						<ul>							<li>								<img src=\"http://img01.hua.com/uploadpic/newpic/9010734.jpg_80x87.jpg\" alt=\"\" />								<br /><span>￥159</span>							</li>							<li>								<img src=\"http://img01.hua.com/uploadpic/newpic/9010734.jpg_80x87.jpg\" alt=\"\" />								<br /><span>￥159</span>							</li>							<li>								<img src=\"http://img01.hua.com/uploadpic/newpic/9010734.jpg_80x87.jpg\" alt=\"\" />								<br /><span>￥159</span>							</li>							<li>								<img src=\"http://img01.hua.com/uploadpic/newpic/9010734.jpg_80x87.jpg\" alt=\"\" />								<br /><span>￥159</span>							</li>						</ul>					</div>				</section>			</section>						<footer>等待</footer>		</div>	</div></div>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);
	var T = template;
	var html = __webpack_require__( 6 );

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


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">		<div class=\"deScoll\">		<div class=\"deScoll-box\">					<header>等待</header>						<div class=\"liubai\"></div>						<!-- 结算 -->			<div class=\"clearing\">				<div>共1件商品</div>				<div><span> <a href=\"./index.html\">继续挑选</a> | </span><span>去结算</span></div>			</div>									<!-- 购物车列表 -->			<script id=\"splistTpl\" type=\"text/html\">				{{each list as value i }}				<li>					<div><img src=\"{{value.img}}\" alt=\"\"/></div>					<div>						<h3><span>[{{value.type}}]</span><a href=\"#\">{{value.name}}</a></h3>						<p>现价: <span > ￥{{value.price}}</span></p>						<p>数量：<span class=\"sub\">-</span><span><input class=\"sum\" type=\"text\" data-id=\"{{value.id}}\" value=\"{{value.sum}}\"/></span><span class=\"add\">+</span></p>					</div>					<div class=\"del\"><i></i></div>				</li>				{{/each}}			</script>			<ul id=\"splist\"  class=\"splist\">							</ul>						<!-- total 总共 -->			<div class=\"goumai\">				<div class=\"total\"><span>合计:</span><i>￥129</i></div>				<div class=\"goclearing\">去结算</div>			</div>												<!-- 搭配 -->			<div class=\"match\">				<h3>搭配以下商品，可与鲜花同时送达：</h3>				<ul>					<li>						<img src=\"http://img01.hua.com/uploadpic/images/20147211744696762.jpg\" alt=\"\"/>						<p>德芙心语:98g铁盒或109克礼盒</p>						<span>￥68</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/images/20147211744696762.jpg\" alt=\"\"/>						<p>德芙心语:98g铁盒或109克礼盒</p>						<span>￥68</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/images/20147211744696762.jpg\" alt=\"\"/>						<p>德芙心语:98g铁盒或109克礼盒</p>						<span>￥68</span>					</li>				</ul>			</div>						<footer>等待</footer>		</div>	</div></div>"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);
	var html = __webpack_require__( 8 );
	// iscroll 滑动
	var deScroll;
	// var picSwiper;
	// 根据地质栏，首次显示的位置
	var href = window.location.href;
	var pathArr = href.substr( href.indexOf('?') + 1).split('-');
	if(!pathArr[1]){
		pathArr[1] = 0;
	}else{
		pathArr[1] = parseInt(pathArr[1]);
	}

	$.ajax({
		url: '/api/spid/'+pathArr[0],
		success: function (res) {
			var rander = template.compile(html);
			var newhtml = rander(res);
			common.randerBody(newhtml);
			callbackFunc();
		}
	}); 

	function callbackFunc(){

		activeSelf('.delist li' ,pathArr[1], 'active');

		// 单击按钮的监听方法
		$('.delist li').on('tap', function( e ){
			var index = $(this).index();
			activeSelf('.delist li' ,index, 'active');
		});
	}

	function activeSelf( select , index, className ){
		$('.swiper-slide').eq(index).css('display' , 'block').siblings().css('display','none');
		$(select).eq(index).addClass(className).siblings().removeClass(className);
		setTimeout( function(){ 
			if( !deScroll){
				 deScroll = new IScroll('.deScoll');
				 setTimeout( function(){deScroll.refresh() },200);
			}else{
				deScroll.refresh();
			}
		},100);
	}



/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>  等待  </header>	<div class=\"deScoll\">		<div class=\"deScoll-box\">			<ul class=\"delist\">				<li class=\"active\">详情</li>				<li>评价</li>				<li>实拍秀</li>				<li>送花故事</li>			</ul>			<div class=\"swiper-container\">				<div class=\"swiper-wrapper\">					<div class=\"swiper-slide swiper-no-swiping\">						<div id=\"Img_Deail\" style=\"width:100%\">							{{each contentImg as value i}}								<p align=\"center\"><img alt=\"\" src=\"{{value}}\" border=\"0\"></p>								<p>&nbsp;</p>							{{/each}}						</div>					</div>					<div class=\"swiper-slide swiper-no-swiping\">						<section id=\"comment\">							<h3>商品评价</h3>							<ul>								{{each evaluation as value i}}									<li>										<div class=\"t\">											<img src=\"{{value.imgsrc}}\" alt=\"\" />											<span class=\"xin\"><span></span></span>											<span class=\"ip\">{{value.ip}}</span>										</div>										<p>{{value.content}}</p>										<div class=\"b\">											<span><img src=\"http://img02.hua.com/icon/touxiang_m.png?3\"/></span>											<span>{{value.name}}</span>											<span>配送地址：{{value.path}}</span>										</div>									</li>								{{/each}}							</ul>						</section>					</div>					<div class=\"swiper-slide swiper-no-swiping\">						<section class=\"Story\">							<div id=\"show\" class=\" title\">								<h3><b>订单实拍秀</b><span>（由加盟店配送前拍取）</span></h3>								<i class=\"iconfont\">&#xe679;</i>								</div>							<div class=\"scroll-pai\">								<ul>									{{each show as value i}}									<li>										<img src=\"{{value.imgsrc}}\" alt=\"\" />										<p>订单：{{value.danhao}}</p>										<p>{{value.path}}</p>									</li>									{{/each}}								</ul>							</div>						</section>					</div>					<div class=\"swiper-slide swiper-no-swiping\">						<section class=\"Story\">							<div id=\"story\" class=\"title\">								<h3><b>送花故事</b><span>最近共<span>888</span>条</span></h3>								<i class=\"iconfont\">&#xe679;</i>							</div>							<div class=\"list\">								{{each story as value i}}									<div class=\"item\">										<img src=\"{{value.imgsrc}}\" alt=\"\" />										<div class=\"text\">											<h3>{{value.title}}</h3>											<p>{{value.content}}<p>										</div>									</div>								{{/each}}							</div>						</section>					</div>				</div>			</div>		</div>			</div>	</div>"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);
	var T = template;
	var html = __webpack_require__( 10 );

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
		
		
	});





/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<header>等待</header>	<div class=\"deScoll\">		<div class=\"deScoll-box\">						<div class=\"swiper-container\">				<div class=\"swiper-wrapper\">					<div class=\"swiper-slide swiper-no-swiping\">						<div class=\"switch\"><a href=\"#\">使用手机验证登陆</a></div>						<section>  							<form id=\"loginMain\" action=\"../\">								<input class=\"text\" type=\"text\"   placeholder=\"请输入邮箱/手机号码\" />								<input class=\"text\" type=\"password\"   placeholder=\"请输入登陆密码\" />																<label for=\"\"><input type=\"checkbox\"/>一个月内免登陆</label>								<input type=\"button\" value=\"登陆\" />								<input type=\"button\" value=\"非会员快速下单\" />							</form>							</section> 						<section class=\"other\"><a href=\"./regist.html\">免费注册</a><a href=\"#\">找回密码</a></section>						<section class=\"otherlogin\">							<h3>其他方式登录：</h3>							<p><a href=\"javascript:void(0);\"></a><a href=\"javascript:void(0);\"></a></p>						</section>					</div>					<div class=\"swiper-slide swiper-no-swiping\">						<div class=\"switch\"><a href=\"#\">会员账号登录</a></div>						<section>  							<form id=\"loginBack\" action=\"../\">								<input class=\"text\" type=\"text\"   placeholder=\"请输入手机号码\" />								<label class=\"mess\" for=\"\"><input  type=\"text\"   placeholder=\"短信验证码\" /><span>获取验证码</span></label>								<input type=\"button\" value=\"登陆\" />							</form>							</section> 						<section class=\"other\"><a href=\"#\"></a><a href=\"#\">找回密码</a></section>						<section class=\"otherlogin\">							<h3>其他方式登录：</h3>							<p><a href=\"javascript:void(0);\"></a><a href=\"javascript:void(0);\"></a></p>						</section>					</div>				</div>			</div>												<footer>等待</footer>		</div>	</div></div>"

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(3);
	var T = template;
	var html = __webpack_require__( 12 );

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

	});


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container  regist \">	<header>等待</header>	<div class=\"deScoll\">		<div class=\"deScoll-box\">						<ul class=\"reg\">				<li class=\"active\">手机注册</li>				<li>邮箱注册</li>			</ul>			      			<div class=\"swiper-container\">				<div class=\"swiper-wrapper\">					<div class=\"swiper-slide swiper-no-swiping\">						<form class=\"phone\" id=\"phone\" action=\"\">							<label class=\"yanzhenma\"><input type=\"text\" placeholder=\"验证码\" /><img src=\"http://m.hua.com/Passport/Register/GetImgVerificationCode\" alt=\"\"/><span>看不清，换一张</span>  </label>							<label class=\"haoma\"><input type=\"number\"  placeholder=\"请输入手机号\" /></label>							<!--<span class=\"err\">此项为必填项，请输入你要注册的手机号</span>-->							<label class=\"shoujihao\"><input type=\"text\"  placeholder=\"请设置6-20位字母和数字登录密码\" /><span><i></i></span></label>							<label class=\"duanxin\"><input type=\"text\" placeholder=\"输入短信验证码\" /><span>获取短信验证码</span></label>														<input type=\"button\" value=\"提交注册\" />						</form>  					</div>					<div class=\"swiper-slide swiper-no-swiping\">						<form id=\"emil\" class=\"phone emil\" action=\"\">							<label class=\"haoma\"><input type=\"number\"  placeholder=\"请输入邮箱\" /></label>							<label class=\"shoujihao\"><input type=\"text\"  placeholder=\"请设置6-20位字母和数字登录密码\" /><span><i></i></span></label>							<label class=\"yanzhenma\"><input type=\"text\" placeholder=\"验证码\" /><img src=\"http://m.hua.com/Passport/Register/GetImgVerificationCode\" alt=\"\"/><span>看不清，换一张</span></label>							<input type=\"button\" value=\"提交注册\" />						</form>					</div>				</div>			</div>												<footer>等待</footer>		</div>	</div></div>"

/***/ }
/******/ ]);