$(document).ready(function(){


  /////////////////////////////
  /////// START SVG CODE
  /////////////////////////////
  var colors = ['#00ff00','#ffff00' ,'#2d42ff','#882dff', '#ff006c'];

  var colorPicker = function(colors) {
    return colors[Math.floor(Math.random()*colors.length)];
  };

  var s = Snap("#svg");

  Snap.load("../images/VM_Splash02.svg", function (f) {
    var vm404 = f.select('#vm404');
    var circle1 = f.select('#circle1');
    var circle2 = f.select('#circle2');
    var face = f.select('#face');
    var facePaths = f.selectAll('.facePath');

    circle1.animate({'fill': '#000'},0);

    facePaths.forEach(function(el) {
      el.animate({fill: colorPicker(colors)},600);
    });

    //animate face children uniquely
    // function animate() {
    //   setTimeout(function() {
    //       facePaths.forEach(function(el) {
    //         el.animate({fill: colorPicker(colors)},1000);
    //       });
    //       requestAnimationFrame(animate);
    //   }, 500);
    // }
    // requestAnimationFrame(animate);

    var intervals = [];

    // global vars
    startAnim = function() {
      facePaths.forEach(function(el) {
        var time = 300+~~(1000*Math.random());
        intervals.push(setInterval(function(){
          el.animate({fill: colorPicker(colors)}, time);
        }, time - 100));
      });
    };
    stopAnim = function(){
      intervals.forEach(clearInterval);
    };

    startAnim();

    s.append( f ); // adds to document

    // SVG LOCAL LOAD ERROR: http://stackoverflow.com/questions/20107279/snap-load-local-svg-fails-to-load

  });

  /////////////////////////////
  /////// START JQ CODE
  /////////////////////////////

  var alerted = false;

  $('#svg').hover(
    function() {

      // console.log('in');
      if (alerted === false) {
        stopAnim();
        $('#background').show();
        $('#backgroundbackground').show();
        $('.play').show();
        $('#text').hide();
      }

    }, function() {

      // console.log('out');\
      if (alerted === false) {
        startAnim();
        $('#background').hide();
        $('#backgroundbackground').hide();
        $('.play').hide();
        $('#text').show();
      }
    }
  );

  $('.play').hover(
    function() {

      if (alerted === false) {
        stopAnim();
        $('#background').show();
        $('#backgroundbackground').show();
        $('.play').show();
        $('#text').hide();
      }
    }, function() {

      if (alerted === false) {
        startAnim();
        $('#background').hide();
        $('#backgroundbackground').hide();
        $('.play').hide();
        $('#text').show();
      }
    }
  );

  $('.alertLink').click(function() {
    alerted = true;
    $('.alert').css({'left': '50%', 'margin-left':'-250px','top':'300px'});
    $('.alert').show();
    $('#text').show();
    $('li').addClass('wiggler');
    $('li a').addClass('pulseText');
    $('nav').addClass('wiggler');
    $('#title').addClass('pulseText');
    $('#comingsoon').addClass('pulseText');
    $('#container').addClass('wiggler2');
    $('#background').addClass('wiggler');
  });

  $('.alertTopClose').click(function() {
    alerted = false;
    $('.alert').hide();

    $('li').removeClass('wiggler');
    $('li a').removeClass('pulseText');
    $('nav').removeClass('wiggler');
    $('#title').removeClass('pulseText');
    $('#comingsoon').removeClass('pulseText');
    $('#container').removeClass('wiggler2');
    $('#background').removeClass('wiggler');
  });

  $( ".alert" ).draggable();

});
