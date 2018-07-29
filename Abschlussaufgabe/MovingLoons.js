var PopLoons;
(function (PopLoons) {
    class MovingLoons {
        //width: number = 95;
        //height: number = 100;
        constructor() {
            // ohne Inhalt
        }
        setRandomPosition() {
            this.x = Math.random() * PopLoons.crc2.canvas.width;
            this.y = 0;
        }
        move() {
            // ohne Inhalt
        }
        draw() {
            /*clickLoon
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 100);
            crc2.lineTo(this.x + 95, this.y + 100);
            crc2.lineTo(this.x + 95, this.y);
            crc2.closePath();

            crc2.stroke();   //Hitbox anzeigen*/
            //Loon
            PopLoons.crc2.beginPath();
            PopLoons.crc2.moveTo(this.x + 70, this.y + 110);
            PopLoons.crc2.quadraticCurveTo(this.x + 30, this.y + 40, this.x + 70, this.y + 40);
            PopLoons.crc2.quadraticCurveTo(this.x + 110, this.y + 40, this.x + 70, this.y + 110);
            PopLoons.crc2.lineTo(this.x + 70, this.y + 130);
            PopLoons.crc2.fillStyle = this.color;
            PopLoons.crc2.fill();
            PopLoons.crc2.stroke();
        }
    }
    PopLoons.MovingLoons = MovingLoons;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=MovingLoons.js.map