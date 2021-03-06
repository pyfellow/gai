(function ($) {
  "use strict";

  /*------------------------------------
  	Sticky Menu 
  --------------------------------------*/
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 5) {
      stick.removeClass("sticky");
    } else {
      stick.addClass("sticky");
    }
  });
  /*------------------------------------
  	jQuery MeanMenu 
  --------------------------------------*/
  $('.main-menu nav').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
  });


  /* last  2 li child add class */
  $('ul.menu>li').slice(-2).addClass('last-elements');


})(jQuery);

// home slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// sign up form image function
(function () {
  var uploader = document.createElement('input'),
    image = document.getElementById('img-result');

  uploader.type = 'file';
  uploader.accept = 'image/*';

  image.onclick = function () {
    uploader.click();
  }

  uploader.onchange = function () {
    var reader = new FileReader();
    reader.onload = function (evt) {
      image.classList.remove('no-image');
      image.style.backgroundImage = 'url(' + evt.target.result + ')';
      var request = {
        itemtype: 'test 1',
        brand: 'test 2',
        images: [{
          data: evt.target.result
        }]
      };

      document.querySelector('.show-button').style.display = 'block';
      document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
    }
    reader.readAsDataURL(uploader.files[0]);
  }

  document.querySelector('.hide-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'none';
  };

  document.querySelector('.show-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'block';
  };
})();

//code for cover image preview
function previewImage(event) {

  var reader = new FileReader();
  var imageField = document.getElementById("cover-img")

  reader.onload = function () {

    if (reader.readyState == 2) {
      imageField.src = reader.result;
    }

  }

  reader.readAsDataURL(event.target.files[0]);

}