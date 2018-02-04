// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    addElements();
    randomPosition();
    randomSize();
});


function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("I'll be your mirror"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //creates and adds a class
  $(newDiv).addClass("new");
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv);

}

function addElements () {
    for (i = 0; i < 10; i++) {
        addElement();
    }
}


function randomPosition(){
    $( ".new" ).each(function() {
        var h = $(window).height();
        var w = $(window).width();
        var right = Math.floor((Math.random() * (4 * w / 5)) + 10);
        var top = Math.floor((Math.random() * (2 * h / 3)) + 10);
        console.log( "hello" );
        $(this).css("right", right);
        $(this).css("top", top);
      });
};

function randomSize (){
    $( ".new" ).each(function() {
    var width = Math.floor((Math.random() * 500) + 200);
    var height = Math.floor((Math.random() * 500) + 200);
    $(this).css("width", width);
    $(this).css("height", height);
    });
}