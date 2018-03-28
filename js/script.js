$(function(){
  $('#midMenu > li > a').mouseenter(function(){
    $('#midHeader_wrap .midMenu_2depth_wrap').slideDown(200);
  });
  $('#midHeader_wrap').mouseleave(function(){
    $('#midHeader_wrap .midMenu_2depth_wrap').slideUp(200);
  });
  $('#mainVisual_wrap .visual_slider .slider').bxSlider({
    auto : true,
    speed : 500,
    pause : 4000,
    autoControls : true
  });
});
