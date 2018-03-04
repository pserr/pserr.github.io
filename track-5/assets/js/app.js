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
  audio[0].playbackRate = 0.7;
  $("body").removeClass("black");
  $("body").addClass("white");
  audio.addClass("slow");
  console.log(audio);
  }
}

$(document).on("click", setPlaySpeed);

// $(document).toggle("click", setPlaySpeed);