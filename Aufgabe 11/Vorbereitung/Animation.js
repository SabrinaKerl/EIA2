var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 15;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Aufgabe11.DavidStar("#00ffff");
            stars.push(star);
            let rect = new Aufgabe11.Rect("#ff0000");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        let randomObject = Math.floor(Math.random() * 3); // 3 Verschiedene Objekte, er soll 1,2, oder 3 ausw�hlen d.h. Math.floor (schneidet nachkommastellen ab)
        let newX = _event.clientX; // newX speichert X Wert den Browser mit clientX vom Mouse click ausliest ab
        let newY = _event.clientY;
        switch (randomObject) {
            case 0:
                let star = new Aufgabe11.DavidStar("#00ff00"); // gr�n
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;
            case 1:
                let rect = new Aufgabe11.Rect("#000fff"); // dunkelblau
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;
            case 2:
                let circle = new Aufgabe11.Circle("yellow"); // Farbe
                circle.x = newX;
                circle.y = newY;
                stars.push(circle);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height); // Eclipse kennt Deklaration canvas.width: nubmer und kanns es verarbeiten wenn x und y werte �bergeben werde naus move()
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map