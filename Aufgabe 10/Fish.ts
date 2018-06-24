namespace Seaworld {
    export class Fish {
        x: number;
        y: number;

        move(): void {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height;
                this.x -= 2;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            crc2.lineTo(this.x + 80, this.y - 10);
            crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            crc2.fillStyle = "rgb(148, 000, 211)";
            crc2.strokeStyle = "rgb(148, 000, 211)";
            crc2.stroke();
            crc2.fill();
        }

    }
}