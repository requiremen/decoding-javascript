class rectangle {
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;

    }

    area(){
        return this.width* this.height;
    }
}
const rect = new rectangle(5,10,"red");
console.log(rect.area());
