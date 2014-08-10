$(document).ready(function(){


  /////////////////////////////
  /////// START SVG CODE
  /////////////////////////////
  var colors = ['#00ff00','#ffff00' ,'#2d42ff','#882dff', '#fff', '#ff0000'];

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

  $('#svg').hover(
    function() {
      stopAnim();
      // console.log('in');
      $('#background').show();
      $('.play').show();
      $('#text').hide();

    }, function() {
      startAnim();
      // console.log('out');
      $('#background').hide();
      $('.play').hide();
      $('#text').show();
    }
  );

  $('.play').hover(
    function() {
      stopAnim();
      $('#background').show();
      $('.play').show();
      $('#text').hide();
    }, function() {
      startAnim();
      $('#background').hide();
      $('.play').hide();
      $('#text').show();
    }
  );

  $('#alertLink').click(function() {
    $('.alert').css({'left': '50%', 'margin-left':'-250px','top':'300px'});
    $('.alert').show('fast');

    $('li').addClass('wiggler');
    $('nav').addClass('wiggler');
    $('#title').addClass('wiggler');
    $('#comingsoon').addClass('wiggler');
    $('#container').addClass('wiggler');
  });

  $('.alertTopText').click(function() {
    $('.alert').hide('fast');
  });

  $( ".alert" ).draggable();

});
