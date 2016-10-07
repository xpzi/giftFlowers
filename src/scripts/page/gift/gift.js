var str = require('../../tpls/gift/gift.string');
$("body").prepend(str);


listload('/api/gift');

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

        if ($(this).text() == "北京") {
            listload('/api/list.php');
            $('.nav_bar ul').html('   <li><a href="http://baidu.com">热门  :</a></li>\
            <li><a href="#">好利来</a></li>\
            <li><a href="#">窝夫小子</a></li>\
            <li><a href="#">北京蛋糕导航></a></li>  ')


        } else {
            
            listload('/api/cake/shanghai.php');
            $('.nav_bar ul').html('  <li><a href="http://baidu.com">热门  :</a></li>\
            <li><a href="#">元祖</a></li>\
            <li><a href="#">窝夫小子</a></li>\
            <li><a href="#">上海蛋糕导航></a></li> ')

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
