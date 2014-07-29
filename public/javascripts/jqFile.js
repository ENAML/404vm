$(document).ready(function(){

  // var numberOfClones = 500;
  // var el = $(".four04");
  // for (var i = 0; i < numberOfClones; i++){
  //   var newEl = el.clone();
  //   $("#background").append(newEl);
  // }


  $('#svg').hover(
    function() {
      running = false;
      console.log('in');
      $('#background').show();
      $('.email').show();
      $('#text').hide();
      // !function loop() {
      //   $('.four04').animate({backgroundColor: '#fff', color: '#000'},5);
      //   $('.four04').animate({backgroundColor: '#000', color: '#fff'},5, loop);
      // }();

    }, function() {
      running = true;
      console.log('out');
      $('#background').hide();
      $('.email').hide();
      $('#text').show();
    }
  );

  $('.email').hover(
    function() {
      running = false;
      $('#background').show();
      $('.email').show();
      $('#text').hide();
    }, function() {
      running = true;
      $('#background').hide();
      $('.email').hide();
      $('#text').show();
    }
  );
});