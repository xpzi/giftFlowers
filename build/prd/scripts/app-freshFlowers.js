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

	module.exports = __webpack_require__(16);


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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = "<header id=\"header\">	<ul>		<li><i class=\"iconfont\">&#xe679;</i> </li>		{{each data as value i}}			<li>{{value}}</li> 		{{/each}}		{{if cake}}			<li>送至:</li>			<li><span>北京 <i></i> </span></li>			<li>蛋糕</li>		{{/if}}		<li> <i class=\"iconfont\">&#xe7ad;</i> </li>	</ul></header><nav  id=\"nav2\">	<ul>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6b8;</span><i>首页</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6fe;</span><i>分类搜索</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe6af;</span><i>购物车</i></a>		</li>		<li>			<a href=\"#\"><span class=\"iconfont\">&#xe736;</span><i>我的</i></a>		</li>	</ul></nav>"

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(17);

	 


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(18);
	var header = __webpack_require__(9);
	var top = __webpack_require__(4);

	var common = __webpack_require__(5);

	common.renderBody($('body'), str);
	common.switchPage(0);
	var headerData = {data: ['','','鲜花列表','']};
	var rander = template.compile(header);
	var header = rander(headerData);
	$('.container').eq(0).prepend(header);
	$('body').append(top);

	// swiper 定义
	var mySwiper = new Swiper('#index-swiper', {
		onSlideChangeEnd: function(swiper) {
			$('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
		}
	});
	$('#swiper-nav li').on('tap', function() {
		mySwiper.slideTo($(this).index());
		$(this).addClass('active').siblings().removeClass('active');
	});

	$.ajax({
		url: '/api/freshFlowers.json',
		success: function(res) {
			var html = template('list', res);
			common.inner($('#index-scroll'), html);
		}
	});

	$.ajax({
		url: '/api/freshFlowersSale.json',
		success: function(res) {
			var html = template('list', res);
			common.inner($('#index-scroll01'), html);
		}
	});

	$.ajax({
		url: '/api/freshFlowersPrice.json',
		success: function(res) {
			var html = template('list', res);
			common.inner($('#index-scroll02'), html);
		}
	});

	$.ajax({
		url: '/api/freshSort.json',
		success: function(res) {
			var html = template('list01', res);
			common.inner($('#index-scroll03'), html);
		}
	});

	window.onload = function() {
		var id1 = '#index-scroll';
		indexScrolls(id1);
		var id2 = '#index-scroll01';
		indexScrolls(id2);
		var id3 = '#index-scroll02';
		indexScrolls(id3);
		var id4 = '#index-scroll03';
		indexScrolls(id4);

		function indexScrolls(id) {
			var myScroll = new IScroll(id, {
				probeType: 3,
				mouseWheel: true
			});
			common.backTop(myScroll);
		}
		$('header ul').on('tap', 'li:last-child', function() {

			$('#nav2').toggle()
		})
		navload();

		function navload() {
			$('#nav2 ul li').eq(0).on('tap', function() {
				location.href = "./index.html"
			})
			$('#nav2 ul li').eq(1).on('tap', function() {

			})
			$('#nav2 ul li').eq(2).on('tap', function() {
				location.href = "./build/other/cart.html"
			})
			$('#nav2 ul li').eq(3).on('tap', function() {
				location.href = "./build/other/login.html"
			})
			$("header ul li").eq(0).on('tap', function() {
				history.back();
			})

		}

	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<!-- 头部 -->	<div id=\"nav1\">		<ul id=\"swiper-nav\">			<li class=\"active\">综合</li>			<li>销量</li>			<li>价格</li>			<li>鲜花分类</li>		</ul>	</div>	<section>		<div class=\"swiper-container\" id=\"index-swiper\">			<div class=\"swiper-wrapper\">				<div class=\"swiper-slide\">					<section id=\"index-scroll\"></section>				</div>				<div class=\"swiper-slide\">					<section id=\"index-scroll01\"></section>				</div>				<div class=\"swiper-slide\">					<section id=\"index-scroll02\"></section>				</div>				<div class=\"swiper-slide\">					<div id=\"index-scroll03\"></div>				</div>			</div>		</div>	</section></div><script id=\"list\" type=\"text/html\">	<ul>		{{each data as value i}}		<li><span><i><img src={{value.img}} alt=\"\"></i><b><em>{{value.title}}</em>{{value.des}}</b>    <p>{{value.price}}</p></span></li>		{{/each}}	</ul></script><script id=\"list01\" type=\"text/html\">	<ul>		{{each data as value i}}		<li>			<p>{{value.title}}</p>			<ul>				{{each value.sort as item i}}				<li><span>{{item}}</span></li>				{{/each}}			</ul>		</li>		{{/each}}	</ul></script>"

/***/ }
/******/ ]);