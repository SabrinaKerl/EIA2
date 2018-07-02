namespace Seaworld_Aufg11 {
    export class FishFood extends MovingObjects {
        scale: number;
        color: string;
        stop: number;

        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stop = Math.random() * (450 - 430) + 430;
        }

        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "rgb (255, 228, 181);
                    break;
                case 1:
                    this.color = "rgb (205, 092, 092);
                case 2:
                    this color = "rgb (238, 154, 000);
            }
        }
        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            crc.closePath();
            crc2.fill();

            move(): void {
                this.x += 0;
                this.y += 1;
            
                if(this.y > this.stop) {
                this.y = this.stop;
            }
        }
    }
}