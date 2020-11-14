

'use strict'

//ООП в прототипном стиле
//Выполнить дз из прошлого урока в прототипном стиле или с помощью классов

let canvas = new Canvas('canvasID');   

function Canvas(value) {   
    let elem = document.getElementById(value);
    this.ctx = elem.getContext("2d");
    
}

Canvas.prototype.add = function(...arr) {
    arr.forEach((item) => {
    item.draw(this.ctx);
    })
}

function Figure(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1,y1,x2,y2,color) {
    this.x2 = x2;
    this.y2 = y2;
    Figure.call(this,x1,y1,color);
    
}

Line.prototype = Object.create(Figure); 

Line.prototype.draw = function(ctx) {
    ctx.beginPath(); 
    ctx.strokeStyle = this.color; 
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();     
}

let line = new Line(100, 500, 400, 450, 'black'); 
let line2 = new Line(100, 550, 400, 500, 'grey'); 

function Circle(x,y,r,color) {
    this.r = r;    
    Figure.call(this,x,y,color);
}

Circle.prototype = Object.create(Figure); 

Circle.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.closePath();
    ctx.fill();
}    

let circle = new Circle(200, 200, 100, 'rgba(0, 191, 255, 0.3)'); 
let circle2 = new Circle(120, 120, 50, 'rgba(0, 191, 255, 0.3)'); 

function Rect(x,y,w,h,color) {
    this.w = w;
    this.h = h;
    Figure.call(this,x,y,color);
}

Rect.prototype = Object.create(Figure); 

Rect.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.w,this.h);
}  

let rect = new Rect(500, 300, 100, 250, 'rgba(69, 176, 42, 0.3)'); 
let rect2 = new Rect(550, 250, 300, 100, 'rgba(204, 31, 143, 0.3)'); 
let rect3 = new Rect(800, 300, 100, 100, 'rgba(214, 214, 34, 0.3)'); 

canvas.add(line, line2, circle, circle2, rect, rect2, rect3);

let x1 = 0;
let y1 = 0;
let x2 = 20;
let y2 = 20;     
for(let i = 0; i < 30; i++) { 
    let line3 = new Line(x1, y1, x2, y2, 'red');
    x1 = x2 + 20;
    y1 = 0;
    x2 = x1 + 20;
    y2 = 20;  
             
    canvas.add(line3);
}    

x1 = 20;
y1 = 20;
x2 = 40;
y2 = 0;     
for(let i = 0; i < 30; i++) { 
    let line4 = new Line(x1, y1, x2, y2, 'red');
    x1 = x2 + 20;
    y1 = 20;
    x2 = x1 + 20;
    y2 = 0;  
        
    canvas.add(line4);
}

    

    


  