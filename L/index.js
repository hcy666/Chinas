
window.onload = function(){
	var otxt=document.getElementById('text-lsb');
	var aop=document.getElementById('button-lsb');
	var aop2=document.getElementById('button2-lsb');
	var oimg=document.getElementsByClassName('img')
    var ool=document.getElementById('ol-lsb')
    var aol=ool.children


for(var i=0;i<oimg.length;i++){
	 oimg[i].index=i
	 aol[i].onclick=function(){
	 	inow=this.index
	 	tab()
	 }
}

function tab(){
	for(k=0;k<oimg.length;k++){
	 		aol[k].className=""
	 		move(oimg[k],{opacity:0},500)
	 	}
	 	aol[inow].className="active"
	 	move(oimg[inow],{opacity:1},500)
}
	aop.onclick=function(){
		move(otxt,{bottom:-340},500)
		aop2.style.display="block"
		aop.style.display="none"
	}
	aop2.onclick=function(){
		move(otxt,{bottom:0},500)
		aop.style.display="block"
		aop2.style.display="none"
	}
	
}
var oa=document.getElementsByClassName('luyou_lsb')
var myapp = angular.module("myapp", ["ngRoute"])
		myapp.controller("cont", ["$scope", function($a) {

		}])
		myapp.config(["$routeProvider", function($a) {
			$a.when("/a", {
				templateUrl: "a.html"
			}).when("/b", {
				templateUrl: "b.html"
			}).when("/c", {
				templateUrl: "c.html"
			}).when("/d", {
				templateUrl: "d.html"
			}).otherwise({
				redirectTo: "/a"
			})

		}])
		for(var i=0;i<oa.length;i++){
			$(".luyou_lsb").eq(i).click(function(){
			$(this).css("background","orangered").siblings().css("background","gray")
		}) 

		}
		
