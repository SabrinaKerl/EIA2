namespace Seaworld {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Hintergrund

        crc2.fillStyle = "rgb(0,153,255)";
        crc2.fillRect(0, 0, 360, 640);

        //Funktionsaufrufe

        drawRocks(200, 550);
        drawRocks(350, 550);

        drawSeaGrass(250, 600);
        drawGround1(0, 640);
        drawGround2(360, 639);

        //drawFish
        for (let i: number = 0; i < 11; i++) { // for Schleife die Koordinaten für Fische festlegt
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawFish(x, y);
        }

        drawBubbles(150, 150, 30, 60, 3);
        drawBubbles(220, 40, 80, 160, 5);
        drawBubbles(60, 220, 80, 260, 8);

        drawTreasureBox(620, 600);
    }

    //Init Funktion
    function drawRocks(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 125, _y - 50);
        crc2.lineTo(_x + 150, _y);
        crc2.lineTo(_x + 300, _y + 50);
        crc2.lineTo(_x, _y + 150);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fillStyle = "gray";
        crc2.strokeStyle = "gray";
        crc2.stroke();
        crc2.fill();
    }

    function drawSeaGrass(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }


    //Boden
    function drawGround1(): void {
        crc2.beginPath();
        crc2.moveTo(-1, 640);
        crc2.quadraticCurveTo(0, 500, 360, 640);
        crc2.fillStyle = "rgb(139,105,105)";
        crc2.stroke();
        crc2.fill();
    }

    function drawGround2(): void {
        crc2.beginPath();
        crc2.moveTo(-361, 639);
        crc2.quadraticCurveTo(360, 540, 200, 586);
        crc2.fillStyle = "  rgb(102,51,51)";
        crc2.stroke();
        crc2.fill();
    }

    //Seegras
    function drawGrass(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 50, _y - 50, _x - 70, _y + 0, 300, 450);
        crc2.bezierCurveTo(_x + 0, _y + 0, _x + 35, _y + 0, 275, 600);
        crc2.lineTo(_x + 20, _y + 0);
        crc2.fillStyle = "rgb(0,153,51)";
        crc2.strokeStyle = "rgb(0,153,51)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }

    //Blubberblasen
    function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {

        for (let i: number = 0; i < _a; i++) {
            let width: number = Math.random() * _w;
            let height: number = Math.random() * _h;
            let scale: number = Math.random() * 13;

            crc2.beginPath();
            crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(95,158,160)";
            crc2.strokeStyle = "rgb(95,158,160)";
            crc2.fill();
        }

        //Fische
        function drawFish(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 30, _y - 35, _x + 80, _y + 20);
            crc2.lineTo(_x + 80, _y - 10);
            crc2.quadraticCurveTo(_x + 30, _y + 35, _x, _y);
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "orange";
            crc2.stroke();
            crc2.fill();
        }

        //Schatztruhe

        // SCHATZTRUHE
        function drawBox(_x: number, _y: number): void { // drawBox(620, 600);
            crc2.beginPath(); //Box von der Seite
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 200, _y);
            crc2.lineTo(_x + 200, _y - 100);
            crc2.lineTo(_x, _y - 100);
            crc2.closePath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fill();

            crc2.beginPath(); //Deckel von der Seite
            crc2.moveTo(_x, _y - 100);
            crc2.lineTo(_x + 190, _y - 150);
            crc2.quadraticCurveTo(_x + 70, _y - 190, _x, _y - 100);
            crc2.closePath();
            crc2.fillStyle = "brown";
            crc2.strokeStyle = "brown";
            crc2.stroke();
            crc2.fill();
        }
    }