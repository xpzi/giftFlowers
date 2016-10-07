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

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(6);



/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(7);
	$("body").prepend(str);



	 if(localStorage.getItem('city')){
	          $('.citys h3').html(localStorage.getItem('city'));
	          $('#header ul li span').html(localStorage.getItem('city')+ '<i></i> ')
	        if (localStorage.getItem('city')== "北京") {
	            listload('/api/list.php');
	            $('.nav_bar ul').html(  '   <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">好利来</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">北京蛋糕导航></a></li>  ')


	        } else {

	            listload('/api/cake/shanghai.php');
	            $('.nav_bar ul').html(  '  <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">元祖</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">上海蛋糕导航></a></li> ')

	        }

	    }else{
	        listload('/api/list.php');
	    }

	function listload(url) {
	    $.ajax({
	        url: url,
	        success: function(data) {
	            for (var i = 0; i < data.length; i++) {
	                $('.dgbox>li').eq(i).html(template('test' + i, data[i]));
	               

	            }
	            
	                   
	                
	                    
	                
	            
	            
	        },
	        error: function(data) {
	            console.log("ajax错误")
	        },
	        dataType: 'json'
	    })
	}







	window.onload = function() {
	    //保存地点信息
	   
	    var myScroll = new IScroll('#wrapper', {
	        scrollbars: true,
	        fadeScrollbars: true,
	        shrinkScrollbars: 'scale',
	        click: true,
	        probeType: 3
	    });
	    //回到顶部显示的距离
	    myScroll.on('scroll', function() {
	            if (myScroll.y < -500) {
	                $('.totop').show()

	            } else {
	                $('.totop').hide()
	            }
	        })
	        //顶部导航栏
	    $('#header ul').on('tap', 'li:last-child', function() {

	            $('nav').toggle()
	        })
	        //回到顶部
	    $('.totop a').on('tap', function(e) {
	            myScroll.scrollTo(0, 0, 200);
	            e.preventDefalut;
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
	        $('#header ul li span').html($(this).html() + '<i></i> ')
	        $('.close').trigger('tap')
	        localStorage.setItem("city",$(this).text())
	        if ($(this).text() == "北京") {
	            listload('/api/list.php');
	            $('.nav_bar ul').html(  '   <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">好利来</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">北京蛋糕导航></a></li>  ')
	            setTimeout(function(){
	                     myScroll.refresh();
	                   },1000)


	        } else {

	            listload('/api/cake/shanghai.php');
	            $('.nav_bar ul').html(  '  <li><a href="http://baidu.com">热门  :</a></li>\
	            <li><a href="#">元祖</a></li>\
	            <li><a href="#">窝夫小子</a></li>\
	            <li><a href="#">上海蛋糕导航></a></li> ')
	            setTimeout(function(){
	                     myScroll.refresh();
	                   },1000)

	        }

	        /*$('.title span:nth-child(1)').html($(this).html())*/


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


	    /*   var data = {
	    name: '好利来',
	    src:["http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg","http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg"],
	    price:["好利来 甄爱礼盒(6寸)<i>￥239</i>","好利来 甄爱礼盒(6寸)<i>￥289</i>"]

	};*/



	    /*var html1 = template('test1', data[1]);
	    $('.dgbox>li').eq(1).html(html1)*/
	    /*var html = template('test2', data[2]);
	    $('.dgbox li').eq(0).html(html)*/


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



/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">	<!-- 头部 -->	<div id=\"wrapper\">		<div id=\"iscroll\">				<header id=\"header\">		<ul>			<li><i class=\"iconfont\">&#xe679;</i> </li>			<li>送至:</li>			<li>			<span>北京 <i></i> </span>			</li>			<li>蛋糕</li>			<li> <i class=\"iconfont\">&#xe7ad;</i> </li>		</ul>	</header>	<nav>		<ul>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6b8;</span><i>首页</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6fe;</span><i>分类搜索</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe6af;</span><i>购物车</i></a></li>			<li><a href=\"#\"><span class=\"iconfont\">&#xe736;</span><i>我的</i></a></li>		</ul>	</nav>	<section class=\"nav_bar\">		<ul>			<li><a href=\"http://baidu.com\">热门  :</a></li>			<li><a href=\"#\">好利来</a></li>			<li><a href=\"#\">窝夫小子</a></li>			<li><a href=\"#\">北京蛋糕导航></a></li> 		</ul>			</section>	<section class=\"spbox\">		<ul class=\"dgbox\">			<li>				<!-- <div class=\"title\">可送<span>北京</span>的<span>好利来</span>蛋糕：</div>				<ol>					<li>					<a href=\"#\">					<img src=\"http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg\" alt=\"\">					<span>好利来 甄爱礼盒(6寸)<i>￥239</i></span>					</a>									</li>									<li>					<a href=\"#\">					<img src=\"http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg\" alt=\"\">					<span>好利来 甄爱礼盒(6寸)<i>￥239</i></span>					</a>									</li>				</ol> -->				<script id=\"test0\" type=\"text/html\">				<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				   				</ol>				</script>			</li>			<li>				<!-- <div class=\"title\">可送<span>北京</span>的<span>好利来</span>蛋糕：</div>				<ol>					<li>					<a href=\"#\">					<img src=\"http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg\" alt=\"\">					<span>好利来 甄爱礼盒(6寸)<i>￥239</i></span>					</a>									</li>					<li>					<a href=\"#\">					<img src=\"http://img01.hua.com/uploadpic/newpic/5201103.jpg_220x240.jpg\" alt=\"\">					<span>好利来 甄爱礼盒(6寸)<i>￥239</i></span>					</a>									</li>				</ol> -->					<script id=\"test1\" type=\"text/html\">				<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				   				</ol>					<a class=\"loadmore\">加载更多<span></span></a>				</script>			</li>			<li>					<script id=\"test2\" type=\"text/html\">				<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				    <a class=\"loadmore\">加载更多<span></span></a>				   				</ol>				</script>			</li>						<li>					<script id=\"test3\" type=\"text/html\">				<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				    <a class=\"loadmore\">加载更多<span></span></a>				   				</ol>				</script>			</li>						<li>								<script id=\"test4\" type=\"text/html\">				<div class=\"title\">可送<span>{{city}}</span>的<span>{{name}}</span>蛋糕：</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				    <a class=\"loadmore\">加载更多<span></span></a>				   				</ol>				</script>			</li>						<li>					<script id=\"test5\" type=\"text/html\">				<div class=\"title\">全国配送蛋糕（可送<span>{{city}}</span>地区）</div>				<ol>									    {{each src as value i}}				   				        				        <li><a href=\"#\"><img src={{value}}><span>{{#price[i]}}</span></a></li>				         				    {{/each}}				    <a class=\"loadmore\">加载更多<span></span></a>				   				</ol>				</script>			</li>						<div class=\"footerlist\">				<div class=\"title\">生日蛋糕-蛋糕常识</div>				<ol>					<li>					<a href=\"#\">					蛋糕的分类,做法和保存					</a>					</li>					<li>					<a href=\"#\">				九种蛋糕的做法					</a>					</li>					<li>					<a href=\"#\">					美味蛋糕新做法					</a>					</li>					<li>					<a href=\"#\">					选择婚礼蛋糕有学问					</a>					</li>					<li>					<a href=\"#\">					生活常识：巧切蛋糕					</a>					</li>					<li>					<a href=\"#\">					DIY蛋糕方法					</a>					</li>									</ol>			</div>					</ul>			</section>	<footer>		<div class=\"btns\">			<a href=\"#\">登录</a>			<a href=\"#\">注册</a>					</div>		<div class=\"footer_menu\">		<ul>			<li><a href=\"#\">帮助</a></li>			<li><a href=\"#\">查单</a></li>			<li><a href=\"#\">在线补款</a></li>			<li><a href=\"#\">客服</a></li>			<li><a href=\"#\">花语大全</a></li>			<li><a href=\"#\">电脑版</a></li>		</ul>		</div>		<p>© 花礼网(中国鲜花礼品网) m.hua.com</p>	</footer>		</div></div>	<div class=\"totop\"><a></a></div></div><div class=\"citys\">	<div class=\"city_menu\">		<a class=\"close\">×</a>		<div class=\"title\">请选择蛋糕配送城市</div>		<h4>您当前配送的城市:</h4>		<h3>北京</h3>		<h4>可选城市</h4>		<div class=\"list\">		<ul>			<li>北京</li>			<li>上海</li>			<li>广州</li>			<li>深圳</li>			<li>天津</li>			<li>重庆</li>			<li>成都</li>			<li>西安</li>			<li>杭州</li>			<li>南京</li>			<li>苏州</li>			<li>武汉</li>			<li>沈阳</li>			<li>大连</li>			<li>哈尔滨</li>			<li>长春</li>			<li>济南</li>			<li>青岛</li>			<li>石家庄</li>			<li>长沙</li>		</ul>		</div>	</div>	</div>"

/***/ }
/******/ ]);