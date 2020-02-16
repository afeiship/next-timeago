const nx = require('@feizheng/next-js-core2');
require('../src/next-timeago');

/**
 以下顺序选择显示规则：
 1、60秒内：刚刚；
 2、60分钟内：XX分钟前；
 3、今天：X小时前
 4、昨天：昨天 04:25
 5、今年内：1-22 02:23
 6、往年的：2010-1-22
 */

describe('api.basic test', () => {
  test('1、60秒内：刚刚:', function() {
    var time_pub = '2017-03-16 12:58:51';
    var time_now = '2017-03-16 12:57:52';
    var result = nx.timeago(time_pub, time_now);
    expect('刚刚').toBe(result);
  });

  test('2、60分钟内：XX分钟前:', function() {
    var time_pub = '2017-03-16 11:58:51';
    var time_now = '2017-03-16 12:57:52';
    var result = nx.timeago(time_pub, time_now);
    expect('59分钟前').toBe(result);
  });

  test('3、今天：X小时前:', function() {
    var time_pub = '2017-03-16 11:58:51';
    var time_now = '2017-03-16 23:59:00';
    var result = nx.timeago(time_pub, time_now);
    expect('12小时前').toBe(result);
  });

  test('4、昨天：昨天 04:25:', function() {
    var time_pub = '2017-03-15 11:58:51';
    var time_now = '2017-03-16 23:59:00';
    var result = nx.timeago(time_pub, time_now);
    expect('昨天 11:58').toBe(result);
  });

  test('5、今年内：1-22 02:23:', function() {
    var time_pub = '2017-01-01 00:01:51';
    var time_now = '2017-03-16 23:59:00';
    var result = nx.timeago(time_pub, time_now);
    expect('01-01 00:01').toBe(result);
  });

  test('6、往年的：2010-1-22:', function() {
    var time_pub = '2010-01-01 00:01:51';
    var time_now = '2017-03-16 23:59:00';
    var result = nx.timeago(time_pub, time_now);
    expect('2010-01-01').toBe(result);
  });
});
