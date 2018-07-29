namespace PopLoons {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    //let movingObjects: MovingObjects[] = [];
    let movingObjects: MovingLoons[] = [];
    let lLoons: number = 20;
    let movingClouds: MovingClouds[] = [];
    //let loonsPositions: number[] = [];

    let imgData: ImageData;
    export let canvas: HTMLCanvasElement;

    //Highscore
    let highscore: number = 0;

    alert("Pop as much loons as you can! You can pop them with mouseclicks or by touching them with your finger on your mobilephone.");

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        environment();



        //Anzahl Clouds
        for (let i: number = 0; i < 5; i++) {
            let _clouds: Clouds = new Clouds();
            _clouds.x = Math.random() * crc2.canvas.width;
            _clouds.y = Math.random() * crc2.canvas.height;
            movingClouds.push(_clouds);
            //movingObjects.push(_clouds);
        }


        createLoons();



        //Anzahl CloudsFront
        for (let i: number = 0; i < 10; i++) {
            let _cloudsFront: CloudsFront = new CloudsFront();
            _cloudsFront.x = Math.random() * crc2.canvas.width;
            _cloudsFront.y = Math.random() * crc2.canvas.height;
            movingClouds.push(_cloudsFront);
            //movingObjects.push(_cloudsFront);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

        canvas.addEventListener("click", removeLoon);
        canvas.addEventListener("touch", removeLoon);

        //Hintergrund
        function environment(): void {
            let gradient: CanvasGradient = crc2.createLinearGradient(50, 0, 10, 300);
            gradient.addColorStop(0, "rgb(0,153,255)");
            gradient.addColorStop(1, "rgb(53, 146, 196)");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, 1000, 700);
        }

        //Animate
        function animate(): void {
            window.setTimeout(animate, 10);

            // Hintergrundbild wird neu gesetzt
            crc2.putImageData(imgData, 0, 0);

            // Aufruf der draw und move Funktionen
            moveObjects();
            drawObjects();
        }

        //moveObjects
        function moveObjects(): void {
            for (let i: number = 0; i < movingClouds.length; i++)
                movingClouds[i].move();

            for (let i: number = 0; i < movingObjects.length; i++)
                movingObjects[i].move();

        }

        //drawObjects
        function drawObjects(): void {
            for (let i: number = 0; i < movingClouds.length; i++)
                movingClouds[i].draw();

            for (let i: number = 0; i < movingObjects.length; i++)
                movingObjects[i].draw();

            drawHighscore();
        }

        //Neue Loons erstellen
        function createLoons(): void {
            window.setTimeout(createLoons, 800);
            let n: number = Math.floor(Math.random() * 4);
            switch (n) {
                case 0:
                    let loonsRed: LoonRed = new LoonRed();
                    movingObjects.push(loonsRed);
                    //movingObjects.push(loonsRed);
                    break;
                case 1:
                    let loonsGreen: LoonGreen = new LoonGreen();
                    movingObjects.push(loonsGreen);
                    //movingObjects.push(loonsGreen);
                    break;
                case 2:
                    let loonsYellow: LoonYellow = new LoonYellow();
                    movingObjects.push(loonsYellow);
                    //movingObjects.push(loonsYellow);
                    break;
                case 3:
                    let loonsBlue: LoonBlue = new LoonBlue();
                    movingObjects.push(loonsBlue);
                    //movingObjects.push(loonsBlue);
                    break;
            }
        }
    }

    //removeLoon
    function removeLoon(_event: MouseEvent): void {
        for (let i: number = 0; i < movingObjects.length; i++) {
            let l: MovingLoons = movingObjects[i];

            let clickX: number = _event.clientX;
            let clickY: number = _event.clientY;
            //console.log(clickX); //funktioniert
            let differenceX: number = Math.abs(l.x - clickX);
            let differenceY: number = Math.abs(l.y - clickY);
            console.log(differenceX); //NaN als ergebnis?
            if (differenceX <= 100 && differenceY <= 100) {
                movingObjects.splice(i, 1);
                console.log(movingObjects);
            }
        }
    }

    //updateHighscore
    function updateHighscore(points: number): void {
        highscore += points;
        if (highscore >= 150) {
            alert("Congratulations!");
            highscore = 0;
        }
    }

    //drawHighscore
    function drawHighscore(): void {
        crc2.font = "35px Arial";
        crc2.fillStyle = "rgb(000, 000, 000)";
        crc2.fillText("Punkte: " + highscore, 15, 675);
    }
}