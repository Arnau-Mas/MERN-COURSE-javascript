class Figura {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Figura{
    constructor(x, y, lado1, lado2){
        super(x, y);
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    area(){
        return this.lado1*this.lado2;
    }
}

class Triangle extends Figura{
    constructor(x, y, base,altura){
        super(x,y);
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

class Quadrat extends Rectangle{
    constructor(x,y, lado){
        super(x,y, lado, lado);
    }
}

let figura1 = new Figura(1,1,2,4);
let rectangle1 = new Rectangle(1,1,3,5);
let triangle1 = new Triangle(1,1,4,5);
let quadrat1 = new Quadrat(1,1,6);
