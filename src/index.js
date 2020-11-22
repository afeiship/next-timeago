(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.timeago = function (inValue, inNow) {
    if (inValue) {
      var now = inNow ? new Date(inNow) : new Date();
      var publish = new Date(String(inValue).replace(/-/g, '/'));
      var dayTs = 24 * 60 * 60 * 1000;
      var nowTs = now.getTime();
      var publishTs = publish.getTime();
      var isToday = publish.getDate() == now.getDate();
      var isYesterday = new Date(nowTs - dayTs).getDate() == publish.getDate();
      var isMonth = publish.getMonth() == now.getMonth();
      var isYear = publish.getYear() == now.getYear();
      var diff_s = (nowTs - publishTs) / 1000;
      var diff_m = diff_s / 60;
      var diff_h = diff_m / 60;

      switch (true) {
        case diff_s < 60:
          return '刚刚';
        case diff_m < 60:
          return Math.floor(diff_m) + '分钟前';
        case isToday && diff_h < 24:
          return Math.floor(diff_h) + '小时前';
        case isYear && isMonth && isYesterday:
          return '昨天 ' + inValue.slice(11, -3);
        case isYear:
          return inValue.slice(-14, -3);
        default:
          return inValue.slice(0, 10);
      }
    }
    return inValue;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.timeago;
  }
})();
