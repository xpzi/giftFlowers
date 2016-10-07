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
