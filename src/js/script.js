$(function() {

  $(".js-open-share").on("click", function(){
    if ( $(this).hasClass("navigation__item--share-open") ){
      $(this).removeClass("navigation__item--share-open");
    } else {
      $(this).addClass("navigation__item--share-open");
    }
  });

});
