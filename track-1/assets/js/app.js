// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    addElement();
    randomPosition();
});


function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  //creates and adds a class
  $(newDiv).addClass("new");
  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv);

}

function addElements () {
    
}


function randomPosition () {
    var left = Math.floor((Math.random() * 500) + 50);
    var top = Math.floor((Math.random() * 500) + 50);;
    $(".new").css("background-color", "yellow");
    $(".new").css("left", left);
    $(".new").css("top", top);
    console.log ("yellow");
}
