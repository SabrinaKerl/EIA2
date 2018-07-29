var PopLoons;
(function (PopLoons) {
    // Klasse f�r die erste Loongruppe
    class LoonRed extends PopLoons.MovingLoons {
        constructor() {
            super();
            this.distanceToClick = 2;
            this.points = 5;
            this.color = "rgb(255, 000, 000)";
            this.setRandomPosition();
        }
        //Loons bewegen
        move() {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 3.5;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 700 sein
            if (this.y < -1) {
                this.y = 700;
            }
        }
        //randomPosition
        setRandomPositionL1() {
            this.x = Math.random() * PopLoons.crc2.canvas.width;
            this.y = 0;
        }
    }
    PopLoons.LoonRed = LoonRed;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=Loons1.js.map