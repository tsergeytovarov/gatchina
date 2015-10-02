$(function() {

  $(".js-open-share").on("click", function(){
    if ( $(this).hasClass("navigation__item--share-open") ){
      $(this).removeClass("navigation__item--share-open");
    } else {
      $(this).addClass("navigation__item--share-open");
    }
  });

  $(".js-change-image").on("click", function(){
    $(this).parents(".time-screen").css("background-image", "url(img/" + $(this).attr("data-image") + ")");
  });

});
