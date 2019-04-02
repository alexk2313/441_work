

$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("data/game.json", function(result){
      $.each(result, function(i, field){
        $("div").append(field + " ");
        for(i = 0; i < 3; i++){
        $("#gameInformation").html("Platform:" + result[i].platform
        + "<br>Players:" + result[i].players + "<br>Peak Players:" + result[i].peak);
      }
      });
    });
  });
}
)
