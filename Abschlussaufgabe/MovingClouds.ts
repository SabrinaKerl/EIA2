namespace PopLoons {
    export class MovingClouds {
        x: number;
        y: number;
        color: string;

        constructor() {
            // ohne Inhalt
        }

        move(): void {
            // ohne Inhalt
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 30, this.y + 110);
            crc2.quadraticCurveTo(this.x + 30, this.y + 50, this.x + 80, this.y + 70);
            crc2.quadraticCurveTo(this.x + 130, this.y + 20, this.x + 170, this.y + 70);
            crc2.quadraticCurveTo(this.x + 220, this.y + 50, this.x + 220, this.y + 110);
            crc2.lineTo(this.x + 30, this.y + 110);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.stroke();
            
        }
    }
}    
