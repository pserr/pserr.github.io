var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value



// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  // console.log(this.value);
  var newSpeed = ((this.value) * .1);
  var speedString = String(newSpeed);
  
  //reset animation variables
  var $c1 = $('.c1').css('animation', 'none');
  var animation  = 'stretch1 ' + speedString + 's ease alternate-reverse infinite';
  var $c2 = $('.c2').css('animation', 'none');
  var animation2  = 'stretch2 ' + speedString + 's ease alternate-reverse infinite';

  //reset animation variables
  setTimeout(function(){
    $c1.css('animation', animation);
    $c2.css('animation', animation2);
  });
}

slider2.oninput = function() {
  // console.log(this.value);
  var newSpeed = ((this.value) * .1);
  var speedString = String(newSpeed);
  
  //reset animation variables
  var $c3 = $('.c3').css('animation', 'none');
  var animation  = 'stretch3 ' + speedString + 's ease alternate-reverse infinite';
  var $c4 = $('.c4').css('animation', 'none');
  var animation2  = 'stretch4 ' + speedString + 's ease alternate-reverse infinite';

  //reset animation variables
  setTimeout(function(){
    $c3.css('animation', animation);
    $c4.css('animation', animation2);
  });
}

slider3.oninput = function() {
  // console.log(this.value);
  var newSpeed = ((this.value) * .1);
  var speedString = String(newSpeed);
  
  //reset animation variables
  var $c5 = $('.c5').css('animation', 'none');
  var animation  = 'stretch5 ' + speedString + 's ease alternate-reverse infinite';
  var $c6 = $('.c6').css('animation', 'none');
  var animation2  = 'stretch6 ' + speedString + 's ease alternate-reverse infinite';

  //reset animation variables
  setTimeout(function(){
    $c5.css('animation', animation);
    $c6.css('animation', animation2);
  });
}