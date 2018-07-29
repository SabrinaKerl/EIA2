var PopLoons;
(function (PopLoons) {
    class Clouds extends PopLoons.MovingClouds {
        constructor() {
            super();
            this.color = "rgb(248, 248, 255)";
            this.checkPosition();
            this.setRandomPosition();
            this.setNewRandomSpawnPoint();
        }
        checkPosition() {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();
            }
        }
        setRandomPosition() {
            this.x = Math.random() * PopLoons.crc2.canvas.width;
            this.y = Math.random() * PopLoons.crc2.canvas.height - 200;
        }
        setNewRandomSpawnPoint() {
            this.x = PopLoons.crc2.canvas.width + 50;
            this.y = Math.random() * ((PopLoons.crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
        }
        //Wolken bewegen
        move() {
            this.x -= 1;
            this.y += 0;
            if (this.x < -200) {
                this.x = PopLoons.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = PopLoons.crc2.canvas.height - 200;
                this.x -= 2;
            }
        }
    }
    PopLoons.Clouds = Clouds;
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=Clouds.js.map