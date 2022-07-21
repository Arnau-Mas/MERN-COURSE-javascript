class Figura {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Figura{
    constructor(lado1, lado2){
        super(lado1, lado2);
    }
    area(){
        return this.x*this.y;
    }
}

class Triangle extends Figura{
    constructor(base,altura){
        super(base,altura);
    }
    area(){
        return this.x*this.y/2
    }
}

class Quadrat extends Triangle{
    constructor(lado){
        super(lado, lado)
    }
    area(){
        return this.x*this.y;
    }
}

let figura1 = new Figura(2,4);
let rectangle1 = new Rectangle(3,5);
let triangle1 = new Triangle(4,5);
let quadrat1 = new Quadrat(6);