var Seaworld_Aufg11;
(function (Seaworld_Aufg11) {
    // Klasse f�r die erste Luftblasengruppe
    class BubblesGroup extends MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (360 - 255) + 280;
            this.y = Math.random * 500;
            this.scale = Math.random() * 10;
        }
        move() {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 2;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 510 sein
            if (this.y < 0) {
                this.y = 510;
            }
        }
        draw() {
            Seaworld_Aufg11.crc2.beginPath();
            Seaworld_Aufg11.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Seaworld_Aufg11.crc2.stroke();
            Seaworld_Aufg11.crc2.fillStyle = "rgb(248, 248, 255)";
            Seaworld_Aufg11.crc2.strokeStyle = "rgb(248, 248, 255)";
            Seaworld_Aufg11.crc2.fill();
        }
    }
    Seaworld_Aufg11.BubblesGroup = BubblesGroup;
})(Seaworld_Aufg11 || (Seaworld_Aufg11 = {}));
//# sourceMappingURL=Bubbles.js.map