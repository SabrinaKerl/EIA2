namespace Aufgabe11 {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 15;

    //let rects: Rect[] = [];
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#00ffff");
            stars.push(star);

            let rect: Rect = new Rect("#ff0000");
            stars.push(rect);
            

        }


        animate();
    }
    
    function insertNewObject(_event: MouseEvent): void { // random neues Objekt einblenden wo Mouse click
        let randomObject: number = Math.floor(Math.random() * 3); // 3 Verschiedene Objekte, er soll 1,2, oder 3 auswählen d.h. Math.floor (schneidet nachkommastellen ab)
        let newX: number = _event.clientX; // newX speichert X Wert den Browser mit clientX vom Mouse click ausliest ab
        let newY: number = _event.clientY;

        switch (randomObject) {
            case 0:
                let star: DavidStar = new DavidStar("#00ff00"); // grün
                star.x = newX;
                star.y = newY;
                stars.push(star);
                break;

            case 1:
                let rect: Rect = new Rect("#000fff"); // dunkelblau
                rect.x = newX;
                rect.y = newY;
                stars.push(rect);
                break;

            case 2:
                let circle: Circle = new Circle("yellow"); // Farbe
                circle.x = newX;
                circle.y = newY;
                stars.push(circle);
                break;
        }
}

   function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height); // Eclipse kennt Deklaration canvas.width: nubmer und kanns es verarbeiten wenn x und y werte übergeben werde naus move()
        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}