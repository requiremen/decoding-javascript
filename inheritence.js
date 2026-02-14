//inheritence in javascrpit
class rectangle extends shape {
    constructor(width,height,color){
        super(color)
        this.width = width;
        this.height = height;
        

    }
    area(){
        return this.width* this.height;
    }
    
}
class circle extends shape {
    constructor(radius,color){
        super(color)
        this.radius = radius;
        
    }
    area(){
        return 3.14 * this.radius * this.radius;
    }
   
}
class square extends shape{
    constructor(side,color){
        super(color)
        this.side = side;
       

    }
    area(){
        return this.side * this.side;

    }
   
}
class shape {
    constructor(color){
        this.color = color;
    }
    paint(){
        console.log("this it the color of the shape" + this.color);
    }
}
