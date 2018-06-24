var Seaworld;
(function (Seaworld) {
    class Fish {
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Seaworld.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Seaworld.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            Seaworld.crc2.beginPath();
            Seaworld.crc2.moveTo(this.x, this.y);
            Seaworld.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Seaworld.crc2.lineTo(this.x + 80, this.y - 10);
            Seaworld.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Seaworld.crc2.fillStyle = "rgb(148, 000, 211)";
            Seaworld.crc2.strokeStyle = "rgb(148, 000, 211)";
            Seaworld.crc2.stroke();
            Seaworld.crc2.fill();
        }
    }
    Seaworld.Fish = Fish;
})(Seaworld || (Seaworld = {}));
//# sourceMappingURL=Fish.js.map