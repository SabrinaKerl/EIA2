namespace PopLoons {
    export class MovingObjects {
        x: number;
        y: number;
        
        constructor() {
            // ohne Inhalt
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = 0;
        }

        
        move(): void {
            // ohne Inhalt
        }
        
        draw(): void {
            // ohne Inhalt
        }
    }    
}