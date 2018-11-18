var side = 15;
var matrix = [];
var row = 70, column = 70;


var grassArr = [];
var xotakerner = [];
var gishatichner = [];
var vishapner = [];
var maher = [];
var arjer =[];  
function setup() {
    for(var y = 0; y < row; ++y){
        matrix[y] = [];
        for(var x = 0; x < column; ++x){
            matrix[y][x] = Math.round(random(0,6));
            
        }
        
    }
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                var xot = new Xotaker(x, y)
                xotakerner.push(xot);
            } else if (matrix[y][x] == 3) {
                var gish = new gishatich(x, y)
                gishatichner.push(gish);
            } else if (matrix[y][x] == 4) {
                var vish = new vishap(x, y);
                vishapner.push(vish);
            }
            else if (matrix[y][x] == 5) {
                var ma = new mah(x, y);
                maher.push(ma);
            }
            else if (matrix[y][x] == 6) {
                var arj = new Arj(x, y);
                arjer.push(arj);
            }
        }
    }

}



function draw() {
        console.log(grassArr.length,xotakerner.length);
        //console.log(xotakerner.length);
        //console.log(maher.length);
  

    drawmatrix();
    for (var i in grassArr) {
        grassArr[i].bazmanal();
        grassArr[i].mahanal();

    }

    for (var i in xotakerner) {
        xotakerner[i].utel();
        xotakerner[i].bazmanal();
        xotakerner[i].mahanal();

    }
    
    for (var i in gishatichner) {
        gishatichner[i].utel();
        gishatichner[i].bazmanal();
        gishatichner[i].mahanal();
    }

    for (var i in vishapner) {
        vishapner[i].utel();
        vishapner[i].bazmanal();
        vishapner[i].mahanal();

    }

    for (var i in maher) {
        maher[i].utel();
        maher[i].bazmanal();
        maher[i].mahanal();
    }
    
    for(var i in arjer){
        arjer[i].utel();
        arjer[i].bazmanal();
        arjer[i].mahanal();

    }
    
}

function drawmatrix() {
    var aui = [0, 255];
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (frameCount%40>0 && frameCount%40<10 ) {
               
                //dzmer
              

                
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#ffffff");

                }
                else if (matrix[y][x] == 2) {

                    fill("yellow");

                }
                 else if (matrix[y][x] == 3) {
                     fill("red");
                 }
                 else if (matrix[y][x] == 3) {
                     fill("#802b00");
                 }

                 else if (matrix[y][x] == 4) {
                     fill("black");
                 }
                 else if (matrix[y][x] == 5) {
                     fill("white");
                 }
                

                rect(x * side, y * side, side, side);
            }
            else if (frameCount%40>10 && frameCount%40<20){
                //garun
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#99ff99");

                }
                else if (matrix[y][x] == 2) {

                    fill("yellow");

                }
                
                 else if (matrix[y][x] == 3) {
                     fill("red");
                 }
                 else if (matrix[y][x] == 6) {
                     fill("#802b00");
                 }

                 else if (matrix[y][x] == 4) {
                     fill("black");
                 }
                 else if (matrix[y][x] == 2) {
                     fill("white");
                 }

                rect(x * side, y * side, side, side);

            }
            else if (frameCount%40>20 && frameCount%40<30){
                //amar
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#ffff1a");

                }
                else if (matrix[y][x] == 2) {

                    fill("yellow");

                }
                 else if (matrix[y][x] == 3) {
                     fill("red");
                 }
                 else if (matrix[y][x] == 6) {
                     fill("#802b00");
                 }

                 else if (matrix[y][x] == 4) {
                     fill("black");
                 }
                 else if (matrix[y][x] == 5) {
                     fill("white");
                 }

                rect(x * side, y * side, side, side);

            }
            else if (frameCount%40>30 && frameCount%40<40){

                //ashun
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#ff9900");

                }
                else if (matrix[y][x] == 2) {

                    fill("yellow");

                }
                 else if (matrix[y][x] == 3) {
                     fill("red");
                 }
                 else if (matrix[y][x] == 6) {
                     fill("#802b00");
                 }

                 else if (matrix[y][x] == 4) {
                     fill("black");
                 }
                 else if (matrix[y][x] == 5) {
                     fill("white");
                 }

                rect(x * side, y * side, side, side);

            }
        }
    }
}