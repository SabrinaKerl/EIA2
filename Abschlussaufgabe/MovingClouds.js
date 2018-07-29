var PopLoons;
(function (PopLoons) {
    class MovingClouds {
        constructor() {
            // ohne Inhalt
        }
        move() {
            // ohne Inhalt
        }
        draw() {
            PopLoons.crc2.beginPath();
            PopLoons.crc2.moveTo(this.x + 30, this.y + 110);
            PopLoons.crc2.quadraticCurveTo(this.x + 30, this.y + 50, this.x + 80, this.y + 70);
            PopLoons.crc2.quadraticCurveTo(this.x + 130, this.y + 20, this.x + 170, this.y + 70);
            PopLoons.crc2.quadraticCurveTo(this.x + 220, this.y + 50, this.x + 220, this.y + 110);
            PopLoons.crc2.lineTo(this.x + 30, this.y + 110);
            PopLoons.crc2.fillStyle = this.color;
            PopLoons.crc2.fill();
            PopLoons.crc2.stroke();
        }
    }
    PopLoons.MovingClouds = MovingClouds;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=MovingClouds.js.map