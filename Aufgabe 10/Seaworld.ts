namespace Seaworld {
    window.addEventListener("load", init);
    //let crc2: CanvasRenderingContext2D;
    export let crc2: CanvasRenderingContext2D;
    let fishSwarm: Fish[] = [];
    let bubbless: BubblesGroup[] = [];

    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        environment();

        for (let i: number = 0; i < 14; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishSwarm.push(fish);
        }

        for (let i: number = 0; i < 17; i++) {
            let bubbles: BubblesGroup = new BubblesGroup();
            bubbles.x = Math.random() * (400 - 300) + 330;
            bubbles.y = Math.random() * 510;
            // Gr��e der Luftblasen
            bubbles.scale = Math.random() * 8;
            // bubbles = Variable, die zu Beginn deklariert wurde
            bubbless.push(bubbles);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

        function environment(): void {
            //Hintergrund

            crc2.fillStyle = "rgb(0,153,255)";
            crc2.fillRect(0, 0, 1000, 700);

            //Funktionsaufrufe

            drawRocks(200, 550);
            drawRocks(350, 550);

            drawSeaGrass(925, 150);

            drawGround1();
            drawGround2();
        }

        function animate(): void {
            window.setTimeout(animate, 10);

            // Hintergrundbild wird neu gesetzt
            crc2.putImageData(imgData, 0, 0);

            // Aufruf der draw und move Funktionen
            moveObjects();
            drawObjects();
        }
        function moveObjects(): void {
            // For-Schleife, iteriert alle Fische durch
            for (let i: number = 0; i < fishSwarm.length; i++) {
                fishSwarm[i].move();
            }

            // For-Schleife iteriert die Luftblasen durch
            for (let i: number = 0; i < bubbless.length; i++) {
                bubbless[i].move();
            }
        }

        function drawObjects(): void {
            // For-Schleife, iteriert alle Fische durch
            for (let i: number = 0; i < fishSwarm.length; i++) {
                fishSwarm[i].draw();
            }

            // For-Schleife iteriert die Luftblasen durch
            for (let i: number = 0; i < bubbless.length; i++) {
                bubbless[i].draw();
            }
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
            crc2.fillStyle = "rgb(139,137,137)";
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
            crc2.fillStyle = "rgb(46,139,87)";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }


        //Boden
        function drawGround1(): void {
            crc2.beginPath();
            crc2.moveTo(0, 700);
            crc2.quadraticCurveTo(0, 500, 1000, 700);
            crc2.fillStyle = "rgb(139,105,105)";
            crc2.stroke();
            crc2.fill();
        }

        function drawGround2(): void {
            crc2.beginPath();
            crc2.moveTo(700, 999);
            crc2.quadraticCurveTo(700, 640, 400, 686);
            crc2.fillStyle = " rgb(102,51,51)";
            crc2.stroke();
            crc2.fill();
        }

        /*Blubberblasen
    
        function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {
    
            for (let i: number = 0; i < _a; i++) {
                let width: number = Math.random() * _w;
                let height: number = Math.random() * _h;
                let scale: number = Math.random() * 14;
    
                crc2.beginPath();
                crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
                crc2.stroke();
                crc2.fillStyle = "rgb(248, 248, 255)";
                crc2.fill();
            }
        }
    
        //Fische
    
        function drawFish(_x: number, _y: number): void {
    
    
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.quadraticCurveTo(_x + 30, _y - 35, _x + 80, _y + 20);
            crc2.lineTo(_x + 80, _y - 10);
            crc2.quadraticCurveTo(_x + 30, _y + 35, _x, _y);
            crc2.fillStyle = "rgb(148, 000, 211)";
            crc2.stroke();
            crc2.fill();
        }*/

    }
}