// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    addElements();
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
    for (i = 0; i < 5; i++) {
        addElement();
    }
}


// function randomPosition () {
//     var left = Math.floor((Math.random() * 500) + 50);
//     var top = Math.floor((Math.random() * 500) + 50);;
//     $(".new").css("background-color", "yellow");
//     $(".new").css("left", left);
//     $(".new").css("top", top);
//     console.log ("yellow");
// }

function randomPosition(){
    $( ".new" ).each(function() {
        var left = Math.floor((Math.random() * 500) + 50);
        var top = Math.floor((Math.random() * 500) + 50);;
        console.log( "hello" );
        $(this).css("background-color", "yellow");
        $(this).css("left", left);
        $(this).css("top", top);
      });
};

function randomSize (){
    
}