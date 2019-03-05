var myViewFinderArray = new Array();


class ViewFinder
{
  constructor(title, image, description, year)
  {
    this.title = title;
    this.image = image;
    this.description = description;
    this.year = year;
  }

  toString()
  {
    return "Title:" + this.title;
    return "Image:" + this.image;
    return "Description:" + this.description;
    return "Year:" + this.year;
  }
  get theTitle()
  {
    return this.title;
  }
  get theImage()
  {
    return this.image;
  }
  get theDescription()
  {
    return this.description;
  }
  get theYear()
  {
    return this.year;
  }

}



function initializeArray()
{
  /* something i was trying to make my images appear
  myViewFinder.image =  "images/bengal.jpg";
  myViewFinder1.image = "images/maine-coon.jpg";
  myViewFinder2.image = "images/Russian-Blue.jpg";
  myViewFinder3.image = "images/siamese.jpg";
  myViewFinder4.image = "images/british-shorthair.jpg";
  */
  var myViewFinder = new ViewFinder("Bengal", "images/bengal.jpg", "A beautiful spotted cat", "2015");
  var myViewFinder1 = new ViewFinder("Maine Coon", "images/maine-coon.jpg", "A large long haired cat", "2012");
  var myViewFinder2 = new ViewFinder("Russian Blue", "images/Russian-Blue.jpg", "A tall slender cat, usually grey in color", "2018");
  var myViewFinder3 = new ViewFinder("Siamese", "images/siamese.jpg", "A short haired tan cat with a black face", "2014");
  var myViewFinder4 = new ViewFinder("British Shorthair", "images/british-shorthair.jpg", "A cat with a broad face and a chunky body", "2014");
  myViewFinderArray.push(myViewFinder);
  myViewFinderArray.push(myViewFinder1);
  myViewFinderArray.push(myViewFinder2);
  myViewFinderArray.push(myViewFinder3);
  myViewFinderArray.push(myViewFinder4);

}

function accessInformation()
{
  // Random object from array math.random
  var random = myViewFinderArray[Math.floor(Math.random() * myViewFinderArray.length)];
  var myViewFinder = new ViewFinder("Bengal", "images/bengal.jpg", "A beautiful spotted cat", "2015");
  var myViewFinder1 = new ViewFinder("Maine Coon", "images/maine-coon.jpg", "A large long haired cat", "2012");
  var myViewFinder2 = new ViewFinder("Russian Blue", "images/Russian-Blue.jpg", "A tall slender cat, usually grey in color", "2018");
  var myViewFinder3 = new ViewFinder("Siamese", "images/siamese.jpg", "A short haired tan cat with a black face", "2014");
  var myViewFinder4 = new ViewFinder("British Shorthair", "images/british-shorthair.jpg", "A cat with a broad face and a chunky body", "2014");
  document.getElementById("title").innerHTML = random.theTitle;
  document.getElementById("image").innerHTML = random.theImage;
  document.getElementById("description").innerHTML = random.theDescription;
  document.getElementById("year").innerHTML = random.theYear;
}
