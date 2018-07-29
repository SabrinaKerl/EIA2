var PopLoons;
(function (PopLoons) {
    // Klasse f�r die erste Loongruppe
    class LoonBlue extends PopLoons.MovingLoons {
        constructor() {
            super();
            this.distanceToClick = 2;
            this.points = 20;
            this.color = "rgb(000, 000, 255)";
            this.setRandomPosition();
        }
        //Loons bewegen
        move() {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 5.5;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 700 sein
            if (this.y < -1) {
                this.y = 700;
            }
        }
    }
    PopLoons.LoonBlue = LoonBlue;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=Loons4.js.map