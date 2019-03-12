var allImages = new Array();

// my image class
class Images{
  constructor(selector, imagePath){
    this.selector = selector;
    this.imagePath = imagePath;
  }
  get theSelector(){
    return this.selector;
  }
  get theImagePath(){
    return this.imagePath;
  }


  toString(){
    return this.selector + ":" + this.imagePath
  }
}



//jquery

$(document).ready(function(){
  // the information is showing up in console but not cycling throughu
  console.log(allImages[1].toString());
  //setting the image paths
  $(allImages[0].theSelector).attr("src", allImages[0].theImagePath);
  $(allImages[1].theSelector).attr("src", allImages[1].theImagePath);
  $(allImages[2].theSelector).attr("src", allImages[2].theImagePath);
  $(".p2").hide();
  $(".p3").hide();

  //on click function
  $("button").click(function(){

      setInterval(moveSquare, 1000);
      imageLoop();
      quoteLoop();
  });
});






//********************my custom functions******************


//array function

function initializeArray(){

  //making new objects
  var boat = new Images("#boat", "images/boat.jpg");
  var plants = new Images("#plants", "images/plants.jpg");
  var stars = new Images("#stars", "images/stars.jpeg");
  //pushing my new objects to an array
  allImages.push(boat);
  allImages.push(plants);
  allImages.push(stars);
}


function moveSquare(){
    $("#square").animate({left:1300},7000).animate({left:10},7000);

}

function imageLoop(){
  $(allImages[0].theSelector).fadeOut(5000, function(){
      $(allImages[1].theSelector).fadeIn(5000).fadeOut(5000, function(){
        $(allImages[2].theSelector).fadeIn(5000).fadeOut(5000, function(){
          $(allImages[0].theSelector).fadeIn(5000)
        });
      });
  });
  }


function quoteLoop(){
  $(".p1").fadeOut(5000, function(){
    $(".p2").fadeIn(5000).fadeOut(5000, function(){
      $(".p3").fadeIn(5000).fadeOut(5000, function(){
        $(".p1").fadeIn(5000);
    });
  });
});
}
