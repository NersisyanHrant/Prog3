class gishatich extends Base {
    constructor(x, y) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = [];
        this.index = 3;
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(1);
        var norVandak = random(datarkvandakner);
        var datarkvandakner = this.yntrelVandak(2);
        var norVandak = random(datarkvandakner);
        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;

            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                    xotakerner.splice(i, 1);
                    this.energy += 7
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }


    bazmanal() {

        if (this.energy = 5) {

            this.energy = 2;
            var bazmanaluVandakner = this.yntrelVandak(0);
            var norVandak = random(bazmanaluVandakner);
            if (norVandak) {
                var x = norVandak[0];
                var y = norVandak[1];
                var norGishatich = new gishatich(x, y);
                gishatichner.push(norGishatich);
                matrix[y][x] = 3;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in gishatichner) {
                if (gishatichner[i].x == this.x && gishatichner[i].y == this.y) {
                    gishatichner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }
}