class Square{

  constructor(xCord, yCord, objectHeight, objectWidth, color){
    this.xCord = xCord;
    this.yCord = yCord;
    this.objectHeight = objectHeight;
    this.objectWidth = objectWidth;
    this.color = color;
  }

  get x(){
    return this.xCord;
  }

  set x(value){
    this.xCord = value;
  }
  get y(){
    return this.yCord;
  }

  set y(value){
    this.yCord = value;
  }
  get height(){
    return this.objectHeight;
  }
  get width(){
    return this.objectWidth;
  }
  get mainColor(){
    return this.color;
  }
}
