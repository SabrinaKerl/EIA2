var Seaworld_Aufg11;
(function (Seaworld_Aufg11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let canvas;
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Seaworld_Aufg11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFishFood);
        environment();
        for (let i = 0; i < 14; i++) {
            let fish = new Seaworld_Aufg11.Fish();
            movingObjects.push(fish);
        }
        for (let i = 0; i < 17; i++) {
            let bubbles = new Seaworld_Aufg11.BubblesGroup();
            movingObjects.push(bubbles);
        }
        imgData = Seaworld_Aufg11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        function insertFishyFood(_event) {
            let newPositionX = _event.clientX;
            let newPositionY = _event.clientY;
            for (let i = 0; i < 4; i++) {
                let flakes = new Seaworld_Aufg11.FishFood(newPositionX, newPositionY);
                movingObjects.push(flakes);
                newPositionX += Math.random() * 60;
                newPositionY += Math.random() * 60;
                newPositionY += Math.random() * 30;
            }
        }
        function animate() {
            window.setTimeout(animate, 10);
            // Hintergrundbild wird neu gesetzt
            Seaworld_Aufg11.crc2.putImageData(imgData, 0, 0);
            // Aufruf der draw und move Funktionen
            moveObjects();
            drawObjects();
        }
        function moveObjects() {
            // For-Schleife, iteriert alle Fische durch
            for (let i = 0; i < movingObjects.length; i++) {
                movingObjects[i].move();
            }
        }
        function drawObjects() {
            // For-Schleife, iteriert alle Fische durch
            for (let i = 0; i < movingObjects.length; i++) {
                movingObjects[i].draw();
            }
        }
    }
})(Seaworld_Aufg11 || (Seaworld_Aufg11 = {}));
//# sourceMappingURL=Seaworld.js.map