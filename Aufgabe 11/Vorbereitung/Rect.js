var Aufgabe11;
(function (Aufgabe11) {
    class Rect extends DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    Aufgabe11.Rect = Rect;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Rect.js.map