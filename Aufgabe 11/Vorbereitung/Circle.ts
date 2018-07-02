namespace Aufgabe11 {
    export class Circle extends DavidStar {

        constructor(_color: string) {
            super(_color);
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
        }
        
       move(): void { // neue Bewegung festlegen
            this.x += Math.random() * 4 - 6;
            this.y += Math.random() * 4 - 3;
        } 
        
    } //extends DavidStar zu
}// namespace zu