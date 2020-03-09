// JavaScript Document
$(function(){
	"use strict";
	var obj = {
		init : function(){
			this.slider();
			this.OnotesIDX();
		},
		
		slider : function(){
      new WOW().init();
			$('.idx-slide').slick({
				dots: false,
				autoplay: true,
				arrows: false,
				slidesToShow: 1,
        slidesToScroll: 1,
				pauseOnHover: false,
				autoplaySpeed: 5000,
				infinite: true,
				speed: 800,
				touchMove: true,
        variableWidth:true,
        centerMode:true,
        responsive: [{
        breakpoint: 641,
        settings: {
          variableWidth:false,
          centerMode:false
        }
        }]
			});
		},
    
		OnotesIDX : function() {
			$.ajax({
				'url': 'blog/_custom/',
				'dataType': 'jsonp',
				'success': function (json) {
					$.each(json.data, function (i, val) {
						var $li = $('<li/>').html(
              '<span class="cat-name cat'+ val.category_id +'">'+ val.category_name +'</span><span class="date">'+ val.date +'</span><span class="ttl"><a href="blog/' + val.url + '">'+ val.title +'</a></span>'
						);
						$li.appendTo('.b02-list');
						
					});
          $('.b02-box').mCustomScrollbar({
            theme:"dark"
          });
				}
			});
		},
		
		
	};
	
	obj.init();
	
});