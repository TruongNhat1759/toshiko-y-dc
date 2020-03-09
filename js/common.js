$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.smoothScroll();
			this.toTop();
			this.Gnavi();
		},
		
		smoothScroll : function(){
			$('a[href^="#"]').click(function () {
        var vW = $(window).width();
				$('.menu-icon').removeClass('active');
        if(vW <= 640){
					$('#gnavi').fadeOut('fast');
					$('.over').removeClass('active');
					$('.submenu').stop().slideUp();
        }
				if ($($(this).attr('href')).length) {
					var p = $($(this).attr('href')).offset();
					if($(window).width() > 640){
						$('html,body').animate({
							scrollTop: p.top - 90
						}, 600);
					}else{
						$('html,body').animate({
							scrollTop: p.top - 65
						}, 600);
					}
				}
				return false;
			});
			$(window).load(function(){
				var hash1= location.hash;
				var $root = $('html, body');
				if(hash1!==""){  
					var top01 = $(hash1).offset().top;
					if($(window).width() > 640){   
						$root.animate({ scrollTop:top01 - 90 }, 600);
					}else{
						$root.animate({ scrollTop:top01 - 65}, 600);
					}
				}
			});
			
		},
		
		toTop : function(){
			$("#totop").hide();
			$(window).scroll(function () {
				var vW = $(window).width();
				if ($(this).scrollTop() > 100) {
					$('#totop').fadeIn();
					if(vW < 641){
						$('.f-call').addClass('show');
					}
					else {
						$('.f-call').removeClass('show');
					}
				} else {
					$('#totop').fadeOut();
					$('.f-call').removeClass('show');
				}
			});
		},
		
		Gnavi : function(){
			$('.over').mouseenter(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.submenu').stop().slideDown();
				}
			});
			$('.over').mouseleave(function(){
				if($(this).hasClass('flag')){
					return false;
				} else {
					$(this).find('.submenu').stop().slideUp();
				}
			});
			$('.over').click(function(){
				if($(this).hasClass('flag')){
					if($(this).hasClass('active')){
						$('.submenu').stop().slideUp();
						$(this).removeClass('active');
					} else {
						$('.over').removeClass('active');
						$('.submenu').stop().slideUp();
						$(this).addClass('active');
						$(this).find('.submenu').stop().slideToggle();
					}
				}
			});
			$('.menu-icon').click(function(){
				$(this).toggleClass('active');
				$('#gnavi').stop().fadeToggle('fast');
        $('.submenu').stop().slideUp();
        $('.over').removeClass('active');
			});
			$('.close-menu').click(function(){
				$('.menu-icon, .over').removeClass('active');
				$('.submenu').removeAttr('style');
				$('#gnavi').fadeOut('fast');
			});
			$(window).bind("load resize scroll", function() {
				var vW = $(window).width();
				if(vW > 640){
					$('.menu-icon').removeClass('active');
					$('#gnavi').removeAttr('style');
					$('.over').removeClass('flag active');
					$('.submenu').stop().slideUp();
				}
				else {
					$('.over').addClass('flag');
				}
				var Hhead = $('#header').outerHeight();
//				var Hhead = $('#main').offset().top - $('#gnavi').outerHeight();
				var top = $(this).scrollTop();
				var widthWin = $(window).width();
				if(widthWin > 640){
						if (top > Hhead) {
							$('#gnavi').addClass('fixed');
							$('#main').css('padding-top',$('#gnavi').outerHeight());
						}
						else {
							$('#gnavi').removeClass('fixed');
              $('#main').removeAttr('style');
						}
					}
					else {
						$('#gnavi').removeClass('fixed');
            $('#main').removeAttr('style');
					}
			
			});
			
		},
	
	};
	
	obj.init();
	
});