// JavaScript Document





//To top button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("totopBtn").style.display = "block";
    } else {
        document.getElementById("totopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	$("html, body").animate({ scrollTop: "0px" }, 800, 'swing');
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}



					  


//on scroll animation 
$(document).ready(function(){
	console.log("loaded");
	activateAnimations();
		
	$(window).scroll(function() {
		activateAnimations();
	});

})

function activateAnimations(){
	// apply effects and animations
	console.log($(this).scrollTop());
	$(window).scroll(check_if_in_view('.infinate-bounce', 'infinate bounce'));
	$(window).scroll(check_if_in_view('#animation3', 'slideInLeft'));
	$(window).scroll(check_if_in_view('#animation2', 'slideInLeft'));
	$(window).scroll(check_if_in_view('#animation2-2', 'slideInRight'));
	$(window).scroll(check_if_in_view('#whyHireMe2', 'slideInLeft', 200));
	$(window).scroll(check_if_in_view('#contactForm', 'slideInRight', 200));
	$(window).scroll(check_if_in_view('#jobs', 'bounceInUp', 200));
	$(window).scroll(check_if_in_view('#stats1', 'slideInRight',200));
	$(window).scroll(check_if_in_view('#stats2', 'slideInLeft',200));
	$(window).scroll(check_if_in_view('#stats3', 'slideInRight', 200));
	$(window).scroll(check_if_in_view('#stats4', 'slideInLeft', 200));
}

 
  
 function check_if_in_view(elements, class_to_add, offset=0) {
	 var win  = $(window);
	 var skills = $(elements);
	 
  var window_height = win.height();
  var window_top_position = win.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each(skills, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top + offset;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
		$element.removeClass('hider');
      	$element.addClass(class_to_add);
		
    }
  });
}



		  