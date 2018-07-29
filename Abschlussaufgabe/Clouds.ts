namespace PopLoons {
    export class Clouds extends MovingClouds {
        constructor() {
            super();
            this.color = "rgb(248, 248, 255)";
            this.checkPosition();
            this.setRandomPosition();
            this.setNewRandomSpawnPoint();
        }

        
        checkPosition(): void {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();
                            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        setNewRandomSpawnPoint(): void {
            this.x = crc2.canvas.width + 50;
            this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
        }

        //Wolken bewegen
        move(): void {
            this.x -= 1;
            this.y += 0;
            if (this.x < -200) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height - 200;
                this.x -= 2;
            }
        }

        /*Wolken zeichnen
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 30, this.y + 110);
            crc2.quadraticCurveTo(this.x + 30, this.y + 50, this.x + 80, this.y + 70);
            crc2.quadraticCurveTo(this.x + 130, this.y + 20, this.x + 170, this.y + 70);
            crc2.quadraticCurveTo(this.x + 220, this.y + 50, this.x + 220, this.y + 110);
            crc2.lineTo(this.x + 30, this.y + 110);
            crc2.fillStyle = "rgb(248, 248, 255)";
            crc2.strokeStyle = "rgb(000, 000, 000)";
            crc2.stroke();
            crc2.fill();
        }*/

    }
}