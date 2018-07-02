var Seaworld_Aufg11;
(function (Seaworld_Aufg11) {
    class Fish extends MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * Seaworld_Aufg11.crc2.canvas.width;
            this.y = Math.random() * Seaworld_Aufg11.crc2.canvas.height - 90;
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Seaworld_Aufg11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Seaworld_Aufg11.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            Seaworld_Aufg11.crc2.beginPath();
            Seaworld_Aufg11.crc2.moveTo(this.x, this.y);
            Seaworld_Aufg11.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Seaworld_Aufg11.crc2.lineTo(this.x + 80, this.y - 10);
            Seaworld_Aufg11.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Seaworld_Aufg11.crc2.fillStyle = "rgb(148, 000, 211)";
            Seaworld_Aufg11.crc2.strokeStyle = "rgb(148, 000, 211)";
            Seaworld_Aufg11.crc2.stroke();
            Seaworld_Aufg11.crc2.fill();
        }
    }
    Seaworld_Aufg11.Fish = Fish;
})(Seaworld_Aufg11 || (Seaworld_Aufg11 = {}));
//# sourceMappingURL=Fish.js.map