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

  $(".js-scroll").on("click", function(event){
    event.preventDefault;
    var section = $(this).attr("data-scroll");
    $('html, body').animate({
        scrollTop: $("." + section).offset().top
    }, 1000);
    $(".navigation__link").removeClass("navigation__link--active");
    $(this).addClass("navigation__link--active");
  });

  //обработка картинок
  $(".photo-carousel__preview").on('click', function(){
    var this_number = $(this).attr("data-image");
    var this_photo = "photo-carousel__preview--" + this_number;
    var father = $(this).parents(".photo-carousel");
    father.find(".photo-carousel__active").removeClass("photo-carousel__active").addClass("photo-carousel__preview").addClass(this_photo).attr("data-image", this_number);
    $(this).removeClass("photo-carousel__preview").removeClass(this_photo).addClass("photo-carousel__active").attr("data-image", "0");

  });

});
