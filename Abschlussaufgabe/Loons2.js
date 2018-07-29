var PopLoons;
(function (PopLoons) {
    // Klasse f�r die erste Loongruppe
    class LoonGreen extends PopLoons.MovingLoons {
        constructor() {
            super();
            this.distanceToClick = 2;
            this.points = 10;
            this.color = "rgb(000, 255, 000)";
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
    }
    PopLoons.LoonGreen = LoonGreen;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=Loons2.js.map