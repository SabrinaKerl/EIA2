var PopLoons;
(function (PopLoons) {
    // Klasse f�r die erste Loongruppe
    class LoonYellow extends PopLoons.MovingLoons {
        constructor() {
            super();
            this.distanceToClick = 2;
            this.points = 15;
            this.color = "rgb(255, 255, 000)";
            this.setRandomPosition();
        }
        //Loons bewegen
        move() {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 4.5;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 700 sein
            if (this.y < -1) {
                this.y = 700;
            }
        }
    }
    PopLoons.LoonYellow = LoonYellow;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=Loons3.js.map