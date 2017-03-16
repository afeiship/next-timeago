# timeago
> A time ago implement.

## rules:
```conf
以下顺序选择显示规则：
1、60秒内：刚刚；
2、60分钟内：XX分钟前；
3、今天：X小时前
4、昨天：昨天 04:25
5、今年内：1-22 02:23
6、往年的：2010-1-22
```

## install:
```bash
npm install --save afeiship/timeago
```

## usage:
```javascript
var timeago = require('timeago');
var str = timeago('2017-03-15 13:10:45');
console.log(str);
```
