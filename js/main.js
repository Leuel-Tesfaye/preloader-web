
  // page loading
  $(document).ready(function() {
    anime({
      targets: '.art-preloader .art-preloader-content',
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: 'linear',
      complete: function(anim) {

      }
    });
    anime({
      targets: '.art-preloader',
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: 'linear',
      complete: function(anim) {
        $('.art-preloader').css('display', 'none');
      }
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  bar.animate(1);

  // counters
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.art-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function(anim) {
      $('.art-counter').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  