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

	module.exports = __webpack_require__(8);


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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(9);



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(10);
	//var footer = require('../tpls/footer.string');

	var common = __webpack_require__(4);
	var iscrollUtil = __webpack_require__(11);

	common.renderBody($('body'), str);
	//common.append($('.container'), footer);
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
	  url: '/api/foreverFlowers.json',
	  success: function (res) {
	    var strScrollTop = '<div><div class="head"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>下拉刷新...</span> \
	    </div>';

	    var strScrollBottom = '<div class="foot"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>上拉加载更多...</span> \
	    </div></div>';

	    var html = template('list', res);

	    html = strScrollTop + html + strScrollBottom;

	    common.inner($('#index-scroll'), html);
	  }
	});


	$.ajax({
	  url: '/api/freshFlowersSale.json',
	  success: function (res) {
	    var html = template('list', res);
	    common.inner($('#index-scroll01'),html);
	  }
	});

	$.ajax({
	  url: '/api/freshFlowersPrice.json',
	  success: function (res) {
	    var html = template('list', res);
	    common.inner($('#index-scroll02'),html);
	  }
	});

	$.ajax({
	  url: '/api/freshSort.json',
	  success: function (res) {
	    var html = template('list01', res);
	    common.inner($('#index-scroll03'),html);
	  }
	});




	window.onload = function () {
	  var id = '#index-scroll';
	  var head = $(id).find('.head img');
	  var foot = $(id).find('.foot img');

	  var myScroll = new IScroll(id, {
	    probeType: 3,
	    mouseWheel: true
	  });

	  var refreshAjax = function () {
	    $.ajax({
	      url: '/api/foreverFlowersRefresh.php',
	      success: function (res) {
	        var html = template('list', res);
	        var lis = $(html).unwrap().html();
	        $(id).find('ul').prepend(lis);
	        myScroll.scrollTo(0, -35);
	        head.removeClass('up');
	        head.attr('src', '/build/images/arrow.png');
	        myScroll.refresh();
	      }
	    });
	  };

	  var moreAjax = function () {
	    $.ajax({
	      url: '/api/foreverFlowersMore.php',
	      success: function (res) {
	        var html = template('list', res);
	        var lis = $(html).unwrap().html();
	        $(id).find('ul').append(lis);

	        myScroll.scrollTo(0, self.y + 35);
	        foot.removeClass('down');
	        foot.attr('src', '/build/images/arrow.png');
	        myScroll.refresh();
	      }
	    });
	  }

	  iscrollUtil({
	    myScroll: myScroll,
	    refreshAjax: refreshAjax,
	    moreAjax: moreAjax
	  });
	  
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
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <!-- 头部 -->	<header id=\"header\">		<ul>			<li><i class=\"iconfont\">&#xe679;</i> </li>			<li>鲜花列表</li> 			<li> <i class=\"iconfont\">&#xe7ad;</i> </li>		</ul>	</header>	<nav id=\"nav2\">		<ul>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6b8;</span><i>首页</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6fe;</span><i>分类搜索</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6af;</span><i>购物车</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe736;</span><i>我的</i></a></li>		</ul>	</nav>    <nav id=\"nav1\">        <ul id=\"swiper-nav\">            <li class=\"active\">综合</li>            <li>销量</li>            <li>价格</li>            <li>永生花分类</li>        </ul>    </nav>    <section>      <div class=\"swiper-container\" id=\"index-swiper\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide\">            <section id=\"index-scroll\"></section>          </div>          <div class=\"swiper-slide\">            <section id=\"index-scroll01\"></section>          </div>          <div class=\"swiper-slide\">            <section id=\"index-scroll02\"></section>          </div>          <div class=\"swiper-slide\">            <div id = \"index-scroll03\"></div>          </div>        </div>      </div>    </section></div><script id=\"list\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><span><i><img src={{value.img}} alt=\"\"></i><b><em>{{value.title}}</em>{{value.des}}</b>    <p>{{value.price}}</p></span></li>    {{/each}}  </ul></script><script id=\"list01\" type=\"text/html\">  <ul>    {{each data as value i}}    <li><p>{{value.title}}</p>      <ul>      {{each value.sort as item i}}        <li><span>{{item}}</span></li>      {{/each}}      </ul>    </li>    {{/each}}  </ul></script>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	module.exports = function (options) {
	  var defaultOpions = {
	    id: '#index-scroll'
	  };

	  var opt = $.extend({}, defaultOpions, options);

	  var myScroll = opt.myScroll;

	  myScroll.scrollBy(0, -35);

	  var $scroll = $(opt.id);
	  var head = $scroll.find('.head img'),
	  topImgHasClass = head.hasClass('up');
	  var foot = $scroll.find('.foot img'),
	  bottomImgHasClass = head.hasClass('down');

	  myScroll.on('scroll', function () {
	    var y = this.y,
	    maxY = this.maxScrollY - y;
	    if (y >= 0) {
	      !topImgHasClass && head.addClass('up');
	      return '';
	    }
	    if (maxY >= 0) {
	      !bottomImgHasClass && foot.addClass('down');
	      return '';
	    }
	  });

	  myScroll.on('scrollEnd', function () {
	    if (this.y >= -35 && this.y < 0) {
	      myScroll.scrollTo(0, -35);
	      head.removeClass('up');
	    } else if (this.y >= 0) {
	      head.attr('src', '/build/images/ajax-loader.gif');
	      // ajax下拉刷新数据
	      opt.refreshAjax();
	    }

	    var maxY = this.maxScrollY - this.y;
	    var self = this;
	    if (maxY > -35 && maxY < 0) {
	      myScroll.scrollTo(0, self.maxScrollY + 35);
	      foot.removeClass('down')
	    } else if (maxY >= 0) {
	      foot.attr('src', '/build/images/ajax-loader.gif');
	      //TODO ajax上拉加载数据
	      opt.moreAjax();
	    }
	  });}



/***/ }
/******/ ]);