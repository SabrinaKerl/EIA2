var Seaworld;
(function (Seaworld) {
    // Klasse f�r die erste Luftblasengruppe
    class BubblesGroup {
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
            Seaworld.crc2.beginPath();
            Seaworld.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Seaworld.crc2.stroke();
            Seaworld.crc2.fillStyle = "rgb(248, 248, 255)";
            Seaworld.crc2.strokeStyle = "rgb(248, 248, 255)";
            Seaworld.crc2.fill();
        }
    }
    Seaworld.BubblesGroup = BubblesGroup;
})(Seaworld || (Seaworld = {}));
//# sourceMappingURL=Bubbles.js.map