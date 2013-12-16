/*
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
 (function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=0;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);

var mainheight
$(function(){
	$("#mainC").resize(function(){
	mainheight=$('#mainC').height()+70;
	$('.navMenu').css('height',mainheight)})});
	//------main高初始化结束----------

$(document).ready(function(){
	mainheight=$('.mainC').height()+70;
	navheight=$('.navMenu').height();
	if(navheight>mainheight) {
		$('.mainC').css('height',navheight);
		$('.navMenu').css('height',navheight+70);
		}else{
			$('.navMenu').css('height',mainheight)};
  $("#ml").click(function(){
	$(this).hide();
	$(this).css('right','145px');
  $('.main').animate({width:'95%'});
 $("#mr").css('display','block');
 $("#mr").animate({right:'145px'});
  });

  $("#mr").click(function(){
	$(this).hide();
	$(this).css('right','28px');
  $('.main').animate({width:'83%'});
 $("#ml").css('display','block');
 $("#ml").animate({right:'28px'});
  });
});

	//------main高初始化结束----------
