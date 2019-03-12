$(document).ready(function(){

  $("button").click(function(){

  //  setinterval(moveSquare, 1000);

  $("#boat").fadeout().fadein();


  });

});

function moveSquare(){
    $(".square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});

}
