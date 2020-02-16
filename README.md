# next-timeago
> A time ago implement.

## installation
```bash
npm install -S @feizheng/next-timeago
```

## rules
~~~
以下顺序选择显示规则：
1、60秒内：刚刚；
2、60分钟内：XX分钟前；
3、今天：X小时前
4、昨天：昨天 04:25
5、今年内：1-22 02:23
6、往年的：2010-1-22
~~~

## usage
```js
import '@feizheng/next-timeago';

const str = nx.timeago('2017-03-15 13:10:45');
console.log(str);
```
