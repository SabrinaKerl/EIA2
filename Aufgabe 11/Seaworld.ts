namespace Seaworld_Aufg11 {
    window.addEventListener("load", init);
    //let crc2: CanvasRenderingContext2D;
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];

    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFishFood);

        environment();

        for (let i: number = 0; i < 14; i++) {
            let fish: Fish = new Fish();
            movingObjects.push(fish);
        }

        for (let i: number = 0; i < 17; i++) {
            let bubbles: BubblesGroup = new BubblesGroup();
            movingObjects.push(bubbles);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

    function insertFishyFood(_event: MouseEvent): void {
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;

        for (let i: number = 0; i < 4; i++) {
            let flakes: FishFood = new FishFood(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 60;
            newPositionY += Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
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
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }

    function drawObjects(): void {
        // For-Schleife, iteriert alle Fische durch
        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
}