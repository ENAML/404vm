window.onload=function(){

  var colors = ['#00ff00','#ffff00' ,'#2d42ff','#882dff', '#fff', '#ff0000'];
  // var colors2 = ['#fff','#aaa', '#000'];

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

    var startAnim = function() {
      facePaths.forEach(function(el) {
        var time = 500+~~(1000*Math.random());
        intervals.push(setInterval(function(){
          el.animate({fill: colorPicker(colors)}, time);
        }, time - 200));
      });
    };

    stopAnim = function(){
      intervals.forEach(clearInterval);
    };

    startAnim();


    s.append( f ); // adds to document

  });

};


// SVG LOCAL LOAD ERROR: http://stackoverflow.com/questions/20107279/snap-load-local-svg-fails-to-load