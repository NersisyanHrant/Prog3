class Mah extends Base {
    constructor(x, y , index) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [];
        this.index = 5;
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

    /*
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    */

    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];


            this.energy--;
        }

    }
    utel() {
        this.stanalNorKordinatner();
        var xotvandakner = this.yntrelVandak(1);
        var xotakervandakner = this.yntrelVandak(2);
        var gishatichvandakner = this.yntrelVandak(3);
        var vishapvandakner = this.yntrelVandak(4);
        var norVandak1 = random(xotvandakner);
        var norVandak2 = random(xotakervandakner);
        var norVandak3 = random(gishatichvandakner);
        var norVandak4 = random(vishapvandakner);
        if (norVandak1) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak1[1]][norVandak1[0]] = 5;
            this.x = norVandak1[0];
            this.y = norVandak1[1];
            this.energy++;

            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (norVandak2) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak2[1]][norVandak2[0]] = 5;
            this.x = norVandak2[0];
            this.y = norVandak2[1];

            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    this.energy++
                    break;
                }
            }
        }
        else if (norVandak3) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak3[1]][norVandak3[0]] = 5;
            this.x = norVandak3[0];
            this.y = norVandak3[1];
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    this.energy++
                    break;
                }
            }
        }

        else if (norVandak4) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak4[1]][norVandak4[0]] = 5;
            this.x = norVandak4[0];
            this.y = norVandak4[1];
            for (var i in vishapArr) {
                if (vishapArr[i].x == this.x && vishapArr[i].y == this.y) {
                    vishapArr.splice(i, 1);
                    this.energy+=10
                    break;
                }
            }


        }
        else {
            this.sharjvel()
        }
    }



    bazmanal() {

        if (this.energy >= 10) {
            var norMah = new Mah(this.x, this.y);
            maher.push(norMah);
            this.energy == 2;
        }
    }

    mahanal() {

        if (this.energy <= -15) {

            for (var i in maher) {
                if (maher[i].x == this.x && maher[i].y == this.y) {
                    maher.splice(i, 1);
                    break;
                }

            }
            matrix[this.y][this.x] = 0;
        }
    }
}