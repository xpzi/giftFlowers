var common = require('../../utils/common-util.js');
var comm = require('../../utils/common.util.js');
var html = require('../../tpls/other/detail.html');
var header = require('../../tpls/public/header.html');
var top = require('../../tpls/public/top.html');
var footer = require('../../tpls/public/footer.html');

$.ajax({
	url: '/api/spid/9012126.json',
	success: function(res) {
		common.randerBody(comm.compile(html, res));
		$('.container').prepend(comm.compile(header, {
			data: ['', '', res.name]
		}));
		$('body').append(top);
		$('footer').html(footer);
		callbackFunc(res);
	}
});

function callbackFunc(sp) {
	var sp = sp;

	var deScroll = new IScroll('.deScoll', {
		probeType: 3
	});
	comm.backTop(deScroll);

	$('img').on('load', function() {
		deScroll.refresh();
	});

	var picSwiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationType: 'custom',
		paginationCustomRender: function(swiper, current, total) {
			return current + '/' + total;
		}
	});

	//加入购物车直接 跳转到购物车 页面
	$('.addcart span').eq(1).on('tap', function() {
		common.addCart(sp);
		window.location.href = './cart.html';
	});

	//跳转到商品全部信息页面
	$('.details').on('tap', function() {
		window.location.href = $(this).attr('data-url');
	});
	$('#pictext>span').on('tap', function() {
		window.location.href = $(this).attr('data-url');
	});
	$('#show').on('tap', function() {
		window.location.href = $(this).attr('data-url');
	});
	$('#story').on('tap', function() {
		window.location.href = $(this).attr('data-url');
	});
	
	/* 那个啥  */
	comm.navload();
}