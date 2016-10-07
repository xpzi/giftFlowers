var str = require('../../tpls/cake/cake.string');
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
