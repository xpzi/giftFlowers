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

	 


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str=__webpack_require__(3);
	var common=__webpack_require__(4);

	common.renderBody($('body'),str);

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
	  location.href = './freshFlowers.html';
	});
	$('.no2').on('tap',function(){
	  location.href = './cake.html';
	});
	$('.no3').on('tap',function(){
	  location.href = './foreverFlowers.html';
	});
	$('.no4').on('tap',function(){
	  location.href = './gift.html';
	});
	$('.no5').on('tap',function(){
	  location.href = '';
	});

	      
	$(function(){
		var huaScroll = new IScroll('.container',{});
	    
		setTimeout(function(){
			huaScroll.refresh();		
		},500);
	      $('.button a').eq(2).on('tap', function(e) {
	            huaScroll.scrollTo(0, 0, 200);
	            e.preventDefalut;
	        })
	})  


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<div class=\"iscroll\">		<!-- header -->		<header>			<p class=\"logo\">			</p>			<ul class=\"icon\">				<li><span class=\"iconfont\">&#xe6fe;</span></li>				<li><span class=\"iconfont\">&#xe6af;</span></li>				<li><span class=\"iconfont\">&#xe736;</span></li>			</ul>		</header>		<section>			<!-- swiper  -->			<nav>				<div class=\"swiper-container swiper-container-horizontal\">					<div class=\"swiper-wrapper\">						<div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"重阳节\" src=\"http://img02.hua.com/banner/16_chongyangjie_banner_m.png\"></div>						<div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"天秤座\" src=\"http://img02.hua.com/banner/16_xingzuo_tcz_m.jpg\"></div>						<div class=\"swiper-slide swiper-slide-active gundimg\"><img alt=\"音乐旅行之藏路寻爱\" src=\"http://img02.hua.com/banner/16_music_banner_m.jpg\"></div>					</div>					<div class=\"swiper-pagination swiper-pagination-clickable\">					</div>				</div>			</nav>			<!-- 导航 -->			<div class=\"mainlist\">				<ul>					<li class=\"no1\">						<dl>							<dt><span class=\"icon_red\"><img src=\"http://m.hua.com/images/flower_1.png\" alt=\"鲜花\" width=\"25\" height=\"26\" /></span></dt>							<dd><span class=\"icon_list\">鲜花</span></dd>						</dl>					</li>					<li class=\"no2\">						<dl>							<dt><span class=\"icon_cake\"><img src=\"http://m.hua.com/images/cake_2.png\" alt=\"蛋糕\" width=\"25\" height=\"26\" /></span></dt>							<dd><span class=\"icon_list\">蛋糕</span></dd>						</dl>					</li>					<li class=\"no3\">						<dl>							<dt><span class=\"icon_flowersong\"><img src=\"http://m.hua.com/images/flowersong_1.png\" alt=\"永生花\" width=\"25\" height=\"26\" /></span></dt>							<dd><span class=\"icon_list\">永生花</span></dd>						</dl>					</li>					<li class=\"no4\">						<dl>							<dt><span class=\"icon_gifts\"><img src=\"http://m.hua.com/images/gifts_2.png\" alt=\"特色礼品\" width=\"25\" height=\"26\" /></span></dt>							<dd><span class=\"icon_list\">特色礼品</span></dd>						</dl>					</li>					<li class=\"no5\">						<dl>							<dt><span class=\"icon_Plant\"><img src=\"http://m.hua.com/images/Plant_2.png\" alt=\"更多分类\" width=\"25\" height=\"26\" /></span></dt>							<dd><span class=\"icon_list\">更多分类</span></dd>						</dl>					</li>				</ul>			</div>			<!-- (复用）空白   -->			<div class=\"white\"></div>			<!--   -->			<div class=\"flowernav\">				<ul>					<li class=\"item1\"><img alt=\"新品鲜花速递\" src=\"http://img02.hua.com/tuijian/xinpin01_m.png?2\"><i class=\"markup1\"><p class=\"p1 red\">新品鲜花速递</p><p class=\"p2\">新款驾到</p></i></li>					<li class=\"item2\"><img alt=\"蛋糕食代\" src=\"http://m.hua.com/images/xpsd_005.png\"><i class=\"markup1\"><p class=\"p1 pink\">蛋糕食代</p><p class=\"p2\">爱与美味共享</p></i></li>					<li class=\"item3\"><img alt=\"漫画选花\" src=\"http://m.hua.com/images/mhxh_001.png\"><i class=\"markup1\"><p class=\"p1 orange\">漫画选花</p><p class=\"p2\">浪漫以画代话</p></i></li>				</ul>			</div>			<div class=\"white\"></div>			<div class=\"libox\">				<ul class=\"flowerlist\">					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9010877.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9012011.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9010734.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9010947.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9010668.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/9012062.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>1					</li>					<li><img src=\"http://img01.hua.com/uploadpic/newpic/9010904.jpg_220x240.jpg\">						<p>鲜花/清风雅韵</p>						<span>￥159</span>					</li>				</ul>			</div>			<!-- 蛋糕 cake -->			<div class=\"white\"></div>			<section class=\"list cake\">				<h3><span>生日蛋糕</span> <a href=\"#\">更多&gt;</a></h3>				<div class=\"logolist\">					<div><a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_01.png\"/></a></div>					<ul>						<li> <a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_002.png\" alt=\"\" /><span>元祖蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_003.png\" alt=\"\" /><span>好利来蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://m.hua.com/images/home_xfxb_01.png	\" alt=\"\" /><span>幸福西饼蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_005.png\" alt=\"\" /><span>窝夫小子蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_006.png\" alt=\"\" /><span>米卡米卡蛋糕	</span></a></li>						<li> <a href=\"#\"><img src=\"http://img02.hua.com/m/cake2_11.png\" alt=\"\" /><span>Mcake蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://img02.hua.com/m/cake2_8.png\" alt=\"\" /><span>Vcake蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://img02.hua.com/m/cake2_9.png	\" alt=\"\" /><span>诺心蛋糕</span></a></li>						<li> <a href=\"#\"><img src=\"http://img02.hua.com/m/cake2_10.png\" alt=\"\" /><span>可颂坊蛋糕</span></a></li>					</ul>				</div>			</section>						<!-- gift礼品 -->			<div class=\"white\"></div>			<section class=\"list gift\">				<h3><span>特色礼品</span> <a href=\"#\">更多&gt;</a></h3>				<ul>					<li>						<a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_008.png\"/></a>						<h4>金箔花</h4>						<p>999金箔玫瑰</p>					</li>					<li>						<a href=\"#\"><img src=\"http://m.hua.com/images/home_nav_009.png\"/></a>						<h4>水晶钢琴</h4>						<p>送女友最佳礼物</p>					</li>					<li>						<a href=\"#\"><img src=\"http://img02.hua.com/tuijian/teselipin_3_m.png\"/></a>						<h4>永生花</h4>						<p>进口厄瓜多尔玫瑰</p>					</li>				</ul>			</section>						<!--uation 评价-->			<div class=\"white\"></div>			<section class=\"list uation\">				<h3><span>鲜花网最新评价</span> <a href=\"#\"></a></h3>				<ul>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/5302068.jpg_80x87.jpg\" alt=\"\" />						<div>							<h4>很满意</h4>							<div><i></i><span>781127377*</span></div>							<p>评价：女朋友收到鲜花很高兴，似乎比收到月饼更高兴！谢谢花礼网优质的鲜花，下次，买鲜花我还是找你！</p>						</div>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/5302068.jpg_80x87.jpg\" alt=\"\" />						<div>							<h4>很满意</h4>							<div><i></i><span>781127377*</span></div>							<p>评价：女朋友收到鲜花很高兴，似乎比收到月饼更高兴！谢谢花礼网优质的鲜花，下次，买鲜花我还是找你！</p>						</div>					</li>					<li>						<img src=\"http://img01.hua.com/uploadpic/newpic/5302068.jpg_80x87.jpg\" alt=\"\" />						<div>							<h4>很满意</h4>							<div><i></i><span>781127377*</span></div>							<p>评价：女朋友收到鲜花很高兴，似乎比收到月饼更高兴！谢谢花礼网优质的鲜花，下次，买鲜花我还是找你！</p>						</div>					</li>				</ul>				<a class=\"alluation\" href=\"#\">最近全部商品评价<span>181790</span>条 &gt;</a>			</section>						<!-- 资讯 News -->			<div class=\"white\"></div>			<section class=\"list news\">				<h3><span>鲜花资讯</span> <a href=\"#\"></a></h3>				<div class=\"news-list\">					<a href=\"#\">送女朋友鲜花，送花卡片写什么？</a>					<a href=\"#\">女孩都喜欢别人送鲜花吗？</a>					<a href=\"#\">鲜花枝数与其对应的含意</a>					<a href=\"#\">鲜花枝数与其对应的含意</a>					<a href=\"#\">通用送花祝福语-经典送花祝福语</a>				</div>			</section>						<!--business 业务 -->			<div class=\"white\"></div>			<section class=\"busin\">				<ul>					<li><img src=\"http://img02.hua.com/m/huayu_1.png\" alt=\"\" /><span>11年鲜花品牌</span></li>					<li><img src=\"http://m.hua.com/images/pp_2.png\" alt=\"\" /><span>行业认证龙头</span></li>					<li><img src=\"http://m.hua.com/images/pp_3.png\" alt=\"\" /><span>低价保证</span></li>					<li><img src=\"http://m.hua.com/images/pp_4.png\" alt=\"\" /><span>3小时送花</span></li>				</ul>				<a class=\"tel\" href=\"#\"><i></i>400-889-8188</a>			</section>					</section>			<footer>			<div class=\"button\">				<span><a href=\"#\">登录</a><a href=\"#\">注册</a></span>				<span><a href=\"#\">返回顶部</a></span>			</div>			<div class=\"link\">				<a href=\"#\">帮助</a><span>|</span>				<a href=\"#\">查单</a><span>|</span>				<a href=\"#\">在线补款</a><span>|</span>				<a href=\"#\">客服</a>			</div>			<div class=\"link\">				<a href=\"#\">花语大全</a><span>|</span>				<a href=\"#\">电脑版</a>			</div>						<p>领先的中国鲜花网品牌，鲜花速递专家！</p>			<p>© 花礼网(中国鲜花礼品网) m.hua.com</p>			<p>粤ICP备 09171662 号</p>		</footer>	</div></div>"

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
	  },

	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ }
/******/ ]);