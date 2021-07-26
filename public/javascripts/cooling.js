$('#multi-slider .carousel-item').each(function () {
  var next = $(this).next();

  for (var i = 0; i < 2; i++) {
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first').children(':first').clone().addClass('d-none d-md-block').appendTo($(this).children(':first'));

    next = next.next();
  }
});


$('.carousel-inner').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});





// tab 
$(".dropdown-menu li a").click(function () {

  $('.answer').css({ display: 'none' });
  $('.acc' + question).css({ display: 'block' })

});


$('#faq-questions').change(function () {
  var question = $(this).val();
  $('.answer').css({ display: 'none' });
  $('.answer-' + question).css({ display: 'block' });
});



(function ($) {
  $.fn.responsiveTabs = function () {
    this.addClass('responsive-tabs'),
      this.append($('<span class="dropdown-arrow"></span>')),

      this.on("click", "li >a.active, span.dropdown-arrow", function () {
        this.toggleClass('open');
      }.bind(this)), this.on("click", "li > a:not(.active)", function () {
        this.removeClass("open")
      }.bind(this));
  }
})(jQuery);

(function ($) {
  $.fn.NoresponsiveTabs = function () {
    this.removeClass('responsive-tabs'),
      ('.dropdown-arrow').remove(),
      this.removeClass('open')
  }
})(jQuery);


function screen_resize() {
  var w = parseInt(window.innerWidth);

  if (w <= 768) {
    //max-width 500px
    // actions here...
    $('.nav-tabs').responsiveTabs();
  } else {
    $('.nav-tabs').NoresponsiveTabs();
  }
}


// if window resize call responsive function
$(window).resize(function (e) {
  screen_resize();
});
// call responsive function on default :)
$(document).ready(function (e) {
  screen_resize();
});