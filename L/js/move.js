var timer = null;

function getStyle(obj, name) {
	if(obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, 'false')[name]
	}
};

function move(obj, json, bur, fn) {
	var count = Math.floor(bur / 30);
	var start = {};
	var dis = {};
	for(var name in json) {
		start[name] = parseFloat(getStyle(obj, name));
		dis[name] = json[name] - start[name];
	}
	var n = 0;
	obj.timer = setInterval(function() {
		n++;
		for(var name in json) {
			var cur = start[name] + n * dis[name] / count
			if(name == 'opacity') {
				obj.style.opacity = cur;
				obj.style.fillStyle = 'alpha(' + cur + ')'
			} else {
				obj.style[name] = cur + 'px';
			}
		}
		if(n == count) {
			clearInterval(obj.timer);
			fn && fn();
		}
	}, 30)
}