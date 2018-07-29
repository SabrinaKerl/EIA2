namespace PopLoons {
    export class MovingLoons {
        x: number;
        y: number;
        color: string;
        points: number;
        //width: number = 95;
        //height: number = 100;

        constructor() {
            // ohne Inhalt
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
        }

        move(): void {
            // ohne Inhalt
        }

        draw(): void {

            /*clickLoon
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 100);
            crc2.lineTo(this.x + 95, this.y + 100);
            crc2.lineTo(this.x + 95, this.y);
            crc2.closePath();

            crc2.stroke();   //Hitbox anzeigen*/

            //Loon
            crc2.beginPath();
            crc2.moveTo(this.x + 70, this.y + 110);
            crc2.quadraticCurveTo(this.x + 30, this.y + 40, this.x + 70, this.y + 40);
            crc2.quadraticCurveTo(this.x + 110, this.y + 40, this.x + 70, this.y + 110);
            crc2.lineTo(this.x + 70, this.y + 130);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.stroke();
        }
    }
}