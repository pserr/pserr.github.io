let slider1 = document.getElementById("myRange1");
let slider2 = document.getElementById("myRange2");
let slider3 = document.getElementById("myRange3");
let slider4 = document.getElementById("myRange4");
let slider5 = document.getElementById("myRange5");
let slider6 = document.getElementById("myRange6");
let slider7 = document.getElementById("myRange7");

let fonts = ["times", "helvetica", "futura", "optima", "didot", "charter"];
let colors = ["blue", "red", "black", "orange", "green"];
let em = [];
let deco = [];
let background = ["#ffffb2", "#ffb5b2", "#ffffff", "#cbb2ff", "#b2e2ff"];




// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  var index = this.value;
  var bg_color = background[index];
  let wrapper = $(".wrapper");
  wrapper.css("background", "linear-gradient(#ffffff, " + bg_color + ")");
}

slider2.oninput = function() {
  var index = this.value;
  var new_font = fonts[index];
  let wrapper = $(".title");
  wrapper.css("font-family", new_font);
  }

slider3.oninput = function() {
  var index = this.value;
  var font_color = colors[index];
  let wrapper = $(".title");
  wrapper.css("color", font_color);

}

slider4.oninput = function() {

}

slider5.oninput = function() {

}

slider6.oninput = function() {

}

slider7.oninput = function() {

}