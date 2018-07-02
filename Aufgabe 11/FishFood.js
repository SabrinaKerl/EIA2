var Seaworld_Aufg11;
(function (Seaworld_Aufg11) {
    class FishFood extends MovingObjects {
        constructor(newPositionX, newPositionY) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.scale = 3;
            this.stop = Math.random() * (450 - 430) + 430;
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "rgb (255, 228, 181);;
                    break;
                case 1:
                    this.color = "rgb (205, 092, 092);;
                case 2:
                    this;
                    color = "rgb (238, 154, 000);;
            }
        }
        draw() {
            Seaworld_Aufg11.crc2.fillStyle = this.color;
            Seaworld_Aufg11.crc2.beginPath();
            Seaworld_Aufg11.crc2.arc(this.x, this.y, this.scale, 0, 2 * Math.PI, true);
            crc.closePath();
            Seaworld_Aufg11.crc2.fill();
            move();
            void {
                this: .x += 0,
                this: .y += 1,
                if() { }, this: .y > this.stop };
            {
                this.y = this.stop;
            }
        }
    }
    Seaworld_Aufg11.FishFood = FishFood;
})(Seaworld_Aufg11 || (Seaworld_Aufg11 = {}));
//# sourceMappingURL=FishFood.js.map