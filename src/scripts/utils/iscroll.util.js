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
