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

	module.exports = __webpack_require__(12);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
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

	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(13);




/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(14);

	var common = __webpack_require__(4);

	common.renderBody($('body'), str);
	common.switchPage(0);

	// swiper 定义
	var mySwiper = new Swiper('#index-swiper', {
	  onSlideChangeEnd: function(swiper){
	    $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
	  }
	});
	$('#swiper-nav li').on('tap', function () {
	  mySwiper.slideTo($(this).index());
	  $(this).addClass('active').siblings().removeClass('active');
	});



	$.ajax({
	  url: '/api/freshFlowers.php',
	  success: function (res) {
	    var html = template('list', res);
	    common.inner($('#index-scroll'), html);
	  }
	});

	$.ajax({
	  url: '/api/freshFlowersSale.php',
	  success: function (res) {
	    var html = template('list', res);
	    common.inner($('#index-scroll01'),html);
	  }
	});

	$.ajax({
	  url: '/api/freshFlowersPrice.php',
	  success: function (res) {
	    var html = template('list', res);
	    common.inner($('#index-scroll02'),html);
	  }
	});

	$.ajax({
	  url: '/api/freshSort.php',
	  success: function (res) {
	    var html = template('list01', res);
	    common.inner($('#index-scroll03'),html);
	  }
	});





	window.onload = function () {
	  var id1 = '#index-scroll';
	  indexScrolls(id1);
	  var id2 = '#index-scroll01';
	  indexScrolls(id2);
	  var id3 = '#index-scroll02';
	  indexScrolls(id3);
	  var id4 = '#index-scroll03';
	  indexScrolls(id4);

	  

	  function indexScrolls(id){
	    var myScroll = new IScroll(id, {
	    probeType: 3,
	    mouseWheel: true
	  });
	  }
	  $('header ul').on('tap', 'li:last-child', function() {

	            $('#nav2').toggle()
	        })
	  navload();
	    function navload(){
	            $('#nav2 ul li').eq(0).on('tap',function(){
	        location.href="./index.html"
	    })
	     $('#nav2 ul li').eq(1).on('tap',function(){
	       
	    
	    })
	 $('#nav2 ul li').eq(2).on('tap',function(){
	        location.href="./build/other/cart.html"
	    })
	  $('#nav2 ul li').eq(3).on('tap',function(){
	        location.href="./build/other/login.html"
	    })
	    $("header ul li").eq(0).on('tap',function(){
	        history.back();
	    })

	    }
	  
	  
	  
	  
	  
	};




/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <!-- 头部 -->	<header id=\"header\">		<ul>			<li><i class=\"iconfont\">&#xe679;</i> </li>			<li>鲜花列表</li> 			<li> <i class=\"iconfont\">&#xe7ad;</i> </li>		</ul>	</header>	<nav id=\"nav2\">		<ul>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6b8;</span><i>首页</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6fe;</span><i>分类搜索</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6af;</span><i>购物车</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe736;</span><i>我的</i></a></li>		</ul>	</nav>    <nav id=\"nav1\">        <ul id=\"swiper-nav\">            <li class=\"active\">综合</li>            <li>销量</li>            <li>价格</li>            <li>鲜花分类</li>        </ul>          </nav>    <section>      <div class=\"swiper-container\" id=\"index-swiper\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide\">            <section id=\"index-scroll\"></section>          </div>          <div class=\"swiper-slide\">            <section id=\"index-scroll01\"></section>          </div>          <div class=\"swiper-slide\">            <section id=\"index-scroll02\"></section>          </div>          <div class=\"swiper-slide\">            <div id = \"index-scroll03\"></div>          </div>        </div>      </div>    </section></div><script id=\"list\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><span><i><img src={{value.img}} alt=\"\"></i><b><em>{{value.title}}</em>{{value.des}}</b>    <p>{{value.price}}</p></span></li>    {{/each}}  </ul></script><script id=\"list01\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><p>{{value.title}}</p>      <ul>      {{each value.sort as item i}}        <li><span>{{item}}</span></li>      {{/each}}      </ul>    </li>    {{/each}}  </ul></script>"

/***/ }
/******/ ]);