window.onload=function(){

  var colors = ['#00ff00','#ffff00' ,'#2d42ff','#882dff'];
  var colors2 = ['#fff','#aaa', '#000'];

  var colorPicker = function(colors) {
    return colors[Math.floor(Math.random()*colors.length)];
  };

  var s = Snap("#svg");
  // s = Snap(500, 500);
  // var bigCircle = s.circle(150, 150, 100);
  // var bigCircle2 = s.circle(650,150, 100);
  // var bigCircle3 = s.circle(400,600, 100);


  Snap.load("../images/VM_Splash02.svg", function (f) {
    var vm404 = f.select('#vm404');
    var circle1 = f.select('#circle1');
    var circle2 = f.select('#circle2');
    var face = f.select('#face');
    var facePaths = f.selectAll('.facePath');

    circle1.animate({'fill': '#000'},0);
    face.animate({'fill': '#fff'},0);

    //var face2= f.select('#face2');

    // var facePaths = [];

    // x = 0;
    // while (x < 50) {
    //   facePaths.push()
    // }

    var animating = true;

    // animate all face children
    // function animOn() {
    //   if (animating) {
    //     face.animate({fill: colorPicker(colors)},200,  animOut);
    //     //face2.animate({fill: colorPicker(colors)},200,  animOut);
    //   }
    // }

    // function animOut() {
    //   // circle.animate({'stroke-width': '20'},100, animOn);
    //   face.animate({fill: '#000'},200,  animOn);
    //   //face2.animate({fill: '#000'},200,  animOn);
    // }

    //animate face children uniquely
    function animOn() {
      if (animating) {
        // circle.animate({'stroke-width': '100'},100, animOut);
        facePaths.forEach(function(el) {
          el.animate({fill: colorPicker(colors)},200, animOn);
          // el.animate({fill: colorPicker(colors)},1000, animOn);
        });
      }
    }

    // function animOut() {
    //   // circle.animate({'stroke-width': '20'},100, animOn);
    //   face.animate({fill: "#000"},100,  animOn);
    // }



    //no animation change face children uniquely
    // function animOn() {
    //   while (true) {
    //     // circle.animate({'stroke-width': '100'},100, animOut);
    //     facePaths.forEach(function(el) {
    //       el.attr('fill', colorPicker(colors));
    //       // el.animate({fill: colorPicker(colors)},1000, animOn);
    //     });

    //   }
    // }




    vm404.hover(function() {
      animating = true;
      animOn();

    }, function() {
        animating = false;

        facePaths.forEach(function(el) {
          el.animate({fill: colorPicker(colors2)},200);
        });

    });





    s.append( f ); // adds to document

  });

};


// SVG LOCAL LOAD ERROR: http://stackoverflow.com/questions/20107279/snap-load-local-svg-fails-to-load