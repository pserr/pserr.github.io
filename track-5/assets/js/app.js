let audio = $('#fakeLove');

// console.log(audio);
// console.log(audio[0].playbackRate);

function setPlaySpeed() { 
  // if audio has a class of slow -- play speed is normal
  // else play speed is 0.7, add class slow
  if (audio.hasClass("slow")) {
    audio[0].playbackRate=1;
    audio.removeClass("slow");
    $("body").removeClass("white");
    $("body").addClass("black");
  } else {
  audio[0].playbackRate = 0.6;
  $("body").removeClass("black");
  $("body").addClass("white");
  audio.addClass("slow");
  }
}

$(document).on("click", setPlaySpeed);
$(document).on("click", changeSvg);

function changeSvg() {
  var $paths = $(".fake");
  if ($paths.hasClass("on")) {
    $paths.addClass("off");
    $paths.removeClass("on");
  } else if ($paths.hasClass("off")){
    $paths.removeClass("off");
    $paths.addClass("on");
  }
}
// $(document).toggle("click", setPlaySpeed);