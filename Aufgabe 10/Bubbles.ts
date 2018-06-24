namespace Seaworld {
    // Klasse für die erste Luftblasengruppe
    export class BubblesGroup {
        x: number;
        y: number;
        // Durchmesser der Luftblasen
        scale: number;

        move(): void {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 2;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 510 sein
            if (this.y < 0) {
                this.y = 510;
            }
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(248, 248, 255)"; 
            crc2.strokeStyle = "rgb(248, 248, 255)"; 
            crc2.fill();
        }
    }
}