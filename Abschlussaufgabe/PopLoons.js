var PopLoons;
(function (PopLoons) {
    window.addEventListener("load", init);
    //let movingObjects: MovingObjects[] = [];
    let movingObjects = [];
    let lLoons = 20;
    let movingClouds = [];
    //let loonsPositions: number[] = [];
    let imgData;
    //Highscore
    let highscore = 0;
    alert("Pop as much loons as you can! You can pop them with mouseclicks or by touching them with your finger on your mobilephone.");
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        PopLoons.crc2 = canvas.getContext("2d");
        console.log(PopLoons.crc2);
        environment();
        //Anzahl Clouds
        for (let i = 0; i < 5; i++) {
            let _clouds = new PopLoons.Clouds();
            _clouds.x = Math.random() * PopLoons.crc2.canvas.width;
            _clouds.y = Math.random() * PopLoons.crc2.canvas.height;
            movingClouds.push(_clouds);
        }
        createLoons();
        //Anzahl CloudsFront
        for (let i = 0; i < 10; i++) {
            let _cloudsFront = new PopLoons.CloudsFront();
            _cloudsFront.x = Math.random() * PopLoons.crc2.canvas.width;
            _cloudsFront.y = Math.random() * PopLoons.crc2.canvas.height;
            movingClouds.push(_cloudsFront);
        }
        imgData = PopLoons.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
        canvas.addEventListener("click", removeLoon);
        canvas.addEventListener("touch", removeLoon);
        //Hintergrund
        function environment() {
            let gradient = PopLoons.crc2.createLinearGradient(50, 0, 10, 300);
            gradient.addColorStop(0, "rgb(0,153,255)");
            gradient.addColorStop(1, "rgb(53, 146, 196)");
            PopLoons.crc2.fillStyle = gradient;
            PopLoons.crc2.fillRect(0, 0, 1000, 700);
        }
        //Animate
        function animate() {
            window.setTimeout(animate, 10);
            // Hintergrundbild wird neu gesetzt
            PopLoons.crc2.putImageData(imgData, 0, 0);
            // Aufruf der draw und move Funktionen
            moveObjects();
            drawObjects();
        }
        //moveObjects
        function moveObjects() {
            for (let i = 0; i < movingClouds.length; i++)
                movingClouds[i].move();
            for (let i = 0; i < movingObjects.length; i++)
                movingObjects[i].move();
        }
        //drawObjects
        function drawObjects() {
            for (let i = 0; i < movingClouds.length; i++)
                movingClouds[i].draw();
            for (let i = 0; i < movingObjects.length; i++)
                movingObjects[i].draw();
            drawHighscore();
        }
        //Neue Loons erstellen
        function createLoons() {
            window.setTimeout(createLoons, 800);
            let n = Math.floor(Math.random() * 4);
            switch (n) {
                case 0:
                    let loonsRed = new PopLoons.LoonRed();
                    movingObjects.push(loonsRed);
                    //movingObjects.push(loonsRed);
                    break;
                case 1:
                    let loonsGreen = new PopLoons.LoonGreen();
                    movingObjects.push(loonsGreen);
                    //movingObjects.push(loonsGreen);
                    break;
                case 2:
                    let loonsYellow = new PopLoons.LoonYellow();
                    movingObjects.push(loonsYellow);
                    //movingObjects.push(loonsYellow);
                    break;
                case 3:
                    let loonsBlue = new PopLoons.LoonBlue();
                    movingObjects.push(loonsBlue);
                    //movingObjects.push(loonsBlue);
                    break;
            }
        }
    }
    //removeLoon
    function removeLoon(_event) {
        for (let i = 0; i < movingObjects.length; i++) {
            let l = movingObjects[i];
            let clickX = _event.clientX;
            let clickY = _event.clientY;
            //console.log(clickX); //funktioniert
            let differenceX = Math.abs(l.x - clickX);
            let differenceY = Math.abs(l.y - clickY);
            console.log(differenceX); //NaN als ergebnis?
            if (differenceX <= 100 && differenceY <= 100) {
                movingObjects.splice(i, 1);
                console.log(movingObjects);
            }
        }
    }
    //updateHighscore
    function updateHighscore(points) {
        highscore += points;
        if (highscore >= 150) {
            alert("Congratulations!");
            highscore = 0;
        }
    }
    //drawHighscore
    function drawHighscore() {
        PopLoons.crc2.font = "35px Arial";
        PopLoons.crc2.fillStyle = "rgb(000, 000, 000)";
        PopLoons.crc2.fillText("Punkte: " + highscore, 15, 675);
    }
})(PopLoons || (PopLoons = {}));
//# sourceMappingURL=PopLoons.js.map