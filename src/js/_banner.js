;D(document).ready(function() {
  
  var winH = window.innerHeight;  
    
  D("#bangg").css('height',winH); 
  
  var $banner = D(".banner"),
      $slideBGs = D(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = D(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = D(".banner-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = D("<li class='banner-pagi__elem'></li>");
      $li.addClass("banner-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    D(".banner-control").removeClass("inactive");
    if (!curSlide) D(".banner-control.left").addClass("inactive");
    if (curSlide === numOfSlides) D(".banner-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $banner.addClass("animating");
      $banner.css("top");
      D(".slide").removeClass("active");
      D(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $banner.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    D(".banner-pagi__elem").removeClass("active");
    D(".banner-pagi__elem-"+curSlide).addClass("active");
    $banner.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  D("#bangg").on("mousedown touchstart", ".banner", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = D(window).width();
    diff = 0;
    
    D("#bangg").on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $banner.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  D("#bangg").on("mouseup touchend", function(e) {
    D("#bangg").off("mousemove touchmove");
    //  console.log(diffw)
    if (animating) return;
    if (!diff) {
      changeSlides(true);
     
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  D("#bangg").on("click", ".banner-control", function() {
    if (D(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  D("#bangg").on("click", ".banner-pagi__elem", function() {
    curSlide = D(this).data("page");
    changeSlides();
  });
  
});