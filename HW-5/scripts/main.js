var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"]
var blankImagePath = "images/card-back.jpg";
var actualImage = new Array();


function printBlanks(){
    //createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++){
      document.getElementById(imageTags[i]).src = blankImagePath;
    }
}



/*
function createRandomImageArray(){
  var actualImagePath = ["images/orc.jpg", "images/blood-elf.jpg"];
  var count = [0,0];

  while(actualImage.length < 10)
  {

    var randomNumber = Math.floor(Math.random() * actualImagePath.length)

    if(count[randomNumber] < 2)
      {
      actualImage.push(actualImagePath[randomNumber]);
      count[randomNumber] = count[randomNumber] + 1;
      }
    }
}





function flipImage(number){
    document.getElementById(imageTags[number]).src = actualImage[number];

}
*/
