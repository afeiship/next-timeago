var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-timeago');

var timeago=nx.timeago;

/**
 以下顺序选择显示规则：
 1、60秒内：刚刚；
 2、60分钟内：XX分钟前；
 3、今天：X小时前
 4、昨天：昨天 04:25
 5、今年内：1-22 02:23
 6、往年的：2010-1-22
 */
describe('timeago', function () {

  describe('以下顺序选择显示规则：', function () {
    it('1、60秒内：刚刚:', function () {
      var time_pub = '2017-03-16 12:58:51';
      var time_now = '2017-03-16 12:57:52';
      var result = timeago(time_pub,time_now);
      assert.equal('刚刚',result);
    });

    it('2、60分钟内：XX分钟前:', function () {
      var time_pub = '2017-03-16 11:58:51';
      var time_now = '2017-03-16 12:57:52';
      var result = timeago(time_pub,time_now);
      assert.equal('59分钟前',result);
    });

    it('3、今天：X小时前:', function () {
      var time_pub = '2017-03-16 11:58:51';
      var time_now = '2017-03-16 23:59:00';
      var result = timeago(time_pub,time_now);
      assert.equal('12小时前',result);
    });


    it('4、昨天：昨天 04:25:', function () {
      var time_pub = '2017-03-15 11:58:51';
      var time_now = '2017-03-16 23:59:00';
      var result = timeago(time_pub,time_now);
      assert.equal('昨天 11:58',result);
    });


    it('5、今年内：1-22 02:23:', function () {
      var time_pub = '2017-01-01 00:01:51';
      var time_now = '2017-03-16 23:59:00';
      var result = timeago(time_pub,time_now);
      assert.equal('01-01 00:01',result);
    });

    it('6、往年的：2010-1-22:', function () {
      var time_pub = '2010-01-01 00:01:51';
      var time_now = '2017-03-16 23:59:00';
      var result = timeago(time_pub,time_now);
      assert.equal('2010-01-01',result);
    });

  });

});
