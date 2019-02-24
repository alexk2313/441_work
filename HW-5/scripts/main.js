var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"]
var blankImagePath = "images/card-back.jpg";
var actualImage = new Array();
var firstNumber = -1;
var secondNumber = -1;


var player = {"firstname":"", "lastname":"", "age":"", "numberOfGuesses":""}

//cardbacks
function printBlanks(){
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++){
      document.getElementById(imageTags[i]).src = blankImagePath;
    }
}


//display new images

function createRandomImageArray(){
  var actualImagePath = ["images/orc.jpg", "images/blood-elf.jpg", "images/tauren.jpg", "images/troll.jpg", "images/goblin.jpg"];
  var count = [0,0,0,0,0];

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



//flipping images and configuring matching

function flipImage(number){

  //make second image appear
    if(firstNumber >= 0){
      secondNumber = number;
      document.getElementById(imageTags[number]).src = actualImage[secondNumber];
      setTimeout(imagesDisappear, 1000);
    }
    else if(firstNumber < 0) //make first image appear
    {
      firstNumber = number;
      document.getElementById(imageTags[number]).src = actualImage[firstNumber];
    }
    //check to see if images dont match
    if(actualImage[secondNumber] != actualImage[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
        setTimeout(imagesDisappear, 1000);
  /* trying to add numberOfGuesses addition
        var attempts =
        localStorage.setItem("playerInfo", JSON.stringify(player));
        */
    }
    else if(actualImage[secondNumber] == actualImage[firstNumber] && firstNumber >= 0 && secondNumber >= 0){
      firstNumber = -1;
      secondNumber = -1;
    }

  }


//making images flip back over


function imagesDisappear(){
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}



//adding info to player

function addToPlayer(){
  var  firstname = document.getElementById("txtFirstName").value;
  player.firstname = firstname;
  localStorage.setItem("playerInfo", JSON.stringify(player));

  var  lastname = document.getElementById("txtLastName").value;
  player.Lastname = lastname;
  localStorage.setItem("playerInfo", JSON.stringify(player));

  var  age = document.getElementById("txtAge").value;
  player.age = age;
  localStorage.setItem("playerInfo", JSON.stringify(player));


  window.location = "matching.html";

}


/*displaying player info on final page (Ask for help about this)



function getPlayerInformation()
{
    var information = localStorage.getItem("player");
    document.getElementById("playerInfo").innerHTML = "<h1>" + JSON.parse(player).car + "</h1>";
}



function goNextPage()
{
    window.location = "matchingfinalpage.html";
}
*/
