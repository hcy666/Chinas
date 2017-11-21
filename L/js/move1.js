/**
 * Created by ZhaoShuai on 2017/11/17.
 * WeChat && QQ 1812532016
 */
function getStyle(obj, name) {
   if (obj.currentStyle) {
      return obj.currentStyle[name];
   } else {
      return getComputedStyle(obj, 'false')[name];
   }
}
function move(obj, json, dur, fn) {
   clearInterval(obj.timer);
   var count = Math.floor(dur / 30);//总次数;
   var start = {};//{width: 50, height: 50}
   var dis = {};//{width: 300, height: 300}
   for(var name in json){
      start[name] = parseFloat(getStyle(obj, name));
      dis[name] = json[name] - start[name];
   }
   var n = 0;//当前走了多少次;
   obj.timer = setInterval(function () {
      n++;
      for(var name in json){
         var cur = start[name] + n * dis[name] / count;
         if (name == 'opacity') {
            obj.style.opacity = cur;
            obj.style.filter ='alpha('+cur*100+')';
         } else {
            obj.style[name] = cur + 'px';
         }
      }
      if (n == count) {
         clearInterval(obj.timer);
         fn && fn();
      }
   }, 30);
}