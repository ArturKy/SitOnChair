
// znikanie i pojawianie się białego bloku

$(document).ready(function(){

  $(".top_graphics").mouseover(function(event){
    event.stopImmediatePropagation();
    $(this).find(".white_bg").fadeOut();
  });
  $(".top_graphics").mouseout(function(event){
    event.stopImmediatePropagation();
    $(this).find(".white_bg").fadeIn();
  });
});

// Slider w Jumbotronie
var $slides, index, max;
$(document).ready(function(){
  $slides = $(".slide")
  max = $slides.length;
  index = 0;

var switchSlide = function(slideNumber) {
  $slides.eq(index).toggleClass("hide");
  index++;
  if (index >= max) {index = 0};
  $slides.eq(index).toggleClass("hide");
};

setInterval(switchSlide, 2000);

});
