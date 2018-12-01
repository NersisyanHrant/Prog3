var side = 20;
var n = 60;
var grassArr = [];
var xotakerner = [];
var gishatichner = [];
var arjer = [];
var vishapArr = [];
var maher = [];
var exan;
var matrix = [];
var socket = io.connect('http://localhost:3000');
var kadr = {
    "xotakeriqanak": 0,
    "xotiqanaky": 0,
    "gishatichiqanak": 0,
    "arjqanak": 0,
    "vishapqanak": 0,
    "mahqanak": 0


};

var row = 100, column = 100;


var gr;

function setup() {
    frameRate(15);
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = random([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6])
        }
    }
    




    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1)
                grassArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2)
                xotakerner.push(xt);
            }


            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y, 3)
                gishatichner.push(gt);
            }
            else if (matrix[y][x] == 4) {
                var arj = new Arj(x, y, 4)
                arjer.push(arj);
            }
            else if (matrix[y][x] == 5) {
                var vish = new Vishap(x, y, 5)
                vishapArr.push(vish);
            }
            else if (matrix[y][x] == 6) {
                var mah = new Mah(x, y, 6)
                maher.push(mah);
            }

        }
    }
}
function draw() {
    if (frameCount % 500 === 0) {
        console.log("dasas");
    
        function changeView(stat) {
            var c = document.getElementById("xotakeriqanak");
            var k = document.getElementById("xotiqanaky");
            var g = document.getElementById("gishatichiqanak");
            var v = document.getElementById("arjqanak");
            var d = document.getElementById("vishapqanak");
            var b = document.getElementById("mahqanak");
            c.innerHTML = stat.xotakeriqanak;
            k.innerHTML = stat.xotiqanaky;
            g.innerHTML = stat.gishatichiqanak;
            v.innerHTML = stat.arjqanak;
            d.innerHTML = stat.vishapqanak;
            b.innerHTML = stat.mahqanak;
        }
    
        function handleSubmit(evt) {
            kadr.xotakeriqanak = xotakerner.length;
            kadr.xotiqanaky = grassArr.length;
            kadr.gishatichiqanak = gishatichner.length;
            kadr.arjqanak = arjer.length;
            kadr.vishapqanak = vishapArr.length;
            kadr.mahqanak = maher.length;
            changeView(kadr);
            socket.emit("send data", kadr);
    
        }
        handleSubmit(kadr);
}


    drawmatrix();
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    if (frameCount % 40 > 0 && frameCount % 40 <=   10) {
        for (var i in grassArr) {
            grassArr[i].bazmanal(1);
        }

    }



    for (var i in xotakerner) {


        xotakerner[i].bazmanal();
        //xotakerner[i].utel();
        xotakerner[i].bazmanal();
        // xotakerner[i].utel();
        xotakerner[i].mahanal();


    }
    for (var i in gishatichner) {
        gishatichner[i].utel();
        gishatichner[i].bazmanal();
        gishatichner[i].bazmanal();
        gishatichner[i].mahanal();
    }

    for (var i in vishapArr) {
        vishapArr[i].utel();
        vishapArr[i].bazmanal();
        vishapArr[i].mahanal();



    }

    for (var i in maher) {
        maher[i].utel();
        maher[i].bazmanal();
        maher[i].mahanal();
    }
    for (var i in arjer) {
        arjer[i].utel();
        arjer[i].bazmanal();
        arjer[i].mahanal();
    }


    //console.log(xotakerner.length)

}

function mouseClicked() {
    var x = mouseX;
    var y = mouseY;
    var nx = Math.floor(x / side);
    var ny = Math.floor(y / side);
    console.log(nx + ":" + ny);

    var gr = new Grass(nx, ny, 1)
    grassArr.push(gr);
}



function drawmatrix() {
    var p = document.getElementById("p");


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (frameCount % 40 > 0 && frameCount % 40 <= 10) {

                //dzmer



                if (matrix[y][x] == 1) {
                    fill("white");


                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("#ede774");
                }
                else if (matrix[y][x] == 6) {
                    fill("black");
                }
                else if (matrix[y][x] == 3) {
                    fill("#ea9898");
                }

                else if (matrix[y][x] == 4) {
                    fill("brown");
                }
                else if (matrix[y][x] == 5) {
                    fill("#95daed");
                }
                exan = "ՁՄԵՌ";
                p.innerText = "ՁՄԵՌ";


                rect(x * side, y * side, side, side);
            }
            else if (frameCount % 40 > 10 && frameCount % 40 <= 20) {
                //garun
                if (matrix[y][x] == 1) {
                    fill("#afffc5");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("#f9f157");
                }
                else if (matrix[y][x] == 6) {
                    fill("black");
                }
                else if (matrix[y][x] == 3) {
                    fill("#f4544b");
                }

                else if (matrix[y][x] == 4) {
                    fill("#e2703f");
                }
                else if (matrix[y][x] == 5) {
                    fill("#4658dd");
                }
                exan = "ԳԱՐՈՒՆ";
                p.innerText = "ԳԱՐՈՒՆ";

                rect(x * side, y * side, side, side);

            }
            else if (frameCount % 40 > 20 && frameCount % 40 <= 30) {
                //amar
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("black");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("brown");
                }
                else if (matrix[y][x] == 5) {
                    fill("blue");
                }
                exan = "ԱՄԱՌ";
                p.innerText = "ԱՄԱՌ";

                rect(x * side, y * side, side, side);

            }
            else if (frameCount % 40 > 30 && frameCount % 40 <= 40) {

                //ashun
                if (matrix[y][x] == 1) {
                    fill("green");

                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");

                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 6) {
                    fill("black");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }

                else if (matrix[y][x] == 4) {
                    fill("#FF8300");
                }
                else if (matrix[y][x] == 5) {
                    fill("blue");
                }
                exan = "ԱՇՈՒՆ";
                p.innerText = "ԱՇՈՒՆ";

                rect(x * side, y * side, side, side);

            }
            else {
                //console.log(frameCount)
            }
        }
    } 
   
}