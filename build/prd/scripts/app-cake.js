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

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "<div class=\"totop\">	<a></a></div>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
		
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  
	  append: function ($el, str) {
	    $el.append(str);
	  },
	 
		reanderHeader:function( tpl , data){
			var html  = '';
			var rander = template.compile(tpl);
			return rander(data);
		},
		
		ajaxquer: function(url,tplId , boxId, key, callback){
			 $.ajax({
	        url: url,
	        success: function(data) {
	        	data = key ? data[key] : data;
	        	var dgboxHtml = template(tplId, data);
						$(boxId).html( dgboxHtml );
						if(callback) callback();
	        },
	        error: function(data) {
	            console.log("ajax错误")
	        },
	        dataType: 'json'
	    })
		},
		
		compile: function( tplstr , data  ){
			var rander = template.compile(tplstr);
			return rander(data);
		},
		
		/* 
		 * 
		 	应该换一个文件保存这类 有关联的方法
		 *
		 * */
	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  },
	  
	  backTop: function( myScroll ){
	 			//回到顶部显示的距离
	    	myScroll.on('scroll', function() {
	            if (myScroll.y < -500) {
	                $('.totop').show()
	            } else {
	                $('.totop').hide()
	            }
	        });
	        
	        $('.totop a').on('tap', function(e) {
	            myScroll.scrollTo(0, 0, 200);
	            e.preventDefalut;
	        })
	  },
	  
	  navload:function() {
			$('nav ul li').eq(0).on('tap', function() {
				location.href = "/build/index.html"
			})
			$('nav ul li').eq(1).on('tap', function() {

			})
			$('nav ul li').eq(2).on('tap', function() {
				location.href = "/build/other/cart.html"
			})
			$('nav ul li').eq(3).on('tap', function() {
				location.href = "/build/other/login.html"  
			})
			$("#header ul li").eq(0).on('tap', function() {
				history.back();
			})
			$('#header ul').on('tap', 'li:last-child', function() {
				$('nav').toggle()
			})
		}
		
	};

	module.exports = common;



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(7);
	 


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = __webpack_require__(5);
	var str = __webpack_require__(8);
	var header = __webpack_require__(9);
	var footer = __webpack_require__(10);
	var top = __webpack_require__(4);
	var citys = __webpack_require__(11);

	$("body").prepend(str);
	var headerData = {
		cake: true,
		data: []
	};
	var rander = template.compile(header);
	var header = rander(headerData);
	$('#iscroll').prepend(header);
	$("body").append(citys);
	$('.container').eq(0).append(top);
	$('#footer').prepend(footer);

	var myScroll;
	var fulg = 2;

	if(localStorage.getItem('city')) {
		$('.citys h3').html(localStorage.getItem('city'));
		$('#header ul li span').html(localStorage.getItem('city') + '<i></i> ')
		if(localStorage.getItem('city') == "北京") {
			listload('/api/cakelist.php.json');
			$('.nav_bar ul').html('   <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">好利来</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">北京蛋糕导航></a></li>  ')

		} else {

			listload('/api/cake/shanghai.php.json');
			$('.nav_bar ul').html('  <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">元祖</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">上海蛋糕导航></a></li> ')

		}

	} else {
		listload('/api/cakelist.php.json');
	}

	function listload(url) {
		$.ajax({
			url: url,
			success: function(data) {
				var dgboxHtml = template('testList', data);
				$('#dgbox').html( dgboxHtml );
	           if( !(--fulg) ){
					initIScroll();
				}
			},
			error: function(data) {
				console.log("ajax错误")
			},
			dataType: 'json'
		})
	}

	function initIScroll() {

		//保存地点信息
		myScroll = new IScroll('#wrapper', {
			scrollbars: true,
			fadeScrollbars: true,
			shrinkScrollbars: 'scale',
			click: true,
			probeType: 3
		});
		//回到顶部按钮
		common.backTop(myScroll);
	}

	window.onload = function() {
		console.log( 'onload' );
		if( !(--fulg) ){
			initIScroll();
		}

		//顶部导航栏
		$('#header ul').on('tap', 'li:last-child', function() {
			$('nav').toggle()
		})

		//关闭城市选择
		$('.close').on('tap', function() {
				$('.citys').hide();
			})
		//打开城市选择
		$('#header ul li span').on('tap', function() {
			$('.citys').show();
		})
		
		//城市选择
		$('.citys ul li').on('tap', function() {
			$('.citys h3').html($(this).html());
			$('#header ul li span').html($(this).html() + '<i></i> ');
			$('.close').trigger('tap');
			localStorage.setItem("city", $(this).text());
			if($(this).text() == "北京") {
				listload('/api/cakelist.php.json');
				$('.nav_bar ul').html('   <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">好利来</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">北京蛋糕导航></a></li>  ')
				setTimeout(function() {
					myScroll.refresh();
				}, 1000)

			} else {

				listload('/api/cake/shanghai.php.json');
				$('.nav_bar ul').html('  <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">元祖</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">上海蛋糕导航></a></li> ')
				setTimeout(function() {
					myScroll.refresh();
				}, 1000)

			}

			

		})
		
		common.navload();
		/*navload();

		function navload() {
			$('nav ul li').eq(0).on('tap', function() {
				location.href = "./index.html"
			})
			$('nav ul li').eq(1).on('tap', function() {

			})
			$('nav ul li').eq(2).on('tap', function() {
				location.href = "/build/other/cart.html"
			})
			$('nav ul li').eq(3).on('tap', function() {
				location.href = "/build/other/login.html"
			})
			$("#header ul li").eq(0).on('tap', function() {
				history.back();
			})

		}*/

		

	}

	console.log([
		"                   _ooOoo_",
		"                  o8888888o",
		"                  88\" . \"88",
		"                  (| -_- |)",
		"                  O\\  =  /O",
		"               ____/`---'\\____",
		"             .'  \\\\|     |//  `.",
		"            /  \\\\|||  :  |||//  \\",
		"           /  _||||| -:- |||||-  \\",
		"           |   | \\\\\\  -  /// |   |",
		"           | \\_|  ''\\---/''  |   |",
		"           \\  .-\\__  `-`  ___/-. /",
		"         ___`. .'  /--.--\\  `. . __",
		"      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
		"     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
		"     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
		"======`-.____`-.___\\_____/___.-`____.-'======",
		"                   `=---='",
		"^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
		"         佛祖保佑       永无BUG"
	].join('\n'));



	/*for(var i = 0; i < data.length; i++) {
					$('.dgbox>li').eq(i).html(template('test' + i, data[i]));
				}*/


	/*$('.title span:nth-child(1)').html($(this).html())*/

	/*   var data = {
	    name: '好利来',
	    src:["http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg","http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg"],
	    price:["好利来 甄爱礼盒(6寸)<i>￥239</i>","好利来 甄爱礼盒(6寸)<i>￥289</i>"]

	};*/

		/*var html1 = template('test1', data[1]);
		$('.dgbox>li').eq(1).html(html1)*/
		/*var html = template('test2', data[2]);
		$('.dgbox li').eq(0).html(html)*/


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<!-- 头部 -->	<div id=\"wrapper\">		<div id=\"iscroll\">						<!-- % header % -->			<section class=\"nav_bar\">				<ul>					<li>						<a href=\"http://baidu.com\">热门 :</a>					</li>					<li>						<a href=\"#\">好利来</a>					</li>					<li>						<a href=\"#\">窝夫小子</a>					</li>					<li>						<a href=\"#\">北京蛋糕导航></a>					</li>				</ul>			</section>						<section class=\"spbox\">								<!--  list template    -->				<script id=\"testList\" type=\"text/html\">					{{each list as val key}}					<li>						{{if val.type}}							<div class=\"title\">全国配送蛋糕（可送<span>{{val.city}}</span>地区）</div>						{{else if val.gift}}							<div class=\"title\"><span>{{name}}</span></div>						{{else}}							<div class=\"title\">可送<span>{{val.city}}</span>的<span>{{val.name}}</span>蛋糕：</div>						{{/if}}						<ol>							{{each val.src as value i}}							<li><a href=\"#\"><img src={{value}}><span>{{#val.price[i]}}</span></a></li>							{{/each}}						</ol>					</li>					{{/each}}				</script>								<ul class=\"dgbox\">					<!--  splist -->					<div id=\"dgbox\"></div>										<div class=\"footerlist\">						<div class=\"title\">生日蛋糕-蛋糕常识</div>						<ol>							<li><a href=\"#\">蛋糕的分类,做法和保存	</a></li>							<li><a href=\"#\">九种蛋糕的做法</a></li>							<li><a href=\"#\">美味蛋糕新做法</a></li>							<li><a href=\"#\">选择婚礼蛋糕有学问</a></li>							<li><a href=\"#\">生活常识：巧切蛋糕</a></li>							<li><a href=\"#\">DIY蛋糕方法	</a></li>						</ol>					</div>				</ul>			</section>						<footer id=\"footer\">				<!-- % footer % -->			</footer>		</div>	</div>	<div class=\"totop\">		<a></a>	</div></div><!--<li>												<script id=\"test0\" type=\"text/html\">							<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}							</ol>						</script>					</li>					<li>						<script id=\"test1\" type=\"text/html\">							<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}							</ol>							<a class=\"loadmore\">加载更多<span></span></a>						</script>					</li>					<li>						<script id=\"test2\" type=\"text/html\">							<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}								<a class=\"loadmore\">加载更多<span></span></a>							</ol>						</script>					</li>					<li>						<script id=\"test3\" type=\"text/html\">							<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}								<a class=\"loadmore\">加载更多<span></span></a>							</ol>						</script>					</li>					<li>						<script id=\"test4\" type=\"text/html\">							<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}								<a class=\"loadmore\">加载更多<span></span></a>							</ol>						</script>					</li>					<li>						<script id=\"test5\" type=\"text/html\">							<div class=\"title\">全国配送蛋糕（可送<span>{{city}}</span>地区）</div>							<ol>								{{each src as value i}}								<li>									<a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a>								</li>								{{/each}}								<a class=\"loadmore\">加载更多<span></span></a>							</ol>						</script>					</li>-->"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<ul>		<li><i class=\"iconfont\">&#xe679;</i> </li>		{{each data as value i}}			<li>{{value}}</li> 		{{/each}}		{{if cake}}			<li>送至:</li>			<li><span>北京 <i></i> </span></li>			<li>蛋糕</li>		{{/if}}		<li> <i class=\"iconfont\">&#xe7ad;</i> </li>	</ul></header><nav  id=\"nav2\">	<ul>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6b8;</span><i>首页</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6fe;</span><i>分类搜索</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6af;</span><i>购物车</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe736;</span><i>我的</i></a>		</li>	</ul></nav>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"btns\">	<a href=\"#\">登录</a>	<a href=\"#\">注册</a></div><div class=\"footer_menu\">	<ul>		<li>			<a href=\"#\">帮助</a>		</li>		<li>			<a href=\"#\">查单</a>		</li>		<li>			<a href=\"#\">在线补款</a>		</li>		<li>			<a href=\"#\">客服</a>		</li>		<li>			<a href=\"#\">花语大全</a>		</li>		<li>			<a href=\"#\">电脑版</a>		</li>	</ul></div><p>© 花礼网(中国鲜花礼品网) m.hua.com</p>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<!-- 弹出框 ： 城市列表 --><div class=\"citys\">	<div class=\"city_menu\">		<a class=\"close\">×</a>		<div class=\"title\">请选择蛋糕配送城市</div>		<h4>您当前配送的城市:</h4>		<h3>北京</h3>		<h4>可选城市</h4>		<div class=\"list\">			<ul>				<li>北京</li>				<li>上海</li>				<li>广州</li>				<li>深圳</li>				<li>天津</li>				<li>重庆</li>				<li>成都</li>				<li>西安</li>				<li>杭州</li>				<li>南京</li>				<li>苏州</li>				<li>武汉</li>				<li>沈阳</li>				<li>大连</li>				<li>哈尔滨</li>				<li>长春</li>				<li>济南</li>				<li>青岛</li>				<li>石家庄</li>				<li>长沙</li>			</ul>		</div>	</div></div>"

/***/ }
/******/ ]);