//var socket = io()
var turn = 0;

var circArray = [{x: 100, y: 580, fillColor: "white"},
                 {x: 200, y: 580, fillColor: "white"},
                 {x: 300, y: 580, fillColor: "white"},
                 {x: 400, y: 580, fillColor: "white"},
                 {x: 500, y: 580, fillColor: "white"},
                 {x: 600, y: 580, fillColor: "white"},
                 {x: 700, y: 580, fillColor: "white"},
                 
                 {x: 100, y: 480, fillColor: "white"},
                 {x: 100, y: 380, fillColor: "white"},
                 {x: 100, y: 280, fillColor: "white"},
                 {x: 100, y: 180, fillColor: "white"},
                 {x: 100, y: 80, fillColor: "white"},
                 
                 {x: 200, y: 480, fillColor: "white"},
                 {x: 300, y: 480, fillColor: "white"},
                 {x: 400, y: 480, fillColor: "white"},
                 {x: 500, y: 480, fillColor: "white"},
                 {x: 600, y: 480, fillColor: "white"},
                 {x: 700, y: 480, fillColor: "white"},
                 
                 {x: 200, y: 280, fillColor: "white"},
                 {x: 300, y: 280, fillColor: "white"},
                 {x: 400, y: 280, fillColor: "white"},
                 {x: 500, y: 280, fillColor: "white"},
                 {x: 600, y: 280, fillColor: "white"},
                 {x: 700, y: 280, fillColor: "white"},
                 
                 {x: 200, y: 180, fillColor: "white"},
                 {x: 300, y: 180, fillColor: "white"},
                 {x: 400, y: 180, fillColor: "white"},
                 {x: 500, y: 180, fillColor: "white"},
                 {x: 600, y: 180, fillColor: "white"},
                 {x: 700, y: 180, fillColor: "white"},
                 
                 {x: 200, y: 80, fillColor: "white"},
                 {x: 300, y: 80, fillColor: "white"},
                 {x: 400, y: 80, fillColor: "white"},
                 {x: 500, y: 80, fillColor: "white"},
                 {x: 600, y: 80, fillColor: "white"},
                 {x: 700, y: 80, fillColor: "white"},
                 
                 {x: 200, y: 380, fillColor: "white"},
                 {x: 300, y: 380, fillColor: "white"},
                 {x: 400, y: 380, fillColor: "white"},
                 {x: 500, y: 380, fillColor: "white"},
                 {x: 600, y: 380, fillColor: "white"},
                 {x: 700, y: 380, fillColor: "white"}]


function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}



function setup() {
    var canvas = createCanvas(800, 650);
    canvas.parent('sketch-holder');
    background(0, 0, 0);
    fill("blue")
    rect(50, 25 , 700, 600);
    fill("white")
    
}

function draw() {
    for (var item of circArray) {
        fill(item.fillColor)
        ellipse(item.x,item.y, 90, 90)        
    }
}

function mouseClicked() {
    for (var item of circArray)  {
        if(mouseX > item.x - 45 && mouseX < item.x + 45 && mouseY > item.y - 45 && mouseY < item.y + 45) {
        
        if(turn == 0) {
        item.fillColor = "red"
        console.log("clicked!")
        turn = 1
        }
        
        else if(turn == 1) {
            item.fillColor = "yellow"
            console.log("clicked!")
            turn = 0
    }
  }
}
}

/*
socket.on(_______, function(info){

})
*/

