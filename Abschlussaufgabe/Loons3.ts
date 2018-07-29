namespace PopLoons {
    // Klasse für die erste Loongruppe
    export class LoonYellow extends MovingLoons {//MovingLoons {
        private distanceToClick: number = 2;
        constructor() {
            super();
            this.points = 15;
            this.color = "rgb(255, 255, 000)";
            this.setRandomPosition();
        }

        // Größe der Loons
        scale: number;

        //Loons bewegen
        move(): void {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 4.5;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 700 sein
            if (this.y < -1) {
                this.y = 700;
            }
        }

        /*randomPosition
        setRandomPositionL3(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
        }*/
        
        /*Positionscheck
        checkPositionLoonYellow() {
            let PositionX = this.x;
            let PositionY = this.y;
            let loonsYellowFinalPosition = PositionX + PositionY;
            
            return loonsYellowFinalPosition;
            }*/

        /*Loons zeichnen
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y + 110);
            crc2.quadraticCurveTo(this.x + 30, this.y + 40, this.x + 70, this.y + 40);
            crc2.quadraticCurveTo(this.x + 110, this.y + 40, this.x + 70, this.y + 110);
            crc2.lineTo(this.x + 70, this.y + 130);
            crc2.fillStyle = "rgb(255, 255, 000)";
            crc2.strokeStyle = "rgb(000, 000, 000)";
            crc2.fill();
            crc2.stroke();
        }*/
    }
}