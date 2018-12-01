class Vishap extends Base {
    constructor(x, y , index) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.energy = 2;
        this.gender = Math.round(Math.random());
        this.directions = [];
        this.index = 4;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.stanalNorKordinatner();
        return super.chooseCell(character);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];


            
        }
        this.energy--;

    }
    utel() {

        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norVandak = random(datarkvandakner);
        var gishatichvandakner = this.yntrelVandak(3);
        var xotakervandakner = this.yntrelVandak(2);
        var norVandak = random(gishatichvandakner);
        var norVandak2 = random(xotakervandakner);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    this.energy +=5;
                    break;
                }
            }
        }
        
        else {
            this.sharjvel();
        }

    }


    // bazmanal() {
   
    //     for(){
    //     if(friends =! this.gender && this.energy >=10  && norVandak ){
       
           
    //         var bazmanaluVandakner = this.yntrelVandak(0);
    //         var norVandak = random(bazmanaluVandakner);
    //     }
    // }
    // }

    bazmanal() {
        if (this.gender == 0) {
            var g = 1
        }
        else {
            var g = 0
        }
        var vishapArr = this.chooseCell([2])
        for (var i in vishapArr) {
            for (var l in vishapArr) {
                if(vishapArr[l].y == vishapArr[i][1] && vishapArr[l].x == vishapArr[i][0]){
                    if (vishapArr[l].gender == g) {
                        var jex = []
                        jex.push(vishapArr[l])
                        for (var k in jex) {
                            if (jex[k].energy >= 30) {
                                var emptyCells = this.chooseCell([0]);
                                var newCell = random(emptyCells);
                                if (newCell) {
                                    var newX = newCell[0];
                                    var newY = newCell[1];
                                    matrix[newY][newX] = this.index;
                                    var newVoshxar = new Voshxar(newX, newY, this.index);
                                    voshxarArr.push(newVoshxar);
                                    this.energy = 7;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    mahanal() {
        if (this.energy <=5) {
            for (var i in vishapArr) {
                if (vishapArr[i].x == this.x && vishapArr[i].y == this.y) {
                    vishapArr.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }

            }
        }
    }
}
