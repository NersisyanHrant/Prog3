class Grass extends Base {
    constructor(x, y) {
        super(x, y);
        this.x = x;
        this.y = y;
        this.multiply = 0
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
    yntrelVandak(ch) {
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


    bazmanal() {
        this.multiply++
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 2 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 2;
        }
    }
    mahanal() {

        if (this.energy <= -3) {

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