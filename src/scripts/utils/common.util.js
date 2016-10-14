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
