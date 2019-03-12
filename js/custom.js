if ( typeof($('.product-stick').html()) !== "undefined") {
	$(window).scroll(function(){
		var sticky = $('.product-stick');
		var _top = $('.product-stick').position().top + $('.header-main').height();

		var scroll = $(window).scrollTop();

		if (scroll >= _top) {
			sticky.parent().addClass('navbar-fixed-top');
		}
		else {
			sticky.parent().removeClass('navbar-fixed-top');
		}
	});
}

$(document).ready(function(){
  $(".button_readmore").click(function(){
    $(".height").addClass("show");
	$(".button_readmore").hide();
  });
  $(".button_readmore_r").click(function(){
    $(".height_r").addClass("show");
	$(".button_readmore_r").hide();
  });
  $(".all-shop").click(function(){
    $(".lt-cua-hang>ul").addClass("show");
	$(".all-shop").hide();
  });
});



// Add active class to the current button (highlight it)
var header = document.getElementById("myid");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}


