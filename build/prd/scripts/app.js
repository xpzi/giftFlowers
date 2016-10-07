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

	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(3);
	 


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str=__webpack_require__(3);
	var common=__webpack_require__(4);

	common.renderBody($('body'),str);
	new IScroll('.container',{});

	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 3000,
	  pagination : '.swiper-pagination',
	  paginationClickable :true
	});


	$('.logo').on('tap',function(){
	  location.href = 'index.html';
	});
	$('.icon li:first-child').on('tap',function(){
	  location.href = '';
	});
	$('.icon li:nth-child(2)').on('tap',function(){
	  location.href = '';
	});
	$('.icon li:last-child').on('tap',function(){
	  location.href = '';
	});
	$('.no1').on('tap',function(){
	  location.href = '';
	});
	$('.no2').on('tap',function(){
	  location.href = '';
	});
	$('.no3').on('tap',function(){
	  location.href = '';
	});
	$('.no4').on('tap',function(){
	  location.href = '';
	});
	$('.no5').on('tap',function(){
	  location.href = '';
	});



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "  <div class=\"container\">    <div class=\"iscroll\">      <header>      <p class=\"logo\">      </p>      <ul class=\"icon\">        <li><span  class=\"iconfont\">&#xe6fe;</span></li>        <li><span  class=\"iconfont\">&#xe6af;</span></li>        <li><span  class=\"iconfont\">&#xe736;</span></li>      </ul>    </header>      <section>      <nav>        <div class=\"swiper-container swiper-container-horizontal\">            <div class=\"swiper-wrapper\">                <div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"重阳节\" src=\"http://img02.hua.com/banner/16_chongyangjie_banner_m.png\"></div>                <div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"天秤座\" src=\"http://img02.hua.com/banner/16_xingzuo_tcz_m.jpg\"></div>                <div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"音乐旅行之藏路寻爱\" src=\"http://img02.hua.com/banner/16_music_banner_m.jpg\"></div>            </div>            <div class=\"swiper-pagination swiper-pagination-clickable\">            </div>        </div>      </nav>      <div class=\"mainlist\">          <ul>              <li class=\"no1\">                  <dl>                      <dt><span class=\"icon_red\"><img src=\"/build/images/flower_1.png\" alt=\"鲜花\" width=\"25\" height=\"26\" /></span></dt>                      <dd><span class=\"icon_list\">鲜花</span></dd>                  </dl>              </li>              <li class=\"no2\">                  <dl>                      <dt><span class=\"icon_cake\"><img src=\"/build/images/cake_2.png\" alt=\"蛋糕\" width=\"25\" height=\"26\" /></span></dt>                      <dd><span class=\"icon_list\">蛋糕</span></dd>                  </dl>              </li>              <li class=\"no3\">                  <dl>                      <dt><span class=\"icon_flowersong\"><img src=\"/build/images/flowersong_1.png\" alt=\"永生花\" width=\"25\" height=\"26\" /></span></dt>                      <dd><span class=\"icon_list\">永生花</span></dd>                  </dl>              </li>              <li class=\"no4\">                  <dl>                      <dt><span class=\"icon_gifts\"><img src=\"/build/images/gifts_2.png\" alt=\"特色礼品\" width=\"25\" height=\"26\" /></span></dt>                      <dd><span class=\"icon_list\">特色礼品</span></dd>                  </dl>              </li>              <li class=\"no5\">                  <dl>                      <dt><span class=\"icon_Plant\"><img src=\"/build/images/Plant_2.png\" alt=\"更多分类\" width=\"25\" height=\"26\" /></span></dt>                      <dd><span class=\"icon_list\">更多分类</span></dd>                  </dl>              </li>          </ul>      </div>      <div class=\"white\"></div>      <div class=\"flowernav\">        <ul>            <li class=\"item1\"><img alt=\"新品鲜花速递\" src=\"http://img02.hua.com/tuijian/xinpin01_m.png?2\"><i class=\"markup1\"><p class=\"p1 red\">新品鲜花速递</p><p class=\"p2\">新款驾到</p></i></li>            <li class=\"item2\"><img alt=\"蛋糕食代\" src=\"http://m.hua.com/images/xpsd_005.png\"><i class=\"markup1\"><p class=\"p1 pink\">蛋糕食代</p><p class=\"p2\">爱与美味共享</p></i></li>            <li class=\"item3\"><img alt=\"漫画选花\" src=\"http://m.hua.com/images/mhxh_001.png\"><i class=\"markup1\"><p class=\"p1 orange\">漫画选花</p><p class=\"p2\">浪漫以画代话</p></i></li>        </ul>      </div>      <div class=\"white\"></div>      <div class=\"libox\">        <ul class=\"flowerlist\">          <li><img src=\"./images/01.jpg\"></li>          <li><img src=\"./images/02.jpg\"></li>          <li><img src=\"./images/03.jpg\"></li>          <li><img src=\"./images/04.jpg\"></li>          <li><img src=\"./images/05.jpg\"></li>          <li><img src=\"./images/06.jpg\"></li>          <li><img src=\"./images/07.jpg\"></li>          <li><img src=\"./images/08.jpg\"></li>        </ul>      </div>    </section>    </div>  </div>"

/***/ },
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
	  }
	};

	module.exports = common;



/***/ }
/******/ ]);