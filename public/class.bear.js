class Arj extends Base {
    constructor(x, y, index) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.energy = 2;

        this.directions = [];
        this.index = 6;
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
        this.energy--;
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];


           
        }


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
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    this.energy += 20;
                    break;
                }
            }
            
        }
        else if (norVandak2) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak2[1]][norVandak2[0]] = 4;
            this.x = norVandak2[0];
            this.y = norVandak2[1];

            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }

    }


    bazmanal() {

        if (this.energy >= 5) {
            this.energy = 3;
            var bazmanaluVandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluVandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var norArj = new Arj(x, y);
                arjer.push(norArj);
                matrix[y][x] = 6;
            }
        }
    }

    mahanal() {
        if (this.energy <= -5) {
            for (var i in arjer) {
                if (arjer[i].x == this.x && arjer[i].y == this.y) {
                    arjer.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }

            }
        }
    }
}