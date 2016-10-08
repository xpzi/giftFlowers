var str = require('../tpls/flower/foreverFlowers.string');
//var footer = require('../tpls/footer.string');

var common = require('../utils/common.util.js');
var iscrollUtil = require('../utils/iscroll.util.js');

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
    mouseWheel: true,
    click:true
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
      	console.log( 123466 );
        var html = template('list', res);
        var lis = $(html).unwrap().html();
        $(id).find('ul').append(lis);
        foot.removeClass('down');
        foot.attr('src', '/build/images/arrow.png');
        myScroll.refresh();
//      myScroll.scrollTo(0, self.y + 35);
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
